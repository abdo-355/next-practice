import { useState } from 'react';

import CommentList from './CommentList';
import NewComment, { IComment } from './NewComment';
import styles from './Comments.module.css';

interface Props {
  eventId: string;
}

const Comments: React.FC<Props> = (props) => {
  const { eventId } = props;

  const [showComments, setShowComments] = useState<boolean>(false);

  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  }

  const addCommentHandler = async (commentData: IComment) => {
    const res = await fetch(`/api/events/comments/${eventId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData)
    })

    console.log(await res.json())
  }

  return (
    <section className={styles.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList />}
    </section>
  );
};

export default Comments;
