const express = require('express');
const app = express();

const path = require('path');
const userModel = require('./models/user.models');

//middleware ki jaraut hai guys
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// path ko istemal kro guys for the use of public folder
app.use(express.static(path.join(__dirname,'public')));//through this middlewaree, we can access the public folder

app.set('view engine','ejs')//though this, we can access ejs files from views folder


// performing a simple crud operation, In which we can create user, Read user, Update user and Delete user.

//route page
app.get('/', (req,res)=>{

    res.render('index');

});

//Read user
app.get('/read',async (req,res)=>{

    const readUser = await userModel.find();


    res.render('read',{users:readUser})
})

//create user
app.post('/create',async (req,res)=>{
    const {name, email , image} = req.body;
    // console.log(req.body);

    const createUser = await userModel.create({
        name,
        email,
        image
    })


    res.redirect("/read");
})

// delete user
app.get('/delete/:id',async (req,res)=>{
const userId = req.params.id;

    const deleteUser = await userModel.findOneAndDelete({
       _id: userId
    });

    res.redirect('/read');
})

// update user by get method
app.get('/edit/:userId',async (req,res)=>{
    const userId_ = req.params.userId;

    const updateUser = await userModel.findOne({_id:userId_})

    res.render("edit",{userDetails:updateUser}); // redirect to read page

})

// update user by post method
app.post('/update/:userId',async (req,res)=>{
    const userId_ = req.params.userId;
    
    const {name,image,email} = req.body;
    console.log(req.body);

    const updateUser = await userModel.findOneAndUpdate({_id:userId_},{
             name,
             image,
             email

    },{new:true})

    res.redirect("/read"); // redirect to read page
})



const PORT = 3000

app.listen(PORT,()=>[
    console.log(`Port is running on ${PORT}`)
])