const mongoose = require('mongoose');

const commentReplySchema = new mongoose.Schema({
  comment_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment', // Reference the Comment model
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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

const CommentReply = mongoose.model('CommentReply', commentReplySchema);

module.exports = CommentReply;
