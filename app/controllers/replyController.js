const CommentReply = require('../models/CommentsReply');

const createCommentReply = async (req, res, next) => {
  try {
    const { comment_id, user_id, text } = req.body;

    const commentReply = await CommentReply.create({
      comment_id,
      user_id,
      text,
    });

    res.status(201).json({
      success: true,
      commentReply,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: 'An error occurred while creating the comment reply',
    });
  }
};

module.exports = createCommentReply;
