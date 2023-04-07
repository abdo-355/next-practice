import { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
  res.json({ message: "hi there!" });
};

export default handler;
