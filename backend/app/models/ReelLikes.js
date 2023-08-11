const mongoose = require('mongoose');

const reelLikeSchema = new mongoose.Schema(
  {
    // reel_like_id: {
    //   type: String,
    //   required: true,
    //   unique: true,
    // },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Change 'UserModels' to 'User'
      required: true,
    },
    reel_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Video',
      required: true,
    }, 
    created_at: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const ReelLike = mongoose.model('ReelLike', reelLikeSchema);

module.exports = ReelLike;