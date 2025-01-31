// Installing two package,first jsonwebtoken and second bcrypt,

// install cookie-parser for using
const cookieParser = require('cookie-parser')
const express = require('express');
const app = express();
const bcrypt = require('bcrypt')

//middleware for using cookie-parser
app.use(cookieParser());



// route page
app.get('/',(req,res)=>{
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
















app.listen(3000,()=>{
    console.log("Port is running on 3000")
})


