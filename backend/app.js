import express, { json } from "express";
import cookie from "cookie-parser";
import router from "./routes/router.js";
import passport from "passport";
import session from "express-session";
import cors from "cors";
import { googlestrategy } from "./service/passport.js";
import googleauth from "./controllers/google-auth.js";


const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173","http://localhost:5173/login"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cookie());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
passport.use(googlestrategy);

app.use("/api/v1", router);
app.use("/api/v2",googleauth)

export default app;
