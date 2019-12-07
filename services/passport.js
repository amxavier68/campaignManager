const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
  .then(user => {
    done(null, user);
  });
});

// Passport creates GoogleStrategy instance
// passport.use creates a register, heres a new strategy, use it
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, 
  (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleID: profile.id})
    .then((existingUser) => {
      if(existingUser){
        // Record exists, make no changes, use existingUser
        done(null, existingUser);
      } else {
        // Make new record
        new User({ googleID: profile.id}) // new User === Mongo-Mongoose instance
        .save()
        .then(user => done(null, user));
      }
    })    
  })
);