import Image from "next/image";
import ReactMarkdown, { Components } from "react-markdown";

import PostHeader from "./PostHeader";
import { Post } from "@/types/types";
import styles from "./PostContent.module.css";

interface Props {
    post: Post;
}


const PostContent: React.FC<Props> = ({ post }) => {
    const imagePath = `/images/posts/${post.slug}/${post.image}`

    const components: Components = {
        p: (paragraph) => {
            const node = paragraph.node as any;
            if (node.children[0].tagName === "img") {
                const image = node.children[0].properties as HTMLImageElement
                return <div className={styles.image}>
                    <Image src={`/images/posts/${post.slug}/${image.src}`}
                        alt={image.alt}
                        width={600}
                        height={300}
                    />
                </div>
            }

            return <p>{paragraph.children}</p>
        },
    }

    return <article className={styles.content}>
        <PostHeader title={post.title} image={imagePath} />
        <ReactMarkdown components={components}>{post.content}</ReactMarkdown>
    </article>
}

export default PostContent;