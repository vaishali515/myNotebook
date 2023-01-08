const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');



router.post('/createuser',[
    
    body('name','Enter a valid name').isLength({ min: 3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be atleat 5 characters').isLength({ min: 5 })
    
], async(req,res) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      console.log("3");
     let user = await User.findOne({email: req.body.email});
     if (user) {
       return res.status (400).json({error: "Sorry a user with this email already exists"})
     }
     console.log("1");
     user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })
      
      console.log("2");
      res.json(user);
    } catch(error) {
      console.error(error.message);
       res.status(500).send("why Some Error Occured");
    }


})

module.exports = router 
