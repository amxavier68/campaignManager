const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

// Passport creates GoogleStrategy instance
// passport.use creates a register, heres a new strategy, use it
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, 
  (accessToken, refreshToken, profile, done) => {
    console.log('accessToken - ', accessToken);
    console.log('refreshToken - ', refreshToken);
    console.log('Profile - ', profile);
  })
);