const express = require("express");
const  {createVideo,getAllVideo }= require("../controllers/video.js");

const router = express.Router();

router.post("/create-video", createVideo);
router.get("/postedVideo",getAllVideo);

module.exports = router; 
