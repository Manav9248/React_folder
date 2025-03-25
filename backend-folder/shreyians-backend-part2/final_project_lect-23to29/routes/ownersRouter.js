const express = require("express");
const router = express.Router();

//importing ower model
const ownerModel = require('../models/owners.model');


if(process.env.NODE_ENV === "development"){

  router.post("/create",async(req,res)=>{
    const owners =  await ownerModel.find();

    //checking owners is not more than 1
    if(owners.length>0){
    return res.send(503).send("You don't have permission to create a new owner");
    }
    //these are coming from body
    let {fullname,email,password} =req.body;

    //creating owner
 const createdOwner = await ownerModel.create({
    fullname,
    email,
    password,
   })

    res.status(201).send(createdOwner);
    });
}

router.get('/',(req,res)=>{
    res.send("Testing owner router page")
})

//exporting file
module.exports = router