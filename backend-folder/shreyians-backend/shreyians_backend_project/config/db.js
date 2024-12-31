const mongoose = require('mongoose');

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("connected to db");
    })
}


// exporting connectToDB through module.export
module.exports = connectToDB;
