import Link from "next/link";
import Image from "next/image";

import { Post } from "@/types/types";
import styles from "./PostItem.module.css"

interface Props {
    post: Post;
}

const PostItem: React.FC<Props> = ({ post }) => {

    const { content, image, date, title, slug } = post;

    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const imagePath = "/images/posts/" + slug + image

    return <li className={styles.post}>
        <Link href={"/"}>
            <div className={styles.image}>
                <Image src={imagePath} alt={title} width={300} height={200} />
            </div>
            <div className={styles.content}>
                <h3>{title}</h3>
                <time>{formattedDate}</time>
                <p>{content}</p>
            </div>
        </Link>
    </li>
}

export default PostItem