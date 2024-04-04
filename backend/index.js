import app from "./app.js";
import dotenv from "dotenv";
import connectdb from "./database/databaseconnect.js";

dotenv.config();
connectdb()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("server is running on port", process.env.PORT);
    });
  })
  .catch((err) => console.log(err));
