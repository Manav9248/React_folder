const express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Testing user router page")
})


//exporting file
module.exports = router