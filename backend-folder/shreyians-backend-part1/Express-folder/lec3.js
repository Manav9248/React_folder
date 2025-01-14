// express is generally using for creating server and lot more things...
const express = require('express');
const app = express(); //calling express and storing value in app

app.get('/' ,(req,res)=>{
    res.send('hello world..')
})

app.get('/planet' ,(req,res)=>{
    res.send('hello planet...')
})

app.get('/duniya' ,(req,res)=>{
    res.send('hello Duniya..')
})

app.listen(3000);
