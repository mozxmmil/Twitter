import express, { json } from "express";
import cookie from "cookie-parser";
import router from "./routes/router.js";
import passport from "passport";
import session from "express-session";
import cors from "cors";
const app = express();
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
const allowedOrigins = ["http://localhost:5173"];
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Enable sending cookies with CORS requests
};

app.use(cors(corsOptions));
app.use(passport.initialize());
app.use(passport.session());
import { googlestrategy } from "./service/passport.js";
import { ApiError } from "./utils/apierror.js";
passport.use(googlestrategy);
app.use(cookie());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:5173/",
    failureRedirect: "/login",
  }),
  (req, res) => {
    res.status(200).json({ message: "sucessfull" }); // Redirect to homepage after successful authentication
  }
);
app.get("/logout", (req, res) => {
  req.logout(() => res.redirect("http://localhost:5173/login")); // Passport's logout method
  // Redirect to login page after logout
});
export default app;
