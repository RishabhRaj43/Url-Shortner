import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoUrl = process.env.MongodbUrl;

const connect = async () => {
  try {
    const connect = mongoose.connect(mongoUrl);
    console.log("MongoDb connected");
  } catch (error) {
    console.log(error.message);
  }
};

export default connect;
