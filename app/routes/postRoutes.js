// const express = require("express");
// const  createVideo = require("../controllers/postController.js");

// const router = express.Router();

// router.post("/create-video", createVideo);

// module.exports = router;

const express = require("express");
const generateSignature = require("../controllers/userController.js");

const router = express.Router();

router.post("/generate-signature", generateSignature);

module.exports=router;