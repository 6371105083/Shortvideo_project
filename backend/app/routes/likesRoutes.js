
const express = require('express');
const {
  createReelLike,
  getAllReelLikes,
  deleteReelLikeById,
  toggleReelLike
} = require('../controllers/likeController');

const router = express.Router();

router.post('/reel-likes', createReelLike);
router.get('/reel-likes', getAllReelLikes);
router.delete('/reel-likes/:id', deleteReelLikeById);
router.post('/toggle-reel-like', toggleReelLike);
module.exports = router;
  