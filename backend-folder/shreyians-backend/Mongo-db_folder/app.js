// Express using 
const express = require('express')
const app = express();

// MongoDb using
const userModel = require('./models/user');
const dbConnection = require('./config/db');

//built-in middleware
app.use(express.urlencoded({extended:true}))

//ejs engine using
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render("index")
})

app.get('/register',(req,res)=>{
    res.render('register')
})

app.post('/register',async(req,res)=>{
    console.log(req.body); //getting all fronted data in backend

    //using destructing 
    const {username,Email,password} = req.body;

 const newUser = await userModel.create({
        username:username,
        email:Email,
        password:password
    })

    res.send(newUser)
})

app.get('/home',(req,res)=>{
    res.send("Home Page");
})

app.listen(3000);
