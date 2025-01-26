// Express js

// express js is a framework -> it gives flow,direction

// manages everything from receiving the request and giving the response

const express = require('express');
const app = express();


//middleware
app.use((req,res,next)=>{
    console.log('middleware chlega')
    next();
})



// we can create routes through express

app.get('/',(req,res)=>{ // route
    res.send("World")
})

app.get('/profile',(req,res,next)=>{
   res.send("profle")
    // return next(new Error("Something went wrong")) //it will shows on console 
})


//error handling
app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send('something broke!') // it will shown on frontend
})


app.listen(3000);



