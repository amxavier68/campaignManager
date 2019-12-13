const keys = require('../config/keys');
const stripe = require('stripe')(keys.StripeSecretKey);

module.exports = app => {

  // Stripe integration
  app.post('/api/stripe', async (req, res) => {

    // console.log(req.body);
    // console.log(req.body.id);
    
    const charge = await stripe.charges.create({
        amount: 1495,
        currency: "aud",
        description: "Emaily - $14.95 for 5 credits",
        source: req.body.id
    }).catch((err) => console.log(err.message));
    
    console.log(charge);
    
  });
};