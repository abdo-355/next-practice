import { NextApiHandler } from "next";

import connectDB from "@/lib/connectDB";
import Comment from "@/models/Comment";

const handler: NextApiHandler = async (req, res) => {
  try {
    const eventId = req.query.eventId;
    connectDB();

    if (req.method === "POST") {
      const comment = new Comment({
        email: req.body.email,
        name: req.body.name,
        comment: req.body.comment,
        eventId: eventId,
      });

      await comment.save();

      res.status(201).json({ message: "comment posted successfully." });
    } else if (req.method === "GET") {
      const comments = await Comment.find({ eventId }).sort({ _id: -1 });

      res.status(200).json({ comments });
    } else {
      res.status(404);
    }
  } catch (err) {
    res.status(500).json({ message: "an error occurred" });
  }
};

export default handler;
