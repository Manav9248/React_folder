const express = require("express");
const app = express();

const userModel = require('./models/user.models');
const postModel = require("./models/post.models");




app.get("/",(req,res)=>{
    res.send("hello guys");
})


app.get("/create",async (req,res)=>{
    
    // const {username, email, age, post} = req.body;

    // console.log(req.body);

    const userCreate = await userModel.create({
        username:"manav",
        email:"manav@gmail.com",
        age:15
    })

    res.send(userCreate);

})


app.get('/post/create',async(req,res)=>{
   
  const postCreate = await postModel.create({
        postdata:"checking postdata working or not",
        user:"67ab345e7487bc58417fcd8b"

    })

  const user_post =  await userModel.findOne({_id:"67ab345e7487bc58417fcd8b"})

  user_post.posts.push(postCreate._id);

 await user_post.save();

    res.send({postCreate,user_post})
})


app.listen(4000,()=>{
    console.log("Port is running on 4000")
})