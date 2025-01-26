// Form handling

// Handle backend process of forms and making sure the data coming from frontend library, framework, templating engines, we still handle it at the backend process.


//session cookie -> mostly use in for authencation

const express = require('express')

const app = express();

//these two middleware help to convert data in readable form
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));


