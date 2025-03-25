const mongoose = require("mongoose");
const config = require('config')
const dbgr =  require('debug')("development:mongoose");

// this mongoose will connect to my locolhost, but when we deploy this file we have to change the url code 
mongoose
.connect(`${config.get("MONGODB_URI")}/scatch`)
.then(function(){
    dbgr("Connected to Database")
})
.catch(function(err){
    dbgr(err);
})

//exporting files
module.exports = mongoose.connection