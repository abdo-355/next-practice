import { useRef, FormEventHandler, useState } from "react";

import { IFeedback } from "./api/feedback";

const HomePage = () => {
  const [feedback, setFeedback] = useState<IFeedback[]>([])

  const emailRef = useRef<HTMLInputElement>(null)
  const feedbackRef = useRef<HTMLTextAreaElement>(null)

  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current?.value
    const enteredFeedback = feedbackRef.current?.value

    fetch("/api/feedback", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: enteredEmail, text: enteredFeedback })
    }).then(response => {
      console.log(response.json());
    }).catch(err => {
      console.log(err);
    })
  }

  const loadFeedback = () => {
    fetch("/api/feedback").then(async response => {
      const data = await response.json()

      setFeedback(data.feedback)
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input ref={emailRef} type="email" id="email" />
        </div>
        <div>
          <label htmlFor="feedback">Feedback</label>
          <textarea ref={feedbackRef} id="feedback" rows={5} />
        </div>
        <button>Send Feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedback}>Load Feedback</button>
      {feedback.length > 0 && <ul>
        {feedback.map(feedback =>
          <li key={feedback.id}>{feedback.feedback}</li>
        )}
      </ul>}
    </div>
  )
}

export default HomePage;