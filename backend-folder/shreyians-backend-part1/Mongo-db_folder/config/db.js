//In config folder, we connect this db.js file to database.

const mongoose = require('mongoose');

//connect method using and connect to database
const connection = mongoose.connect('mongodb://0.0.0.0/men').then(()=>{
    console.log('connected to data base')
})

//exporting connection
module.exports = connection