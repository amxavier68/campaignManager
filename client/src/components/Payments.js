import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
  render() {
    return (
        <StripeCheckout name="Emaily" description="$5 for 5 email credits"
            amount={500} currency="AUD"
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            token={token => this.props.handleToken(token)}
        />
    );
  }
}

export default connect(null, actions)(Payments);