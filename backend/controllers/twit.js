import { Tweet } from "../models/tweetmodel.js";
import { User } from "../models/usermodel.js";
import { ApiRasponce } from "../utils/apiResponce.js";
import { ApiError } from "../utils/apierror.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const Twitt = asyncHandler(async (req, res) => {
  const { description } = req.body;
  const userid = req.user;
  if (!description || !userid) throw new ApiError(400, "please field");
  const userDetail = await User.findById(userid);
  if (!userDetail) throw new ApiError(400, "user not found");
  const newTweet = await Tweet.create({
    description,
    userid,
    userDetail,
  });
  return res
    .status(200)
    .json(new ApiRasponce(200, "Tweet created successfully", newTweet));
});

const twittDelete = asyncHandler(async (req, res) => {
  const { id } = req.params;
  await Tweet.findByIdAndDelete(id)
    .then((tweet) =>
      res
        .status(200)
        .json(new ApiRasponce(200, "Tweet deleted successfully", tweet))
    )
    .catch((err) =>
      res.status(400).json(new ApiError(400, "Tweet not found", err))
    );
});
const likeTwitt = asyncHandler(async (req, res) => {
  const user = req.user;
  const { id } = req.params;
  const twitt = await Tweet.findById(id);
  if (twitt.likes.includes(user)) {
    await Tweet.findByIdAndUpdate(id, {
      $pull: {
        likes: user,
      },
    });
    return res.status(200).json(new ApiRasponce(200, "unliked"));
  } else {
    await Tweet.findByIdAndUpdate(id, {
      $push: {
        likes: user,
      },
    });
    return res.status(200).json(new ApiRasponce(200, "liked"));
  }
});
export { Twitt, twittDelete, likeTwitt };
