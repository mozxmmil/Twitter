import mongoose from "mongoose";
const connectdb = async () => {
  const connect = await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.log(err);
    });
};
export default connectdb;
