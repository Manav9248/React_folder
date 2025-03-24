const express = require("express");
const app = express();
const upload = require("./config/multerconfig")

//ejs
app.set("view engine","ejs")


//routes
app.get("/",(req,res)=>{
    res.render("index");
})

app.post("/upload",upload.single("image"),(req,res)=>{
    console.log("req.file :- ",req.file)
})

app.listen(3000,()=>{
    console.log("Port is running on 3000");
})