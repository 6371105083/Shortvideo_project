const express = require("express");
const generateSignature = require("../controllers/upload");

const router = express.Router();

// http://localhost:5000/api/upload/signature
router.get("/signature", generateSignature);

module.exports = router;