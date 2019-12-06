const passport = require('passport');

module.exports = app => {

  // Initiates Google OAuth Workflow
  app.get(
    '/auth/google', 
    passport.authenticate('google', {
    scope: ['profile', 'email']
    })
  );

  // Pass returned client code back to Google OAuth for usage
  app.get('/auth/google/callback', passport.authenticate('google'));

}