import mongoose, { Schema, model, Model } from "mongoose";

interface IEmail {
  email: string;
}

const emailSchema = new Schema<IEmail>({
  email: {
    type: String,
    required: true,
  },
});

const Email: Model<IEmail> =
  mongoose.models.email || model("email", emailSchema);

export default Email;
