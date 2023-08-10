const express = require("express");
const  createVideo = require("../controllers/video.js");

const router = express.Router();

router.post("/create-video", createVideo);

module.exports = router;
