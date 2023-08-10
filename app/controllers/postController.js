
export const createVideo = async (req, res, next) => {
    const {  videoUrl } = req.body;

    if (!videoUrl) {
        res.status(400);
        return next(new Error("Video fields are required"));
    }

    try {
        const video = await video.create({
            videoUrl
        });
    }catch(error){
        console.log(error);
        res.status(500);
        next(error);
    }
}
