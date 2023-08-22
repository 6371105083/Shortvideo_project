
const express = require('express');
const {
  createReelComment,
  getAllReelComments, 
  deleteReelCommentById,
  getAllReelCommentsByReelId,
} = require('../controllers/commentsController');

const router = express.Router();
//  const commentRepliesRoutes = require('../controllers/replyController.js');


router.post('/reel-comments', createReelComment);
router.get('/reel-comments', getAllReelComments);
router.delete('/reel-comments/:id', deleteReelCommentById); 
router.get('/comments/:reel_id',getAllReelCommentsByReelId);

// router.use('/comments/:commentId', commentRepliesRoutes);

module.exports = router;

