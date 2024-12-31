// user routes
const express = require('express');
const router = express.Router();

// express validators
const { body, validationResult } = require('express-validator');

//user model importing or requiring
const userModel = require('../models/user.model')

//requiring bcrypt
const bcrypt = require('bcrypt');

//requiring jsonwebtoken
const jwt = require('jsonwebtoken');


/* /user/register */
router.get('/register',(req,res)=>{ // get method
    res.render("register");
})


//user register
router.post('/register',   //post method
    body('email').trim().isEmail().isLength({min:13}),
    body('password').trim().isLength({min:5}),
    body('username').trim().isLength({min:3}),
   
   async (req,res)=>{ 

        const errors = validationResult(req);

        if(!errors.isEmpty()) { //condition
            return res.status(400).json({
                errors: errors.array(),
                message:'Invalid Data'
            })
        }

    const {email,username,password} = req.body;

    const hashPassword = await bcrypt.hash(password,10);

    const newUser = await userModel.create({
        email,
        username,
        password: hashPassword
    })

    res.json(newUser);

    // console.log(req.body); 
    // res.send("User registered");
})

//user login
router.get('/login',(req,res)=>{
    res.render('login');
})

router.post('/login',
    body('username').trim().isLength({min:3}),
    body('password').trim(),

  async(req,res)=>{
   

        const errors = validationResult(req);


        if(!errors.isEmpty()) { //condition
            return res.status(400).json({
                errors: errors.array(),
                message:'Invalid Data'
            })
        }

        const {username,password} = req.body;

        const user = await userModel.findOne({
                username:username
        })

        if(!user){
            return res.status(400).json({
                message: 'username or password is incorrect'
            })
        }

        const isMatch  = await bcrypt.compare(password,user.password); // boolean return

        if(!isMatch){
            return res.status(400).json({
                message: 'username or password is incorrect'
            })
        }

      /*  jsonwebtoken */
      const token = jwt.sign({
        userId:user._id,
        email:user.email,
        username: user.username
      },
      process.env.JWT_SECRET,
    )

   res.cookie('token',token);

   res.send("Login In");

})


//exporting router through module.exports
module.exports = router;