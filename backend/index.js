const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("../backend/config/db.js");
// const router = require("./app/routes/userRoutes"); // Import videoRoutes
const router = require("./app/routes/postRoutes");
const user = require("./app/routes/userRoutes")
const errorHandler = require("./app/middlewares/authMiddleware")
const likesRoutes = require("./app/routes/likesRoutes.js")
const commentsRoutes = require("./app/routes/commentsRoutes.js")

dotenv.config();

const app = express();


const mongoose = require('mongoose');
const UserController = require('./app/controllers/controllerFunctions.js');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.use(UserController);

// Express App
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use(router);
app.use(user);
app.use(likesRoutes);
app.use(commentsRoutes);
app.use(errorHandler);

// Listen to the requests
app.listen(port, async () => {
  await connectDB();
  console.log("Server started listening on port", port);
});
