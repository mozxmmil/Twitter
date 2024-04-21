import mongoose from "mongoose";
import { User } from "../models/usermodel.js";
import { ApiRasponce } from "../utils/apiResponce.js";
import { ApiError } from "../utils/apierror.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { passwordcompare, passwordhash } from "../utils/bcrypt.js";
import { jwtTokenMaker } from "../utils/jwtToken.js";
import { Tweet } from "../models/tweetmodel.js";
const ragiser = asyncHandler(async (req, res) => {
  const { name, username, email, password, googleAuth, profilePicture } =
    req.body;

  if (googleAuth) {
    const googleLoginUserData = await User.findOne({ email });

    // sign up processor
    if (!googleLoginUserData) {
      const user = await User.create({
        name,
        username,
        email,
        profilePicture,
      });

      const jwt = jwtTokenMaker(user._id);
      if (!jwt) throw new ApiError(400, "Error creating token");
      const cookiew = {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
      };
      res
        .status(200)
        .cookie("token", jwt, cookiew)
        .json(new ApiRasponce(200, "User created successfully", user));
    } else {
      // login processor

      const jwt1 = jwtTokenMaker(googleLoginUserData._id);
      if (!jwt1) throw new ApiError(400, "Error creating token");
      const cookiew = {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
      };

      res
        .status(200)
        .cookie("token", jwt1, cookiew)
        .json(
          new ApiRasponce(200, "User logged in successfully", {
            token: jwt1,
            user: googleLoginUserData,
          })
        );
    }
  } else {
    if (
      !(
        name &&
        username &&
        email &&
        password &&
        name.trim() &&
        username.trim() &&
        email.trim() &&
        password.trim()
      )
    )
      throw new ApiError(400, "Please provide all fields");
    let user = await User.findOne({ $or: [{ email }, { username }] });

    if (user) throw new ApiError(409, "User already exists");

    const hashedpassword = await passwordhash(password);

    const newuser = await User.create({
      name,
      username,
      email,
      password: hashedpassword,
    });

    return res
      .status(200)
      .json(new ApiRasponce(200, "User created successfully", newuser));
  }
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(409).json(new ApiRasponce(409, "Please provide all fields"));
    throw new ApiError(409, "Please provide all fields");
  }

  const user = await User.findOne({ email });

  if (!user) throw new ApiError(409, "User does not exist");

  const ispasswordmatch = await passwordcompare(password, user.password);

  if (!ispasswordmatch) throw new ApiError(409, "incorrect password");
  const jwt = jwtTokenMaker(user._id);
  const cookiew = {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  };

  res
    .status(200)
    .cookie("token", jwt, cookiew)
    .json(
      new ApiRasponce(200, "User logged in successfully", {
        token: jwt,
        user: user,
      })
    );
});

const logout = asyncHandler(async (req, res) => {
  res
    .clearCookie("token", {
      expires: new Date(0),
      httpOnly: true,
      secure: true,
    })
    .json(new ApiRasponce(200, "User logged out successfully"));
});

const bookmark = asyncHandler(async (req, res) => {
  const user = req.user;
  console.log(user);
  const { id } = req.params; // twitt id
  const userinfo = await User.findById(user);
  if (userinfo.bookemark.includes(id)) {
    await User.findByIdAndUpdate(user, {
      $pull: {
        bookemark: id,
      },
    });
    return res.status(200).json(new ApiRasponce(200, "unbookmarked"));
  } else {
    await User.findByIdAndUpdate(user, {
      $push: {
        bookemark: id,
      },
    });
    return res.status(200).json(new ApiRasponce(200, "bookmarked"));
  }
});

const userProfiel = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const userinfo = await User.findById(id).select("-password");
  return res.status(200).json(new ApiRasponce(200, "user profile", userinfo));
});

const getallUser = asyncHandler(async (req, res) => {
  try {
    const id = req.user; // Assuming user ID is passed as a parameter

    // Check if the ID is in a valid format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json(new ApiRasponce(400, "Invalid user ID"));
    }

    // Find all users except the one with the specified ID
    const allUsersInfo = await User.find({ _id: { $ne: id } }).select(
      "-password"
    );

    // Check if any users are found
    if (!allUsersInfo || allUsersInfo.length === 0) {
      return res.status(404).json(new ApiRasponce(404, "No users found"));
    }

    return res
      .status(200)
      .json(new ApiRasponce(200, "All users", allUsersInfo));
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json(new ApiError(500, "Failed to fetch users"));
  }
});

const follow = asyncHandler(async (req, res) => {
  const LoginuserId = req.user;
  const userId = req.params.id;
  const LoginuserDetail = await User.findById(LoginuserId);
  const UserDetail = await User.findById(userId);
  if (!LoginuserDetail.following.includes(userId)) {
    await User.updateOne(LoginuserDetail, {
      $push: {
        following: userId,
      },
    });
    await User.updateOne(UserDetail, {
      $push: {
        followers: LoginuserId,
      },
    });
  } else {
    return res.status(200).json(new ApiRasponce(200, "already following"));
  }
  return res
    .status(200)
    .json(new ApiRasponce(200, `followed user ${UserDetail.name}`));
});

const unfollow = asyncHandler(async (req, res) => {
  const LoginuserId = req.user;
  const UserId = req.params.id;

  // remove the user from the followers list
  const LoginuserDetail = await User.findById(LoginuserId);
  const UserDetail = await User.findById(UserId);
  if (LoginuserDetail.following.includes(UserId)) {
    await User.updateOne(LoginuserDetail, {
      $pull: {
        following: UserId,
      },
    });
    await User.updateOne(UserDetail, {
      $pull: {
        followers: LoginuserId,
      },
    });
  } else {
    return res.status(200).json(new ApiRasponce(200, "not following"));
  }
  return res
    .status(201)
    .json({ message: `unfollowed user ${UserDetail.name}` });
});

const getUsertwittandUserWhoifollow = asyncHandler(async (req, res) => {
  const userId = req.user;
  const userDetail = await Tweet.find({ userid: userId });
  // logeedin user twiit
  const whoifollowId = await User.findById(userId).select("-password");
  // logeedin user who ifollow
  const userWhoIFollowTweet = await Promise.all(
    whoifollowId?.following?.map(async (id) => {
      return await Tweet.find({ userid: id });
    })
  );

  // user who ifollow twiit

  return res
    .status(200)
    .json(
      new ApiRasponce(
        200,
        "get all userWhoIfollow",
        userDetail.concat(...userWhoIFollowTweet)
      )
    );
});

const getOnlyFollowerTwitt = asyncHandler(async (req, res) => {
  const userId = req.user;
  if (!userId) throw new ApiError(400, "please login");

  const userDetail = await User.findById(userId).select("-password");
  const getTwitt = await Promise.all(
    userDetail.following.map(async (id) => {
      return await Tweet.find({ userid: id });
    })
  );

  // Flatten the array of arrays into a single array of objects
  const flattenedTwitt = getTwitt.flat();

  return res
    .status(200)
    .json(new ApiRasponce(200, "get all userWhoIfollow", flattenedTwitt));
});

export {
  ragiser,
  login,
  logout,
  bookmark,
  userProfiel,
  getallUser,
  follow,
  unfollow,
  getUsertwittandUserWhoifollow,
  getOnlyFollowerTwitt,
};
