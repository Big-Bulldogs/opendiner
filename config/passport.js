
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");



passport.use(new LocalStrategy({
usernameField: 'email',
passwordField: 'password'
},

  function(email, password, done) {
    db.User.findOne({ email: email }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(id, done) {
    db.User.findById(id)
    .populate('reservations')
    .exec(function(err, data){
      if (err){
        console.log(err)
      } else {
        done(null, data)
      }
    })
  });
// Exporting our configured passport
module.exports = passport;