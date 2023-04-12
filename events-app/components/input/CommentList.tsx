import { useCallback, useEffect, useState } from "react";

import styles from "./CommentList.module.css";
import { IComment } from "./NewComment";

interface Props {
  eventId: string
}

const CommentList: React.FC<Props> = ({ eventId }) => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [loading, setLoading] = useState(false);

  const getComments = useCallback(async () => {
    setLoading(true)
    const res = await fetch(`/api/comments/${eventId}`)

    const data = await res.json()
    setComments(data.comments)

    setLoading(false)
  }, [eventId])

  useEffect(() => {
    getComments()
  }, [getComments])


  return (
    <ul className={styles.comments}>
      {loading ? <h3>Loading...</h3> : comments.map(comment =>
        <li key={comment._id}>
          <p>{comment.comment}</p>
          <div>
            By <address>{comment.name}</address>
          </div>
        </li>
      )}
    </ul>
  );
};

export default CommentList;
