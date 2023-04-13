import { Post } from "@/types/types";
import styles from "./PostsGrid.module.css"
import PostItem from "./PostItem";

interface Props {
    posts: Post[];
}

const PostGrid: React.FC<Props> = ({ posts }) => {
    return <ul className={styles.grid}>
        {posts.map(post =>
            <PostItem key={post.id} post={post} />
        )}
    </ul>
}

export default PostGrid;