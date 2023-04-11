import { useCallback, useEffect, useState } from 'react';

import styles from './CommentList.module.css';
import { IComment } from './NewComment';

interface Props {
  eventId: string
}

const CommentList: React.FC<Props> = ({ eventId }) => {

  const [comments, setComments] = useState<IComment[]>([])

  const getComments = useCallback(async () => {
    const res = await fetch(`/api/comments/${eventId}`)

    const data = await res.json()

    setComments(data.comments)
  }, [eventId])

  useEffect(() => {
    getComments()
  }, [getComments])


  return (
    <ul className={styles.comments}>
      {comments.map(comment =>
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
