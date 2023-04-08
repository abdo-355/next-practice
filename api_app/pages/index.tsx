import { useRef, FormEventHandler } from "react";

const HomePage = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const feedbackRef = useRef<HTMLTextAreaElement>(null)

  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current?.value
    const enteredFeedback = feedbackRef.current?.value

    fetch("/api/feedback", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: enteredEmail, feedback: enteredFeedback })
    }).then(async response => {
      console.log(await response.json());
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
    </div>
  )
}

export default HomePage;