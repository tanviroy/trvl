
// This is the entry point for the backend (aka the index.js file). 
// All backend dependencies are connected here. 
// Mongoose is connected, RESTful routes defined.


const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const expressSession = require("express-session");
const bodyParser = require("body-parser");
const nodemailer = require('nodemailer');
const User = require("./user");
const Hotel = require("./hotels");


const app = express()
const PORT = 5000

//========================================= MONGODB CONNECT

mongoose.connect(
    "mongodb+srv://soham:thisisthepassword@test-cluster.qybal.mongodb.net/test-cluster?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log("Database (MongoDB) is now connected");
    }
  );

//========================================= MIDDLEWARE

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", // location of react frontend
    credentials: true,
  })
);
app.use(
  expressSession({
    secret: "mondal",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("mondal"));
app.use(passport.initialize());
app.use(passport.session());
require("./passportConfig")(passport);


//========================================= AUTHENTICATION ROUTES

app.get('/google',
  passport.authenticate('google', { scope: ['profile','email'] }));

app.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/profile');
  });

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("User does not exist!");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully logged in!");
        //console.log(req.user);
      });
    }
  })(req, res, next);
});

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.post("/register", (req, res) => {
    User.findOne({ username: req.body.username }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User already exists, please login");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
        const newUser = new User({
          name: req.body.username,
          mobile: req.body.mobile,
          email: req.body.email,
          password: hashedPassword,
        });
        await newUser.save();
        res.send("Welcome to TRVL!");
      }
    });
  });
  

// =================== User Details ROUTES:

app.get("/getuser", (req, res) => {
  if(!req.user){
    res.send("Please login first")
  }
  if(req.user){
    res.send(req.user);
  }
});

app.post("/update/name", (req, res) => {
  User.findOne({ _id: req.user._id }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("User does not exist!");
    if (doc) {
      doc.name = req.body.name;
      await doc.save();
      res.send("User name updated.");
    }
  });
});

app.post("/update/number", (req, res) => {
  User.findOne({ _id: req.user._id }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("User does not exist!");
    if (doc) {
      doc.mobile = req.body.mobile;
      await doc.save();
      res.send("User mobile updated.");
    }
  });
});

app.post("/update/email", (req, res) => {
  User.findOne({ _id: req.user._id }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("User does not exist!");
    if (doc) {
      doc.email = req.body.email;
      await doc.save();
      res.send("User email updated.");
    }
  });
});

app.post("/update/address", (req, res) => {
  User.findOne({ _id: req.user._id }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("User does not exist!");
    if (doc) {
      doc.address = req.body.address;
      await doc.save();
      res.send("User address updated.");
    }
  });
});


// =================== Hotel ROUTES:

app.get("/gethotels", (req, res) => {
  Hotel.find({}, async(err,doc) => {
    if (!doc) res.send("No hotels in DB");
    if (doc){
      res.send(doc);
    }
  })
});

app.get("/gethotelbyid/:id", (req, res) => {
  const id = req.params.id;
  Hotel.find({_id : id}, async (err, doc) =>{
    if (err) throw err;
    if (doc){
      res.send(doc);
    }
  });
});

//========================================= 

app.post("/addhotel", (req, res) => {

  var availability = [
    { date: new Date(2020,10,16), rooms: 3 },
    { date: new Date(2020,10,17), rooms: 3 },
    { date: new Date(2020,10,18), rooms: 3 },
    { date: new Date(2020,10,19), rooms: 3 },
    { date: new Date(2020,10,20), rooms: 3 },
    { date: new Date(2020,10,21), rooms: 3 },
    { date: new Date(2020,10,22), rooms: 3 },
    { date: new Date(2020,10,23), rooms: 3 },
    { date: new Date(2020,10,24), rooms: 3 },
    { date: new Date(2020,10,25), rooms: 3 },
    { date: new Date(2020,10,26), rooms: 3 },
    { date: new Date(2020,10,27), rooms: 3 },
    { date: new Date(2020,10,28), rooms: 3 },
    { date: new Date(2020,10,29), rooms: 3 },
    { date: new Date(2020,10,30), rooms: 3 },
    { date: new Date(2020,11,1), rooms: 3 },
    { date: new Date(2020,11,2), rooms: 3 },
    { date: new Date(2020,11,3), rooms: 3 },
    { date: new Date(2020,11,4), rooms: 3 },
    { date: new Date(2020,11,5), rooms: 3 },
    { date: new Date(2020,11,6), rooms: 3 },
    { date: new Date(2020,11,7), rooms: 3 },
    { date: new Date(2020,11,8), rooms: 3 },
    { date: new Date(2020,11,9), rooms: 3 },
    { date: new Date(2020,11,10), rooms: 3 },
    { date: new Date(2020,11,11), rooms: 3 },
    { date: new Date(2020,11,12), rooms: 3 },
    { date: new Date(2020,11,13), rooms: 3 },
    { date: new Date(2020,11,14), rooms: 3 },
    { date: new Date(2020,11,15), rooms: 3 },
    { date: new Date(2020,11,16), rooms: 3 },
    { date: new Date(2020,11,17), rooms: 3 },
    { date: new Date(2020,11,18), rooms: 3 },
    { date: new Date(2020,11,19), rooms: 3 },
    { date: new Date(2020,11,20), rooms: 3 },
    { date: new Date(2020,11,21), rooms: 3 },
    { date: new Date(2020,11,22), rooms: 3 },
    { date: new Date(2020,11,23), rooms: 3 },
    { date: new Date(2020,11,24), rooms: 3 },
    { date: new Date(2020,11,25), rooms: 3 },
    { date: new Date(2020,11,26), rooms: 3 },
    { date: new Date(2020,11,27), rooms: 3 },
    { date: new Date(2020,11,28), rooms: 3 },
    { date: new Date(2020,11,29), rooms: 3 },
    { date: new Date(2020,11,30), rooms: 3 },
    { date: new Date(2020,11,31), rooms: 3 }]
  
  const newHotel = new Hotel({
    name: req.body.name,
    location: req.body.location,
    desc: req.body.desc,
    imageurl: req.body.imageurl,
    price: req.body.price,
    rating: req.body.rating,
    amenities: req.body.amenities,
    available: availability
  });
  newHotel.save();
  res.send("New product added");

});

//=========================================

app.get('/userstatus', (req, res) => {
  if (!req.user){
    res.send(false)
  }
  else{
    res.send(true)
  }
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Backend started at http://localhost:${PORT}`)
})
