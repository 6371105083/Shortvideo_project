
const express = require('express');
const {
  createReelComment,
  getAllReelComments,
  deleteReelCommentById,
} = require('../controllers/commentsController');

const router = express.Router();

router.post('/reel-comments', createReelComment);
router.get('/reel-comments', getAllReelComments);
router.delete('/reel-comments/:id', deleteReelCommentById); 

module.exports = router;
