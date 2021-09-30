import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const promise = loadStripe(
  "pk_test_51JOAZuGHLJaKf96VNErPKs05GMyo0gIT6XFHHUBDEVFgzXGewjl2CigFHi1Ynb8jsK6GeEaTfibi7aMyP7ofdSPn00VHCLCq4J"
);

const PayForm = ({ donationData }) => {
  return (
    <div>
      <Elements stripe={promise}>
        <CheckoutForm donationData={donationData} />
      </Elements>
    </div>
  );
};

export default PayForm;
