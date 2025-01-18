// in this lecture, we learnt about to connect frontend to backend, and learnt about post method
const express = require("express");
const app = express();

// using ejs engine
app.set('view engine',"ejs");

// 2 middleware using for getting post method data readable
// built-in middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//linking css and js
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index') // rendering index page
})

app.get('/about',(req,res) =>{
    res.send("About Page")
})

app.get('/profile',(req,res) =>{
    res.send("This is profile page")
})

//if we dont want to show data in url then we use post method,don't use get method

// post -> frontend sa data backend tak pochane ka liye..
// get -> server sa data frontend tak pochane ka liye..

app.post('/get-form-data',(req,res)=>{
    // console.log(req.query); // get method
    console.log(req.body)  // post method

    res.send("data received");
})



app.listen(3000);