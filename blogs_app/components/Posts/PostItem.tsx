import Link from "next/link";
import Image from "next/image";

import { Post } from "@/types/types";
import styles from "./PostItem.module.css"

interface Props {
    post: Post;
}

const PostItem: React.FC<Props> = ({ post }) => {

    const { excerpt, image, date, title, slug } = post;

    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const imagePath = `/images/posts/${slug}/${image}`;

    return <li className={styles.post}>
        <Link href={`/posts/${slug}`}>
            <div className={styles.image}>
                <Image src={imagePath} alt={title} fill />
            </div>
            <div className={styles.content}>
                <h3>{title}</h3>
                <time>{formattedDate}</time>
                <p>{excerpt}</p>
            </div>
        </Link>
    </li>
}

export default PostItem