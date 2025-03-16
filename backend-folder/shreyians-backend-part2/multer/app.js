// multer learning
const express = require("express");
const app = express();

//middleware using
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//ejs
app.set("view engine",'ejs')

app.get("/",(req,res)=>{
  res.render("index");
})

app.post("/upload",(req,res)=>{
    console.log("req.body : ",req.file);
})

app.listen(3000,()=>{
    console.log("Port is running on 3000");
})