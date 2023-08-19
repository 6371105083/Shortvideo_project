
const ReelLike = require('../models/ReelLikes');

const createReelLike = async (req, res) => {
  try {
    const { user_id, reel_id } = req.body;
    const newReelLike = new ReelLike({ user_id, reel_id });
    await newReelLike.save();

    res.status(201).json({ reel_id, user_id, message: 'Reel like created successfully', reelLike: newReelLike });
  } catch (error) {
    console.error('Error creating reel like:', error);
    res.status(500).json({ error: 'Error creating reel like' });
  }
};

const getAllReelLikes = async (req, res) => {
  try {
    const reelLikes = await ReelLike.find();
    res.json(reelLikes);
  } catch (error) {
    console.error('Error fetching reel likes:', error);
    res.status(500).json({reel_id, user_id,error: 'Error fetching reel likes' });
  }
};

const deleteReelLikeById = async (req, res) => {
  try {
    const deletedReelLike = await ReelLike.findByIdAndRemove(req.params.id);
    if (!deletedReelLike) {
      return res.status(404).json({ error: 'Reel like not found' });
    }
    res.json({ message: 'Reel like deleted successfully' });
  } catch (error) {
    console.error('Error deleting reel like:', error);
    res.status(500).json({ error: 'Error deleting reel like' });
  }
};

const toggleReelLike = async (req, res) => {
  try {
    const { user_id, reel_id } = req.body;

    // Check if a like exists for the user and reel
    const existingReelLike = await ReelLike.findOne({ user_id, reel_id });

    if (existingReelLike) {
      // If the like exists, delete it
      await ReelLike.findByIdAndRemove(existingReelLike._id);
      res.json({ message: 'Reel like deleted successfully' });
    } else {
      // If the like doesn't exist, create a new like
      const newReelLike = new ReelLike({ user_id, reel_id });
      await newReelLike.save();
      res.status(201).json({ reel_id, user_id, message: 'Reel like created successfully', reelLike: newReelLike });
    }
  } catch (error) {
    console.error('Error toggling reel like:', error);
    res.status(500).json({ error: 'Error toggling reel like' });
  }
};

module.exports = {
  createReelLike,
  getAllReelLikes,
  deleteReelLikeById,
  toggleReelLike,
};
