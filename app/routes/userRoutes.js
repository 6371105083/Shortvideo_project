// userRoutes.js
import express from "express";
import { generateSignature } from "../controllers/userController.js";

const router = express.Router();

router.post("/generate-signature", generateSignature);

export default router;
