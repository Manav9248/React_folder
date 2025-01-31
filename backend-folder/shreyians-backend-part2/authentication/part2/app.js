const express = require('express');
const app = express();

// setting view engine for ejs
app.set("view engine","ejs");

//middleware using
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use()



app.get('/',(req,res)=>{
    res.send("Route Page")
})









app.listen("3000",()=>{
    console.log("Port is running on 3000")
})