const express = require("express");
const router = express.Router();
const userModel = require("../models/user.models")

router.get('/',(req,res)=>{
    res.send("Testing user router page")
})

router.post("/register",async(req,res)=>{
   try{
    const {email,password,fullname} = req.body;

    // creating user model
 const user = await userModel.create({
        password,
        fullname,
        email
    });
    res.send(user);
   }
   catch(err){
    console.log(err.message);
   }
})

//exporting file
module.exports = router