const keys = require('../config/keys');
const stripe = require('stripe')(keys.StripeSecretKey);

module.exports = app => {

  // Stripe integration
  app.post('/api/stripe', async (req, res) => {

    console.log(req.body);
    
    const charge = await stripe.charges.create({
        amount: 500,
        currency: "aud",
        description: "Emaily - $5 for 5 credits",
        source: req.body.id
    }).catch((err) => console.log(err.message));
    
    console.log(charge);
  
    });

};