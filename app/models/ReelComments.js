const mongoose = require('mongoose');

const reelCommentSchema = new mongoose.Schema({
  // reel_comment_id: {
  //   type: String,
  //   required: true,
  //   unique: true,         
  // },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  reel_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Video', // Change 'Reel' to 'Video'
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const ReelComment = mongoose.model('ReelComment', reelCommentSchema);

module.exports = ReelComment;