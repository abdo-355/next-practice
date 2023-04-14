import Allposts from "@/components/Posts/AllPosts";
import { Post } from "@/types/types";

const DUMMY_POSTS: Post[] = [
    {
        id: "p1",
        title: "Getting Started with NextJs",
        slug: "getting-started-with-nextjs",
        image: "getting-started-nextjs.png",
        content: "Next.js is a popular open-source framework for building server-rendered React applications. It provides a variety of features that make it easy to build high-performance and scalable web applications.",
        date: "2022-02-10"
    },
    {
        id: "p2",
        title: "SEO Best Practices for Next.js",
        slug: "getting-started-with-nextjs2",
        image: "getting-started-nextjs.png",
        content: "Next.js has built-in support for server-side rendering, which can improve SEO. However, there are still best practices you should follow to ensure your site is optimized for search engines.",
        date: "2022-03-05"
    },
    {
        id: "p3",
        title: "Using Next.js with TypeScript",
        slug: "getting-started-with-nextjs3",
        image: "getting-started-nextjs.png",
        content: "Next.js has excellent support for TypeScript, making it easy to write type-safe code. This post covers how to get started with Next.js and TypeScript.",
        date: "2022-04-01"
    },
    {
        id: "p4",
        title: "Next.js vs Gatsby",
        slug: "getting-started-with-nextjs4",
        image: "getting-started-nextjs.png",
        content: "Next.js and Gatsby are both popular frameworks for building React applications. This post compares the two and helps you choose which one is right for your project.",
        date: "2022-05-15"
    },
    {
        id: "p5",
        title: "Optimizing Performance in Next.js",
        slug: "getting-started-with-nextjs5",
        image: "getting-started-nextjs.png",
        content: "Next.js provides a variety of features to help you optimize the performance of your site. This post covers best practices for improving the performance of your Next.js app.",
        date: "2022-06-20"
    }
]

const AllPostsPage = () => {
    return <Allposts posts={DUMMY_POSTS} />
}

export default AllPostsPage;