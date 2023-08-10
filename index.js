const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("../prject_reels/config/db.js"); // Use require for CommonJS modules
// const router = require("./app/routes/userRoutes"); // Import videoRoutes
const router = require("./app/routes/postRoutes");
const user = require("./app/routes/userRoutes")
const errorHandler = require("./app/middlewares/authMiddleware")
dotenv.config();

//UsersTable


const mongoose = require('mongoose');
const UserController = require('./ControllerFunction');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongoose.connect('mongodb://127.0.0.1:27017/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB successfully');
}).catch(error => {
  console.error('Error connecting to MongoDB:', error);
});

app.use(UserController);


//ReelsTable

// Express App
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use(router);
app.use(user);
//app.use(router);  
//app.use( postRoutes);

app.use(errorHandler);

// Listen to the requests
app.listen(port, async () => {
  await connectDB();
  console.log("Server started listening on port", port);
});
