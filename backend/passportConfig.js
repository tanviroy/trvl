// This is where authentication strategies for passport js are confugured. 
// Supports local and Google authentication.

const User = require("./user");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;


module.exports = function (passport) {

  passport.use(
    new localStrategy((email, password, done) => {
      User.findOne({ email: email }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.use(new GoogleStrategy({
    clientID: "751001492083-rqrsijcv9pveemuj4rihnt4obcvhg8ju.apps.googleusercontent.com",
    clientSecret: "5jCOpS7nLjlhcR0m6zkt5K89",
    callbackURL: "http://localhost:5000/google/callback"
    //callbackURL: "http://localhost:3000/profile"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOne({ googleId: profile.id }, async (err, user) => {
      if (user){
        return cb(err, user);
      }
      if (!user) {
        const newUser = new User({
          googleId: profile.id,
          name: profile.displayName,
        });
        await newUser.save();
        return cb(err, user);;
      }
      
    });
  }
));

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    User.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        _id: user._id,
        name: user.name,
        mobile: user.mobile,
        address: user.address,
        email: user.email,
        booked: user.booked,
        bucketlist: user.bucketlist,
        visited: user.visited,
      };
      cb(err, userInformation);
    });
  });
};
