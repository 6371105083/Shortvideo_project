const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("../prject_reels/config/db.js"); // Use require for CommonJS modules
// const router = require("./app/routes/userRoutes"); // Import videoRoutes
const router= require("./app/routes/postRoutes");
const user = require("./app/routes/userRoutes")
const errorHandler =require("./app/middlewares/authMiddleware")
dotenv.config();

// Express App
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use(router);
app.use( user);
//app.use(router);  
 //app.use( postRoutes);

app.use(errorHandler);

// Listen to the requests
app.listen(port, async () => {
    await connectDB();
    console.log("Server started listening on port", port);
});
