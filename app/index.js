const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db"); // Use require for CommonJS modules
const videoRoutes = require("./app/routes/userRoutes"); // Import videoRoutes

dotenv.config();

// Rest of your code...

// Express App
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/videos", videoRoutes); // Use videoRoutes, not userRoutes
app.use("/api/posts", postRoutes);

app.use(errorHandler);

// Listen to the requests
app.listen(port, async () => {
    await connectDB();
    console.log("Server started listening on port", port);
});
