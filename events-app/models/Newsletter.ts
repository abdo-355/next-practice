import mongoose, { Schema, model } from "mongoose";

interface INewsletter {
  email: string;
}

const newsletterSchema = new Schema<INewsletter>({
  email: {
    type: String,
    required: true,
  },
});

const Newsletter =
  mongoose.models.newsletterz ||
  model<INewsletter>("newsletter", newsletterSchema);

export default Newsletter;
