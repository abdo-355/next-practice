import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/types/types";

interface Data {
  title: string;
  date: string;
  image: string;
  excerpt: string;
  isFeatured: boolean;
}

const postsDir = path.join(process.cwd(), "content");

export const getPostData = (postId: string): Post => {
  // removes the file extension if exists to make the function flexible
  const postSlug = postId.replace(/\.md$/, "");

  const filePath = path.join(postsDir, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...(data as Data),
    content,
  };

  return postData;
};

export const getAllPosts = () => {
  const postFiles = fs.readdirSync(postsDir);

  const allPosts = postFiles.map((postFile) => getPostData(postFile));

  const sortedPosts = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return sortedPosts;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();

  return allPosts.filter((post) => post.isFeatured);
};
