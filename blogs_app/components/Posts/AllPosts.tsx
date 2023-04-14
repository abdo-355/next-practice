import styles from "./AllPosts.module.css";
import { Post } from "@/types/types";
import PostsGrid from "./PostsGrid";

interface Props {
    posts: Post[];
}

const Allposts: React.FC<Props> = ({ posts }) => {
    return <section className={styles.posts}>
        <h1>All Posts</h1>
        <PostsGrid posts={posts} />
    </section>
}

export default Allposts;