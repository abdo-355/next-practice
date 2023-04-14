import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import PostHeader from "./PostHeader";
import styles from "./PostContent.module.css"

const DUMMY_POST = {
    id: "p1",
    title: "Getting Started with NextJs",
    slug: "getting-started-with-nextjs",
    image: "getting-started-nextjs.png",
    content: "# this is a first post",
    date: "2022-02-10"
}

const PostContent = () => {
    const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`

    return <article className={styles.content}>
        <PostHeader title={DUMMY_POST.title} image={imagePath} />
        <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
}

export default PostContent;