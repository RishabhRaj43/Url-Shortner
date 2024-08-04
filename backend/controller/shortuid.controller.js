import { nanoid } from "nanoid";
import express from "express";
import url from "../model/url.model.js";

const shortUid = async (req,res) => {
  try {
    const { shortUid } = req.body;

    const newUrl = await url.findOne({ shortUid });

    if (!newUrl) {
      return res.status(404).json({ message: "Url not found" });
    }
    console.log(newUrl.givenUrl);

    return res.status(200).json({ givenUrl: newUrl.givenUrl });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export default shortUid;
