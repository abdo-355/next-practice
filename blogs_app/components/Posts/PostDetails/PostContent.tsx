import Image from "next/image";
import ReactMarkdown, { Components } from "react-markdown";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import coldarkDark from "react-syntax-highlighter/dist/cjs/styles/prism/coldark-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

import PostHeader from "./PostHeader";
import { Post } from "@/types/types";
import styles from "./PostContent.module.css";

interface Props {
    post: Post;
}

SyntaxHighlighter.registerLanguage("js", js)
SyntaxHighlighter.registerLanguage("css", css)

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
        code: (code) => {
            const { children, className } = code
            return <SyntaxHighlighter language={className?.split("-")[1]} style={coldarkDark}>{children as string[]}</SyntaxHighlighter>
        }
    }

    return <article className={styles.content}>
        <PostHeader title={post.title} image={imagePath} />
        <ReactMarkdown components={components}>{post.content}</ReactMarkdown>
    </article>
}

export default PostContent;