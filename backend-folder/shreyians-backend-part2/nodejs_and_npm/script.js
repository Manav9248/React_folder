const fs = require('fs');

/*
 * we have to read it(important)

writefile
appendFile
copyFile
rename
unlink
 */

// write file (creating file)
fs.writeFile("hey.txt","hey hello kaise ho guys app log",function(err){
    if(err)
        console.log(err);
    else{
        console.log("It's done guys")
    }
})

//append file (adding new file in a previous file)
fs.appendFile("./hey.txt"," Main toh theek hu, app kesa ho",function(err){
    if(err){
        console.log(err);
    }
    console.log("appendFile is working");
})

//rename
// fs.rename("hey.txt","hello.txt",(err)=>{
//     if(err)
//         console.log(err);
//     else{
//     console.log("rename file system completed");
//     }
// })

//copy file

// fs.copyFile("hey.txt","./copy/copy.txt",(err)=>{
//     if(err){
//         throw err.message;
//     }
//     else{
//         console.log("copy file successful")
//     }
// })


// unlink(deleting files)

// fs.unlink("./copy/copy.txt",(err)=>{
//     if(err) {
//         throw err
//     }else{
//         console.log("Unlink completed")
//     }
// })


//rmdir(deleting folder, but it is empty compulsary)

// fs.rmdir("./copy",(err)=>{
//     if(err) {
//         throw err
//     }else{
//         console.log("Unlink completed")
//     }
// })

//rm (deleting folder, if there is anything inside it, it will delete it)
fs.rm("./copy",{recursive:true},(err)=>{
    if(err) {
        throw err
    }else{
        console.log("rm worked")
    }
})
