import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import PostHeader from "./PostHeader";
import { Post } from "@/types/types";
import styles from "./PostContent.module.css";

interface Props {
    post: Post;
}

const PostContent: React.FC<Props> = ({ post }) => {
    const imagePath = `/images/posts/${post.slug}/${post.image}`

    return <article className={styles.content}>
        <PostHeader title={post.title} image={imagePath} />
        <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
}

export default PostContent;