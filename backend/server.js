import express from "express";
import dotenv from "dotenv";
import connect from "./mongodb/connect.js";
import router from "./routes/url.route.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

connect();

const port = process.env.PORT || 6000;

app.use("/url", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
