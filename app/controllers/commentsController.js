const ReelComment = require('../models/ReelComments');

// Create a reel comment
const createReelComment = async (req, res, next) => {
    try {
        const { user_id, reel_id, text } = req.body;

        const reelComment = await ReelComment.create({
            user_id,
            reel_id,
            text,
        });

        res.status(201).json({
            success: true,
            reelComment,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error: 'An error occurred while creating the reel comment',
        });
    }
};

// Get all reel comments
const getAllReelComments = async (req, res, next) => {
    try {
        const reelComments = await ReelComment.find();

        res.status(200).json({
            success: true,
            reelComments,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error: 'An error occurred while fetching reel comments',
        });
    }
};

// Delete a reel comment by ID
const deleteReelCommentById = async (req, res, next) => {
    const commentId = req.params.id;

    try {
        const deletedComment = await ReelComment.findByIdAndDelete(commentId);

        if (!deletedComment) {
            res.status(404).json({
                success: false,
                error: 'Reel comment not found',
            });
            return;
        }

        res.status(200).json({
            success: true,
            message: 'Reel comment deleted successfully',
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error: 'An error occurred while deleting the reel comment',
        });
    }
};

module.exports = {
    createReelComment,
    getAllReelComments,
    deleteReelCommentById,
};
