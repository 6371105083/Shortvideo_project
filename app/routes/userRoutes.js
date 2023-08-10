// const express = require("express");
// const { generateSignature } = require("../controllers/userController.js");

// const router = express.Router();

// router.post("/generate-signature", generateSignature);

// module.exports=router;


const express = require("express");
const  createVideo = require("../controllers/postController");

const router = express.Router();

router.post("/create-video", async (req, res, next) => {
    const {  videoUrl } = req.body;

    if (!videoUrl) {
        res.status(400);
        return next(new Error("Video fields are required"));
    }

    try {
        const video = await video.create({
            videoUrl
        });
    }catch(error){
        console.log(error);
        res.status(500);
        next(error);
    }
});

module.exports = router;
