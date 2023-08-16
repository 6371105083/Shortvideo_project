const express = require('express');
const bcrypt = require('bcrypt');
const UserModel = require('../models/UserModels');
const SecretKey="secretkey"
 const jwt = require("jsonwebtoken");
 



const router = express.Router();
//Register
router.post('/register', async (req, res) => {
  try {
    const { username,email, password,profile_picture,bio,created_at } = req.body;

    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({ username, password: hashedPassword,email,profile_picture,bio,created_at });
    await user.save();

    res.status(200).json({ message: 'User Registered Successfully.' });
  } catch (error) {
    console.error('Error in Registering the user:', error);
    res.status(500).json({ error: 'Error in Registering the user' });
  }
});
//Login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });
    
    if (user && await bcrypt.compare(password, user.password)) {

     const token = jwt.sign({ user },SecretKey);
    //  console.log(token);
    // res.send(token);
      res.json({username,token, message: 'Your Login Successful.' });
  
    } else {
      res.status(403).json({ error: 'You have Entered Wrong Username or Password' });
    }
  } catch (error) {
    res.status(500).json({ error: `Internal server Error` });
  }
});

// const jwt =require("jsonwebtoken");
// const createToken = async()=>{
//   jwt.sign({username},secretkey,{expiresIn:'300s'},(err,token)=>{
//     response.json({
//       token
//     })
//   })
// }



// // Logout (assuming token-based authentication)
// router.post('/logout', async (req, res) => {
//     try {
//       const { username } = req.body;
//       const user = await UserModel.findOne({ username });
  
//       if (!user) {
//         return res.status(404).json({ error: 'User not found.' });
//       }
  
//       // Clear the user's tokens
//       user.tokens = []; 
//       await user.save();
  
//       res.json({ message: 'Logout successful.' });
//     } catch (error) {
//       res.status(500).json({ error: 'An error occurred while logging out.' });
//     }
//   });
  
  
module.exports = router;