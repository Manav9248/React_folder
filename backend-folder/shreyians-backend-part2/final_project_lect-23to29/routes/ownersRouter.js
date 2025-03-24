const express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Testing owner router page")
})


//exporting file
module.exports = router