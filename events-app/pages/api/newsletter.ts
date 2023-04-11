import { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
  if (req.method === "POST") {
    console.log(req.body.email);
    res.status(201).json({ message: "email added to the newsletter" });
  }
};

export default handler;
