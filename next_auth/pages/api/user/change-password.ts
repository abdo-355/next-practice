import { NextApiHandler } from "next";
import { getServerSession } from "next-auth";
import bcrypt from "bcrypt";

import User from "@/models/user";
import { connectToDB } from "@/utils/DB";
import { authOptions } from "../auth/[...nextauth]";

const handler: NextApiHandler = async (req, res) => {
  if (req.method !== "PATCH") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const session = await getServerSession(req, res, authOptions);
    console.log(session);
    if (!session) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const email = session.user!.email;
    const oldPassword = req.body.oldPassword;
    const newPassword = req.body.newPassword;

    try {
      await connectToDB();
    } catch (err) {
      return res.status(500).json({ message: "database connection failed" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    const isValid = await bcrypt.compare(oldPassword, user.password);

    if (!isValid) {
      return res.status(403).json({ message: "invalid password" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);

    user.password = hashedPassword;

    await user.save();

    return res.status(200).json({ message: "password changed successfully" });
  } catch (err) {
    return res.status(500).json({ message: "change password failed" });
  }
};
export default handler;
