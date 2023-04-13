import PostsGrid from "../Posts/PostsGrid";
import styles from "./FeaturedPosts.module.css"
import { Post } from "@/types/types";

interface Props {
    posts: Post[]
}

const FeaturedPosts: React.FC<Props> = ({ posts }) => {
    return <section className={styles.latest}>
        <h2>Featured Posts</h2>
        <PostsGrid posts={posts} />
    </section>
}

export default FeaturedPosts;