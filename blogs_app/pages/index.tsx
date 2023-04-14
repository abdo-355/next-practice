import { GetStaticProps } from "next";

import FeaturedPosts from "@/components/HomePage/FeaturedPosts";
import Hero from "@/components/HomePage/Hero";
import { getFeaturedPosts } from "@/util/posts";
import { Post } from "@/types/types";

interface Props {
    posts: Post[];
}

const HomePage: React.FC<Props> = ({ posts }) => {
    return <>
        <Hero />
        <FeaturedPosts posts={posts} />
    </>
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const posts = getFeaturedPosts();

    return {
        props: { posts },
    }
}

export default HomePage;