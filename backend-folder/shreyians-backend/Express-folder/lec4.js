const express = require('express');
const app = express();

// using ejs engine
app.set('view engine',"ejs");


        //Types of middleware 

// 1:- built-in middleware
// 2:- custom middleware
// 3:- third party middleware

// custom middleware using
app.use((req,res,next)=>{
    console.log("this is middleware");
    
    const a=2, b=3;

    console.log(a+b);
    
    return next();
})

app.get('/' ,(req,res)=>{
    res.render('index')
})

app.listen(3000);