import express from "express";
import givenUid from "../controller/givenUid.controller.js";
import shortUid from "../controller/shortuid.controller.js";

const router = express.Router();

router.post('/give',givenUid)

router.post('/take',shortUid)


export default router;