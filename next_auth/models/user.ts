import { Schema, model, models } from "mongoose";

interface IUser {
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const User = models.User || model<IUser>("User", userSchema);

export default User;
