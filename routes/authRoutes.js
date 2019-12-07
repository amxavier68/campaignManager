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
  // Logout function
  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });
  // Lists current user
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
}