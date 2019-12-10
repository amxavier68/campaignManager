import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
    render() {
        return (
            <StripeCheckout name="Emaily" description="$5 for 5 email credits"
              amount={500} currency="AUD"
              stripeKey={process.env.REACT_APP_STRIPE_KEY}
              token={token => console.log(token)}
            />
        );
    }
}

export default Payments;