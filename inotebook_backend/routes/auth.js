const express = require('express');
const authRouter = express.Router();
const { body, validationResult } = require('express-validator')
const userModel = require("../models/User");
const bcrypt = require('bcryptjs');
const fetchUser = require("../middleware/fetchuser");
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'sk@wt123'

// Route 1: create user using post request "/api/user/createUser"

authRouter.post('/createUser', [

  body('email', "Enter valid email").isEmail(),
  body('name', "Enter valid name").isLength({ min: 5 }),
  // password must be at least 5 chars long
  body('password', "Enetr valid pssword").isLength({ min: 5 }),
], async (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }


  try {
    // check user is exist or not
    let user = await userModel.findOne({ "email": req.body.email });
    console.log(user);
    if ( user ) {
      // this is for create new user
      return res.status(400).json({ "message": "user already exist" });
      
    }
    let salt = bcrypt.genSaltSync(10);
    let encrypt_password = await bcrypt.hash(req.body.password, salt);
    user = await userModel.create({
      name: req.body.name,
      password: encrypt_password,
      email: req.body.email,
    })

    let data = {
      user : req.body
    }
    let jwtToken = jwt.sign(data, JWT_SECRET);
    res.json({ "success": jwtToken});
  }
  catch (err) {
    // for catch error
    res.status(400).json({ "Error": err.message });
  }

})


// this is route for login
// Route 2: login user using post request "/api/user/login"
authRouter.post('/login', [

  body('email', "Enter valid email").isEmail(),
  body('password', "Please Enter password").exists(),
], async (req, res) => {

  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let {email, password} = req.body;
  console.log("email ", email);
  try {

    let user = await userModel.findOne({"email": email});
    console.log(user);
    if(user)
    {
        let passwordChecker = await bcrypt.compare(password, user.password);
        if(passwordChecker)
        {
          let data ={
            id:user.id
          }
          let jwtToken = jwt.sign(data, JWT_SECRET);
          res.json({ "success": jwtToken});
        }
        else 
        res.status(400).json({message:"Credential Error"});
    }
    else 
    {
      res.status(400).json({message:"User is not found"});
    }
    
  } catch (error) {
    res.status(500).json({"Error": error.message})
  }


})

// Route 2: login user using post request "/api/user/login"
authRouter.post("/getuser", fetchUser, async (req, res)=>{

  try {
  
    let id = req.user.id;
    console.log("id =", id);
    let user = await userModel.findById(id);
    console.log(user);
    if(user)
    {
      res.json({
        message:user
      })
    }
    else 
      {
        res.status(400).json({"error":"user is not found"});
      }
    
  } catch (error) {
    res.status(500).json({"Error": error.message})
  }

})



module.exports = authRouter;