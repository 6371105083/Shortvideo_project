
const express = require("express");
const generateSignature  = require ("../controllers/upload");

const router = express.Router();

// http://localhost:5000/api/upload
router.post("/", generateSignature);

module.exports = router;