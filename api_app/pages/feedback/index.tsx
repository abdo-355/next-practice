import { useState } from "react";
import { GetStaticProps } from "next";

import { getfeedback, IFeedback } from "../api/feedback";

interface Props {
    items: IFeedback[]
}

const FeedbackPage: React.FC<Props> = ({ items }) => {
    const [feedbackData, setfeedbackData] = useState<IFeedback>()

    const loadFeedbackHandler = async (id: string) => {
        const res = await fetch(`/api/${id}`)

        const data: { feedback: IFeedback } = await res.json();

        setfeedbackData(data.feedback)
    }

    return <>
        {feedbackData && "email: " + feedbackData.email}
        <ul>
            {items.map(item => <li key={item.id}>{item.feedback}
                <button onClick={() => loadFeedbackHandler(item.id)}>Show Details</button>
            </li>)}
        </ul>
    </>
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const data = getfeedback();

    return {
        props: {
            items: data
        }
    }
}

export default FeedbackPage;
