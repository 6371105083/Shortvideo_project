    // postRoutes.js
    import express from "express";
    import { createVideo } from "../controllers/postController.js";

    const router = express.Router();

    router.post("/create-video", createVideo);

    export default router;
