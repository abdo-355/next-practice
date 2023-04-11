import { NextApiHandler } from "next";

import Email from "@/models/Email";
import connectDB from "@/lib/connectDB";

const handler: NextApiHandler = async (req, res) => {
  // connect to the database
  connectDB();

  if (req.method === "POST") {
    const email = new Email({ email: req.body.email });

    await email.save();

    return res.status(201).json({ message: "Signed up!" });
  }
};

export default handler;
