import { GetStaticProps } from "next";
import Head from "next/head";

import FeaturedPosts from "@/components/HomePage/FeaturedPosts";
import Hero from "@/components/HomePage/Hero";
import { getFeaturedPosts } from "@/utils/posts";
import { Post } from "@/types/types";

interface Props {
    posts: Post[];
}

const HomePage: React.FC<Props> = ({ posts }) => {
    return <>
        <Head>
            <title>NEXT blog</title>
            <meta name="description" content="I post about programmming and web developement" />
        </Head>
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