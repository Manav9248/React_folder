const express = require('express');

const router = express.Router();


router.get('/home',(req,res)=>{
    res.render('home');
})


//exporting router  
module.exports =router;