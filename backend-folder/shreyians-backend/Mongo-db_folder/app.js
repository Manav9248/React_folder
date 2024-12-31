// Express using 
const express = require('express')
const app = express();

// MongoDb using
const userModel = require('./models/user'); //user
const dbConnection = require('./config/db');// connecting to database

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


// CRUD operations in database
// C :- create operation
// R :- read operation
// U :- update operation
// D :- delete operation


// Create operation, this is async operation
app.post('/register',async(req,res)=>{
    console.log(req.body); //getting all fronted data in backend

    //using destructing 
    const {username,Email,password} = req.body;

 const newUser = await userModel.create({
        username:username,
        email:Email,
        password:password
    })

    res.send(newUser);
})

// Read operation
app.get('/get-users',(req,res)=>{
    userModel.find({ //findOne method :- this return only one user or data
        // username:'alpha', // condition apllying...
        // password:'123',
    }).then((users)=>{
        res.send(users); //sending all the user on frontend which is save on backend
    })
})

// Update operation,this is async operation
app.get('/update-user',async(req,res)=>{
  await userModel.findOneAndUpdate({
        username:'alpha' // finding user through username
    },{
        email:"alpha@gmail.com" // changing user_email 
    })
    res.send("user updated");
})

// Delete operation, this is async operation
app.get('/delete-user', async(req,res)=>{
    await userModel.findOneAndDelete({
        username:'manav'
    })
    res.send("Delete successfully ")
})

app.get('/home',(req,res)=>{
    res.send("Home Page");
})

app.listen(3000);
