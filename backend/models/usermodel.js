import mongoose from "mongoose";
const userschema = new mongoose.Schema(
  {
    googleId :{type:String},
    name: { type: String,   },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String,  },
    bio: { type: String, default: "" },
    profilePicture: { type: String, default: "" },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    bookemark:{
      type:Array,
      default:[]
    },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userschema);
export { User };
