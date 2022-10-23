import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../../components/CheckoutForm/CheckoutForm";
import "./CheckoutPage.scss";

const stripePromise = loadStripe(
  "pk_test_51LiZ1zAua664zHhP11i6ZioxLwd37w1HIhFC6OGZ5Obz14tE5eh1wJTJ7CeaVLv4QiY3sexkIO9QPc7SXapiuTc500xIVaMNpd"
);
function PaymentIndent() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:8080/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        return setClientSecret(data.clientSecret);
      });
  }, []);
  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <div className="PaymentIndent">
      <h1 style={{ marginBottom: "30px" }}>Payment</h1>
      <div className="stripe-checkout">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
    </div>
  );
}
export default PaymentIndent;
