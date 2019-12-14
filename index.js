const express = require('express');
const mongoose = require('mongoose');
const cookie = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
require('./models/User');
require('./services/passport');

const keys = require('./config/keys');

mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();

app.use(bodyParser.json());

app.use(cookie({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

// Route Handler for static assets
if(process.env.NODE_ENV === 'production'){
  // Express to serve production assets
  app.use(express.static('client/build'));

  // Express to serve index.html if unrecognizeable route exists
  const path = require('path');
  app.get('*', (req, res) => {
      res.sendFile(__dirname, 'client', 'build', 'index.html');
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);