import { NextApiHandler } from "next";
import bcrypt from "bcrypt";

import { connectToDB } from "@/utils/DB";
import User from "@/models/user";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // we here can add more validation but this is enough for now
    if (!email || !password) {
      return res
        .status(422)
        .json({ message: "Email and password are required" });
    }

    await connectToDB();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(422).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = new User({
      email,

      password: hashedPassword,
    });
    await user.save();
    return res.status(201).json({ message: "User created" });
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;
