const ReelComment = require('../models/ReelComments');

// Create a reel comment
const createReelComment = async (req, res, next) => {
    try {
        const { user_id, reel_id, text,parent_id } = req.body;

        const reelComment = await ReelComment.create({
            user_id,
            reel_id,
            text,
            parent_id
        }); 

        res.status(201).json({
            success: true,
            reelComment,
            user_id,
            reel_id,
            parent_id,
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

        const user_id = req.user_id; 
        const reel_id = req.params.reel_id; 
        const parent_id = req.query.parentId; 

        res.status(200).json({
            success: true,
            reelComments,
            user_id,
            reel_id,
            parent_id
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error:  error.message,
        });
    }
};
const getAllReelCommentsByReelId = async(req,res)=>{
   
    try{
        
        const reel_id = req.params.reel_id; 
        const reelComments = await ReelComment.find({reel_id});
       
        res.status(200).json({
            success:true,
            reelComments,

        })
      

    }catch(error){
        console.log(error)
        res.status(500).json({
            success: false,
            error:  error.message,
        });
    }
} 
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
    getAllReelCommentsByReelId
};
