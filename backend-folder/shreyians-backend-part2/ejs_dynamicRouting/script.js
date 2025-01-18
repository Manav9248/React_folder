// EJS, Dynamic Routing


// install ejs from npm
// setup ejs as a view engine


//dynamic routing-> hum log kai baar khuch routes dekhta hai unmein sirf ek hi hissa change hotta hai 




const express = require('express')
const path = require('path')
const app = express();

//middleware, parser form
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'public')));//through this middlewaree, we can access the public folder

app.set('view engine','ejs')//though this, we can access ejs files from views folder




// route setup
app.get('/',(req,res)=>{
    res.render("index") // views->index.ejs running
})




//listen port
app.listen(3000,()=>{
    console.log("Port is running on 3000")
});
