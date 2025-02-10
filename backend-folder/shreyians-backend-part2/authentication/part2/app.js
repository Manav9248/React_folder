const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const path =  require('path')

const userModel = require('./models/users.models');

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

app.post('/create', (req,res)=>{
    const {username, email, age, password} = req.body;

    bcrypt.genSalt(10,(err,salt)=>{
        console.log("genSalt : ",salt);

        bcrypt.hash(password,salt,async (err,hash)=>{
            console.log("hash : ",hash);
            
            const createUser = await userModel.create({
             username,
             email,
             age,
             password:hash
            });

          const token  =  jwt.sign({email},"secret_Key"); // adding token

          res.cookie("token",token);

        
        res.send(createUser);
        

        })
    })

});

app.get("/login",(req,res)=>{
    res.render("login");
})

app.post("/login",async (req,res)=>{
    //first thing is that, we have to check email and password is correct or not from database.

    const {email,password} = req.body;

  const user = await userModel.findOne({email}); //finding email

  if(!user)
    return res.send("Something went wrong");

  console.log("user password : ",user.password);

  //comparing hashing password and original password
  bcrypt.compare(password,user.password,(err,result)=>{
    console.log("Result : ",result);

    if(result){

        const token  =  jwt.sign({email},"secret_Key"); // adding token

        res.cookie("token",token);

        return res.send(`Yes, You can login ${email}`)
    }
    else{
        return res.send("Sorry! Something went wrong")
    }
  })

})



app.get("/logout",(req,res)=>{
    res.cookie("token",""); // removing token
    res.redirect("/");
})






app.listen(3000)