import { GetStaticProps, GetStaticPaths } from "next";

import PostContent from "@/components/Posts/PostDetails/PostContent";
import { Post } from "@/types/types"
import { getAllPosts, getPostData } from "@/util/posts";

interface Props {
    post: Post;
}

const PostDetailPage: React.FC<Props> = ({ post }) => {
    return <PostContent post={post} />
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
    const { params } = context;

    const slug = params!.slug as string;

    const post = getPostData(slug)

    return {
        props: { post },
        revalidate: 1800,
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = getAllPosts();

    const paths = posts.map(post => ({ params: { slug: post.slug } }))

    return {
        paths,
        fallback: false,
    }
}

export default PostDetailPage;