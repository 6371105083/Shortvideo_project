
const express = require('express');
const {
  createReelLike,
  getAllReelLikes,
  deleteReelLikeById,
} = require('../controllers/likeController');

const router = express.Router();

router.post('/reel-likes', createReelLike);
router.get('/reel-likes', getAllReelLikes);
router.delete('/reel-likes/:id', deleteReelLikeById);

module.exports = router;
