const mongoose = require('mongoose');

//connect method using
const connection = mongoose.connect('mongodb://0.0.0.0/men').then(()=>{
    console.log('connected to data base')
})

//exporting connection
module.exports = connection