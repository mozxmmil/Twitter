import mongoose from "mongoose";
import { Tweet } from "./tweetmodel.js";

const userschema = new mongoose.Schema(
  {
    googleId: { type: String },
    name: { type: String },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    bio: { type: String, default: "" },
    profilePicture: { type: String, default: "" },
    coverImage: { type: String, default: "" },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    bookemark: {
      type: Array,
      default: [],
    },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);
userschema.pre("save", async function (next) {
  if (this.isModified("profilePicture")) {
    try {
      const twitt = await Tweet.find({ userid: this._id });
      await Promise.all(
        twitt.map(async (tw) => {
          tw.userDetail = tw.userDetail.map((itme) => ({
            ...itme,
            profilePicture: this.profilePicture,
          }));
          await tw.save();
        })
      );
    } catch (error) {
      next(error);
    }
    next();
  }
});

const User = mongoose.model("User", userschema);
export { User };
