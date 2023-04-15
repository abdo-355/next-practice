import { GetStaticProps } from "next";

import Allposts from "@/components/Posts/AllPosts";
import { Post } from "@/types/types";
import { getAllPosts } from "@/util/posts";
import Head from "next/head";

interface Props {
    posts: Post[];
}

const AllPostsPage: React.FC<Props> = ({ posts }) => {
    return <>
        <Head>
            <title>All posts</title>
            <meta name="description" content="a list of exciting programming tutorials and posts" />
        </Head>
        <Allposts posts={posts} />
    </>
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const posts = getAllPosts();

    return {
        props: { posts },
    }
}

export default AllPostsPage;