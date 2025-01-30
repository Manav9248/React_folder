const express = require('express');
const app = express();

const userModel = require('./usermodel')


app.get('/',(req,res)=>{
    res.send("Home Route Page")
})

//create
app.get('/create',async (req,res)=>{
const createdUser =   await userModel.create({
        name: "Manavii",
        email:"manavii96544@gmail.com",
        username:"Manav Pal"
})

res.send(createdUser);

})

//update
app.get('/update',async (req,res)=>{
    const updateUser =   await userModel.findOneAndUpdate({username:"Manav Pal"}, {name:"rohan sharma "},{new:true})
    
    res.send(updateUser);
    
    })

//read
app.get('/read',async (req,res)=>{
        const readUser =   await userModel.find({name:"Manavii"});
        
        res.send(readUser);
        
        })


//delte
app.get('/delete',async (req,res)=>{
    const deleteUser =   await userModel.findOneAndDelete({name:"Manavii"});
    
    res.send(deleteUser);
    
    })






const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`App is running on ${PORT} Port`);
})