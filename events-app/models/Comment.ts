import mongoose, { Schema, model, Model } from "mongoose";

interface IComment {
  email: string;
  name: string;
  comment: string;
  eventId: string;
}

const commentSchema = new Schema<IComment>({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  eventId: {
    type: String,
    required: true,
  },
});

const Comment: Model<IComment> =
  mongoose.models.comment || model("comment", commentSchema);

export default Comment;
