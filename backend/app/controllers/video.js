
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

};
  const getAllVideo = async (req, res) => {
    try {
      const videos = await Video.find(); // Assuming you want to fetch all videos
      res.json(videos);
    } catch (error) {
      console.error('Error fetching videos:', error);
      res.status(500).json({ error: 'Error fetching videos' });
    }
  };


module.exports = {createVideo,getAllVideo};