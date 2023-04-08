import { NextApiHandler } from "next";
import fs from "fs";
import path from "path";

export interface IFeedback {
  id: string;
  email: string;
  feedback: string;
}

const filePath = path.join(process.cwd(), "data", "feedback.json");

const getFeedbacks = (): IFeedback[] => {
  const data = fs.readFileSync(filePath);

  return JSON.parse(data as unknown as string);
};

const handler: NextApiHandler = (req, res) => {
  if (req.method === "POST") {
    const email: string = req.body.email;
    const text: string = req.body.text;

    const newFeedback: IFeedback = {
      id: new Date().toISOString(),
      email,
      feedback: text,
    };

    // TODO: store feedback in the database or a file
    const feedback = getFeedbacks();

    feedback.push(newFeedback);

    fs.writeFileSync(filePath, JSON.stringify(feedback));

    return res.status(201).json({ message: "Feedback saved successfully" });
  } else {
    res.json({
      feedback: getFeedbacks(),
    });
  }
};

export default handler;
