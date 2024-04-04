// passport-setup.js
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Types } from "mongoose";

import { User } from "../models/usermodel.js";
import dotenv from "dotenv";
dotenv.config();

const googlestrategy = new GoogleStrategy(
  {
    clientID: process.env.Client_ID,
    clientSecret: process.env.Client_secret,
    callbackURL: "/auth/google/callback",
  },
  async (accessToken, refreshToken, profile, done) => {
    console.log(profile);

    try {
      // Check if user already exists in the database
      let existingUser = await User.findOne({ username: profile.displayName });

      if (existingUser) {
        done(null, existingUser);
      } else {
        // Create a new user
        const newUser = new User({
          // Use string representation of ObjectId

          googleId: profile.id,
          username: profile.displayName,
          email: profile.emails[0].value,
          name: profile.name.givenName,
          // Other fields...
        });

        // Save the new user
        const savedUser = await newUser.save();
        done(null, savedUser);
      }
    } catch (error) {
      console.error("Error processing Google authentication:", error);
      done(error, null);
    }
  }
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    console.error("Error deserializing user:", error);
    done(error, null);
  }
});

export { googlestrategy };
