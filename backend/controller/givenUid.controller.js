import { nanoid } from "nanoid";
import express from "express";
import url from "../model/url.model.js";

const givenUid = async (req, res) => {
  try {
    const { givenUrl } = req.body;
    console.log(givenUrl);

    const shortUid = nanoid(8);

    console.log(shortUid);

    const newUrl = await url.findOne({ givenUrl });

    if (newUrl) {
      return res.status(200).json({ shortUid: newUrl.shortUid });
    }

    const createdUrl = new url({ givenUrl, shortUid });

    await createdUrl.save();

    res.status(200).json({ message: "Received", shortUid: shortUid });
  } catch (error) {
    console.log("Error while receiving shortuid: ", error.message);
  }
};

export default givenUid;
