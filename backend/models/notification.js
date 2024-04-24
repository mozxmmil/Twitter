import mongoose from "mongoose";

const NotificationSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  reciver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  type: {
    type: String,
    required: true,
    enum: ["follow", "like"],
  },
  read: {
    type: Boolean,
    default: false,
  },
});

const Notification = mongoose.model("notification",NotificationSchema)
export {Notification}
