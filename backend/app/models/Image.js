const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', 
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
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

module.exports  = mongoose.model('Image', imageSchema);

