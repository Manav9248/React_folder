// Installing two package,first jsonwebtoken and second bcrypt,

// install cookie-parser for using
const cookieParser = require('cookie-parser')
const express = require('express');
const app = express();
const bcrypt = require('bcrypt')

//using jwt
const jwt = require('jsonwebtoken');


//middleware for using cookie-parser
app.use(cookieParser());



// route page
app.get('/index',(req,res)=>{
    // res.cookie("name","Manav");

    bcrypt.genSalt(10,(err,salt)=>{
        // this is a encrypt method
        bcrypt.hash('password',salt,(err,hash)=>{
        console.log(hash);
        });
    });

    //comparing, or checking the password
    bcrypt.compare("password","$2b$10$EUI3dYqvmAAmuyqYMuLJuOCJ42SKV1jaLlCNbeKwGIPonGcjcKKMS",(err,result)=>{
        console.log(result);
    })
})

app.get("/",(req,res)=>{
  const token =  jwt.sign({email:"manav@gmail.com"},"secret"); 

  res.cookie("token",token);

//   console.log(token);
  res.send("Done");
})

app.get("/read",(req,res)=>{
    console.log(req.cookies.token);

    const dataVerify = jwt.verify(req.cookies.token,"secret");

    console.log(dataVerify);

})


app.listen(3000,()=>{
    console.log("Port is running on 3000")
})


