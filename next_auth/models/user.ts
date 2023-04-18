import { Model, Schema, model, models } from "mongoose";

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

const User: Model<IUser> = models.User || model("User", userSchema);

export default User;
