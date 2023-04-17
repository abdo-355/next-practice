import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import { connectToDB } from "@/utils/DB";
import User from "@/models/user";

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        await connectToDB();

        const user = await User.findOne({ email: credentials!.email });

        if (!user) {
          throw new Error("could not log you in");
        }

        const isValid = await bcrypt.compare(
          credentials!.password,
          user.password
        );

        if (!isValid) {
          throw new Error("could not log you in");
        }

        return {
          id: user._id,
          email: user.email,
        };
      },
    }),
  ],
});
