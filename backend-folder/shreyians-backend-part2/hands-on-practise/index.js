const express = require('express');
const app = express();
const path =  require('path');
const fs = require('fs');


app.get('/',(req,res)=>{
    res.send("Home Route page")
})

//setting view engine for ejs
app.set("view engine","ejs")

// middleware setup
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//this middleware for accessing public folder and inside the files 
app.use(express.static(path.join(__dirname,"public")));


// using file system,and redirecting to index page
app.get('/index',(req,res)=>{
    fs.readdir(`./files`,(err,files)=>{ 
        res.render("index",{files:files}); // rendering the page
    })
})

// reading files using file system(fs)
app.get('/file/:filename',(req,res)=>{
    const fileName1 = req.params.filename; // through params,we can access value from url after the : (colon)

    
 
    fs.readFile(`./files/${req.params.filename}`,"utf-8",(err,filedata,files)=>{ // reading files
     if(err){
         console.error(err); // Error showing in console
         return res.status(404).send("File not Found"); //showing 404 error
     }
 
     //Pass the file data
     res.render('show',{fileContent:filedata, fileName:fileName1},files); // render after successful file read
    })
 
  })

  // deleting the files form the system

  app.get('/delete/:deletefile',(req,res)=>{
    const deleteFile1 = req.params.deletefile;

    const filePath = path.join(__dirname, 'files',`${deleteFile1}`); // accessing file path for deleting

    fs.unlink(filePath, (err)=>{
        if(err){
        console.log(`Error deleting file: ${err.message}`);
        return res.status(500).send('Error deleting the file')
        }

        console.log(`${deleteFile1}.txt deleted successfully`)

        //Pass the file data
        res.redirect('/index')// redirect after successful file delete

    })
  })


// editing the file

  app.get('/edit/:editFile',(req,res)=>{
  const editFile1 = req.params.editFile;

    res.render("edit",{editFileName:editFile1})
  })


app.post('/edit', (req, res) => {
    const previousFile = path.basename(req.body.previous.trim()); // Trim spaces
    const newFile = path.basename(req.body.new.trim());

    const oldPath = path.join(__dirname, 'files', `${previousFile}`); // accessing file path
    const newPath = path.join(__dirname, 'files', `${newFile.split(' ').join('')}`); // accessing file path

    // Check if file exists before renaming
    // fs.access(oldPath, fs.constants.F_OK, (err) => {
    //     if (err) {
    //         console.error(`Error: File "${previousFile}.txt" does not exist.`);
    //         return res.status(404).send('File not found');
    //     }

        // Rename the file
        fs.rename(oldPath,newPath, (err) => {
            if (err) {
                console.error(`Error renaming file: ${err.message}`);
                return res.status(500).send('Error renaming the file');
            }
            console.log(`File renamed successfully: ${previousFile}.txt → ${newFile}.txt`);
            res.redirect('/index');
        });
    });

  // rendering the page, writng the files
app.post('/create',(req,res)=>{
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}`,req.body.details,(err)=>{
     res.redirect("/index")
    })
 }) 


const port = 3000;

app.listen(port,()=>{
    console.log(`Listening to the port ${port}`)
})