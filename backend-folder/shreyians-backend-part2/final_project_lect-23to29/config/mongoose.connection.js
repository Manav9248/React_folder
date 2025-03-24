const mongoose = require("mongoose");

// this mongoose will connect to my locolhost, but when we deploy this file we have to change the url code 
mongoose
.connect("mongodb://127.0.0.1:27017/backend_final_project_scatch")
.then(function(){
    console.log("Connected to Database")
})
.catch(function(err){
    console.log(err);
})

//exporting files
module.exports = mongoose.connection