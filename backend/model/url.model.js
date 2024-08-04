import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  givenUrl: {
    type: String,
    require: true,
    unique:true
  },
  shortUid: {
    type: String,
    unique: true,
    require: true,
  },
});

const url = mongoose.model("url", urlSchema);

export default url;
