import { NextApiHandler } from "next";

import Message from "@/models/message";
import connectDB from "@/utils/connectDB";

const handler: NextApiHandler = async (req, res) => {
  try {
    if (req.method === "POST") {
      const { name, email, message } = req.body;

      if (
        !name ||
        !email ||
        !message ||
        name.trim().length < 1 ||
        email.trim().length < 1 ||
        message.trim().length < 1 ||
        !email.includes("@") ||
        !email.includes(".")
      ) {
        return res.status(422).json({ error: "Invalid input" });
      }

      await connectDB();

      // store it in a database
      const newMessage = new Message({
        name,
        email,
        message,
      });

      await newMessage.save();

      return res.status(201).json({ message: "Success" });
    }

    return res.status(400).json({ error: "Invalid request" });
  } catch (err) {
    res.status(500).json({ error: "something went wrong" });
  }
};
export default handler;
