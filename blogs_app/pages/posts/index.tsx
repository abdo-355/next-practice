import { GetStaticProps } from "next";

import Allposts from "@/components/Posts/AllPosts";
import { Post } from "@/types/types";
import { getAllPosts } from "@/util/posts";

interface Props {
    posts: Post[];
}

const AllPostsPage: React.FC<Props> = ({ posts }) => {
    return <Allposts posts={posts} />
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const posts = getAllPosts();

    return {
        props: { posts },
    }
}

export default AllPostsPage;