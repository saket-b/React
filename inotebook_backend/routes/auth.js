const express = require('express');
const authRouter = express.Router();
const { body, validationResult } = require('express-validator')
const userModel = require("../models/User");
const bcrypt = require('bcryptjs');
const fetchUser = require("../middleware/fetchuser");
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'sk@wt123'

// Route 1: create user using post request "/api/user/createUser" No loginrequired

authRouter.post('/createUser', [

  body('email', "Enter valid email").isEmail(),
  body('name', "Enter valid name").isLength({ min: 5 }),
  // password must be at least 5 chars long
  body('password', "Enetr valid pssword").isLength({ min: 5 }),
], async (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  let success = true;
  if (!errors.isEmpty()) {
    success = false;
    return res.status(400).json({ "success":success, errors: errors.array() });
  }


  try {
    // check user is exist or not
    let user = await userModel.findOne({ "email": req.body.email });
    // console.log(user);
    if ( user ) {
      // this is for create new user
      success = false;
      return res.status(400).json({"success":success, "message": "user already exist" });
      
    }
    let salt = bcrypt.genSaltSync(10);
    let encrypt_password = await bcrypt.hash(req.body.password, salt);
    user = await userModel.create({
      name: req.body.name,
      password: encrypt_password,
      email: req.body.email,
    })

    
    let data = {
      id : user.id
    }

    console.log(" id = ", user.id);
    console.log(" body = ", data);

    let jwtToken = jwt.sign(data, JWT_SECRET);

    res.json({"success":success, "token": jwtToken});
  }
  catch (err) {
    // for catch error
    success = false;
    res.status(400).json({ "success": success, "Error": err.message });
  }

})


// this is route for login
// Route 2: login user using post request "/api/user/login"  for login user 
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
  let success = true;
  // console.log("email ", email);
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
          res.json({"success": success,"token": jwtToken});
        }
        else 
        {
          success = false;
          res.status(400).json({success ,message:"Credential Error"});
        }
    }
    else 
    {
      success = false;
      res.status(400).json(success, {message:"Credential Error"});
    }
    
  } catch (error) {
    res.status(500).json({"Error": error.message})
  }


})
 
// Route 3:  "/api/user/getUser" login is required
// This route  Get logedin user Detail 
// Like How many notes having this user.
authRouter.post("/getuser", fetchUser, async (req, res)=>{

  try {
  
    // id come from fetchUser middle ware fun (in this function having token which token gibe user id)
    let id = req.user;
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