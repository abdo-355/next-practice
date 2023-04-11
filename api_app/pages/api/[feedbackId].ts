import { NextApiHandler } from "next";

import { getfeedback } from "./feedback";

const handler: NextApiHandler = (req, res) => {
  const feedbackId = req.query.feedbackId as string;

  const feedbackData = getfeedback();

  const selectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );

  res.json({ feedback: selectedFeedback });
};

export default handler;
