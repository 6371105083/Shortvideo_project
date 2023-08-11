
const express = require('express');
const {
  createReelComment,
  getAllReelComments,
  deleteReelCommentById,
} = require('../controllers/commentsController');

const router = express.Router({ mergeParams: true });
const commentRepliesRoutes = require('../controllers/replyController.js');


router.post('/reel-comments', createReelComment);
router.get('/reel-comments', getAllReelComments);
router.delete('/reel-comments/:id', deleteReelCommentById); 

router.use('/comments/:commentId', commentRepliesRoutes);

module.exports = router;

