import passport from "passport";
import express from "express";
import { jwtTokenMaker } from "../utils/jwtToken.js";
import { ApiRasponce } from "../utils/apiResponce.js";
const googleauth = express.Router();

googleauth.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

googleauth.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${process.env.FRONTEND_ID}/login`,
  }),
  (req, res) => {
    // Successful authentication, redirect or send response as needed
    res.send(`sucsess`);
  }
);
googleauth.get("/login/sucsess", async (req, res) => {
  const user = req.user;
  console.log(user);
  const id = req.user?._id.toString();
  console.log(id);
  const token = await jwtTokenMaker(id);
  const cookiew = {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  };
  res
    .status(200)
    .cookie("token", token, cookiew)
    .json(
      new ApiRasponce(200, "User logged in successfully", {
        token: token,
        user: user,
      })
    );
});

googleauth.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

export default googleauth;
