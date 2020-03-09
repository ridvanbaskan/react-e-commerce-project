import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_kBK6kI4up3LYMracei2Ou1ZT00Qtkl9kcO';
  const onToken = token => {
    console.log(token);
    alert('Peyment Successful');
  };
  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
}
