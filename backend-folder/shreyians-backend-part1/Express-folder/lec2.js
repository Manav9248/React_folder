const http = require('http');

// creating server
const server = http.createServer((req,res)=>{
   if(req.url == '/about') {
    res.end("The about page");
   }

   if(req.url == '/profile') {
    res.end("The Profile Page");
   }

   if(req.url == '/'){
    res.end("The Home Page");
   }

}); 

server.listen(3000,()=> {
    console.log(`Example server is listening `)
})
