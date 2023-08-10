
const Video= require("../models/Video.js"); 

const createVideo = async (req, res, next) => {
  const { user_id, videoUrl,caption,created_at } = req.body;

  if (!videoUrl) { 
    res.status(400);
    return next(new Error(" videoUrl fields are required"));
  }

  try {
    const video = await Video.create({
    user_id, videoUrl,caption,created_at
    });

    res.status(201).json({
      success: true,
      video,
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    next(error);
  }
}
module.exports = createVideo;