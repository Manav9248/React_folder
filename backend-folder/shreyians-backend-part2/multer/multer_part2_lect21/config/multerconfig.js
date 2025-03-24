const multer = require("multer");
const crypto = require("crypto");
const path = require('path');

//setup disk storage
const storage =multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/images')
    },
filename:function(req,file,cb){
   crypto.randomBytes(12,function(err,bytes){
    const fn = bytes.toString("hex") + path.extname(file.originalname)

    cb(null,fn);
   })
}
});

const upload = multer({storage:storage});

//we have to export this file, so we can use multer in app.js file

module.exports = upload