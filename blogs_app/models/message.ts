import { Schema, model, Model, models } from "mongoose";

export interface IMessage {
  name: string;
  email: string;
  message: string;
}

const messageSchema = new Schema<IMessage>({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },
});

const Message: Model<IMessage> =
  models.message || model("message", messageSchema);

export default Message;
