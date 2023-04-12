import { useContext, useState } from "react";

import CommentList from "./CommentList";
import NewComment, { IComment } from "./NewComment";
import styles from "./Comments.module.css";
import NotificationContext from "@/context/notification";

interface Props {
  eventId: string;
}

const Comments: React.FC<Props> = ({ eventId }) => {
  const [showComments, setShowComments] = useState<boolean>(false);
  const { showNotification } = useContext(NotificationContext)

  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  }

  const addCommentHandler = async (commentData: IComment) => {
    try {
      showNotification({
        title: "Posting...",
        message: "Posting the comment",
        status: "pending"
      })

      const res = await fetch(`/api/comments/${eventId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentData)
      })

      if (res.ok) {
        showNotification({
          title: "Success!",
          message: "Comment added successfully",
          status: "success"
        })
      } else {
        const data = await res.json();

        throw new Error(data.message || "Something went wrong!")
      }

      console.log(await res.json())
    } catch (err: unknown) {
      showNotification({
        title: "Error",
        message: (err as { message: string }).message,
        status: "error"
      })
    }
  }

  return (
    <section className={styles.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <>
        <NewComment onAddComment={addCommentHandler} />
        <CommentList eventId={eventId} />
      </>}
    </section>
  );
};

export default Comments;
