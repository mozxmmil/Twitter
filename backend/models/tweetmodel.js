import mongoose from "mongoose";
const Tweetschema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    likes: {
      type: Array,
      default: [],
    },

    userid: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    userDetail:{
      type:Array,
      default:[]
    },

    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Tweet = mongoose.model("Tweet", Tweetschema);
export { Tweet };
