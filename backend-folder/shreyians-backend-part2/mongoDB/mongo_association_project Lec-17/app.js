const express = require("express");
const app = express();
const userModel = require("./models/user.models");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const postModel = require("./models/post.models");

app.set("view engine", "ejs");

//middleware using
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/profile", isLoggedIn, async (req, res) => {
  // console.log("req.user : ", req.user);

  const profileUser = await userModel.findOne({ email: req.user.email }).populate("posts");

  // console.log("Profile User : ", profileUser);

  res.render("profile", { profileUser });
});


//like route is here 
app.get("/like/:id", isLoggedIn, async (req, res) => {

  const post = await postModel.findOne({ _id: req.params.id }).populate("user");

  // console.log("post data : ",req.user);
  // console.log("Post : ", post);

  if(post.likes.indexOf(req.user.userid)===-1){ // -1, agar like nahi hai
    post.likes.push(req.user.userid); // like add kr do
  }else{
    post.likes.splice(post.likes.indexOf(req.user.userid),1);//like remove krdo
  }

  await post.save(); //manually saving

  res.redirect("/profile");

});

//delete route is here
app.get("/delete/:id",async(req,res)=>{
  const userId = req.params.id
  // console.log("user id is : ",userId);

  await postModel.findOneAndDelete({_id:userId}).populate("user");
  res.redirect("/profile");
}) 

//edit route
app.get("/edit/:id",isLoggedIn,async(req,res)=>{
  const userId = req.params.id;

const updateUser = await postModel.findOne({_id:userId}).populate("user");


// console.log("update user content : ",updateUser.content);

res.render("update",{updateUser});

});

//edit route post method
app.post("/update/:id",isLoggedIn, async(req,res)=>{
  const userId = req.params.id;
  // console.log("req.body : ",req.body);

  const updateUser = await postModel.findOneAndUpdate({_id:userId},{content:req.body.content},{new:true}).populate("user");

res.redirect("/profile");
  
})

//post route is here
app.post("/post", isLoggedIn, async (req, res) => {

// console.log("postUser : ",req.body);
  
  const user = await userModel.findOne({ email: req.user.email });
  
 const {content} = req.body;

const post = await postModel.create({
    user: user._id,
    content
})
//pushing method used
user.posts.push(post._id);
await user.save();

res.redirect("/profile")
});

// login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // console.log(req.body);

  //checking email is registered or not
  const user_Find = await userModel.findOne({ email });
  if (!user_Find) return res.status(500).send("User not registered");

  bcrypt.compare(password, user_Find.password, (err, result) => {
    console.log("Result : ", result); // it returns true or false
    if (result) {
      const token = jwt.sign({ email, userid: user_Find._id }, "secret_key");

      res.cookie("token", token);

      res.status(200).redirect("/profile");
    } else {
      res.send("something went wrong");
    }
  });
});

//register user
app.post("/register", async (req, res) => {
  const { name, username, age, email, password } = req.body;

  // console.log(req.body);

  //checking email already exist or not
  const userFind = await userModel.findOne({ email });

  if (userFind) return res.status(500).send("User already registered");

  bcrypt.genSalt(10, (err, salt) => {
    //salt generating for password
    bcrypt.hash(password, salt, async (err, hash) => {
      // creating user
      const userCreate = await userModel.create({
        name,
        age,
        username,
        password: hash,
        email,
      });
      const token = jwt.sign({ email, userid: userCreate._id }, "secret_key");

      res.cookie("token", token);

      res.send("Registered");
    });
  });
});

//logout route
app.get("/logout", (req, res) => {
  //removing cookie for logout
  res.cookie("token", "");
  res.redirect("/login");
});

// for this route, the user is proctected
function isLoggedIn(req, res, next) {
  if (req.cookies.token === "") res.redirect("/login");
  else {
    const data = jwt.verify(req.cookies.token, "secret_key");
    req.user = data;
  }
  next();
}




app.listen(2000, () => {
  console.log("Port is running on 2000");
});
