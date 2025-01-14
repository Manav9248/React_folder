// requiring express for routing
const express = require('express');
const app = express();

//requiring env
const dotenv = require('dotenv');

dotenv.config();

//requiring or importing db.js
const connectToDB = require('./config/db')
connectToDB(); // calling db

//importing user.routes.js file in app file or requiring
const userRouter = require('./routes/user.routes');
//importing router
const indexRouter = require('./routes/index.routes');

//requiring cookie-parser
const cookieParser = require('cookie-parser');



//setting ejs engine
app.set('view engine','ejs');

//built-in middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser()); //cookie-parser call


// In production level, we dont make routes in app, we makes routes in another folder like user.routes..

/* /user/register */
app.use('/user',userRouter); // using userRouter 
app.use('/',indexRouter); // using indexRouter


app.listen(3000,()=>{ // listen port
    console.log("server is running on port 3000")
}); 