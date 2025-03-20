// multer learning
const express = require("express");
const multer = require("multer");
const app = express();

const crypto = require('crypto');
const path = require("path");

//middleware using
app.use(express.json());
app.use(express.urlencoded({extended:true}));



const storage = multer.diskStorage({
  //in destination we mention files location 
  destination : function(req,file,cb){
    cb(null,'./public/images/uploads')
  },

  //in filename, we mention filename
  filename:function(req,file,cb){
    crypto.randomBytes(12,function(err,bytes){
  const fn = bytes.toString("hex") + path.extname(file.originalname)

      cb(null, fn); // fn is files name
    })
  }
})

const upload = multer({storage:storage})

//ejs
app.set("view engine",'ejs')

app.get("/",(req,res)=>{
  res.render("index");
})

app.post("/upload",upload.single("image"),(req,res)=>{
    console.log("req.file : ",req.file);
    // files data stores in req.files
    // any text data stores in req.body
})

app.listen(3000,()=>{
    console.log("Port is running on 3000");
})