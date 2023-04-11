import { NextApiHandler } from "next";

import Newsletter from "@/models/Newsletter";
import connectDB from "@/lib/connectDB";

const handler: NextApiHandler = async (req, res) => {
  // connect to the database
  connectDB();

  if (req.method === "POST") {
    const email = req.body.email;
    const newsletter = new Newsletter({ email });

    await newsletter.save();

    return res.status(201).json({ message: "Signed up!" });
  }
};

export default handler;
