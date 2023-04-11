import { NextApiHandler } from "next";

const handler: NextApiHandler = (req, res) => {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    console.table({
      email: req.body.email,
      name: req.body.name,
      comment: req.body.comment,
      id: eventId,
    });

    res.status(201).json({ message: "comment posted successfully." });
  } else {
  }
};

export default handler;
