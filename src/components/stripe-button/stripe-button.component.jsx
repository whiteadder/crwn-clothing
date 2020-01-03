import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_O4Bpeo5tOJtSq0PdIHE4adXm00CPfmkzcA";

  const onToken = token => {
    console.log(token);
    alert("Done");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="whiteadder Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
