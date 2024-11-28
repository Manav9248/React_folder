// using 3rd party middleware
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan('dev'));

// using ejs engine
app.set('view engine',"ejs");


app.get('/',
    
    (req,res,next)=>{
    const a =5, b = 10;

    console.log(a+b);
    return next(); // returning next

 }
  ,(req,res)=>{
    res.render('index')
})



app.listen(3000);