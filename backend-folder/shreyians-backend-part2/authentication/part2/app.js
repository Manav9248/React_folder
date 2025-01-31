const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

const path =  require('path')

const userModel = require('./models/users.models')

// setting view engine for ejs
app.set("view engine","ejs");

//middleware using
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(cookieParser());


app.get('/',(req,res)=>{
    res.render("index");
})









app.listen(3000)