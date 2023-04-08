import { NextApiHandler } from "next";
import fs from "fs";
import path from "path";

interface IFeedback {
  id: string;
  email: string;
  feedback: string;
}

const handler: NextApiHandler = (req, res) => {
  if (req.method === "POST") {
    const email: string = req.body.email;
    const feedback: string = req.body.feedback;

    const newFeedback: IFeedback = {
      id: new Date().toISOString(),
      email,
      feedback,
    };

    // TODO: store feedback in the database or a file
    const filePath = path.join(process.cwd(), "data", "feedback.json");

    const data = fs.readFileSync(filePath);

    const feedbacks: IFeedback[] = JSON.parse(data as unknown as string);

    feedbacks.push(newFeedback);

    fs.writeFileSync(filePath, JSON.stringify(feedbacks));

    return res.status(201).json({ message: "Feedback saved successfully" });
  }

  res.json({ message: "hi there!" });
};

export default handler;
