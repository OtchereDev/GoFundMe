import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import router from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { APIURL } from "../../config/config";

const CheckoutForm = ({ donationData }) => {
  const [succeded, setSucceded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [message, setMessage] = useState("");
  const [intentId, setIntentId] = useState();

  const stripe = useStripe();
  const element = useElements();

  const cardStyle = {
    style: {
      base: {
        color: "#02a95c",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#02a95c",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  useEffect(() => {
    fetch(`${APIURL}/payments/create-payment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ...donationData }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data?.clientSecret);
        setIntentId(data?.intent_id);
        // console.log("aa:", data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = async (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: element.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceded(true);

      // redirect user here to add comment orr show comment box now
    }
  };

  const handleAddComment = async () => {
    if (!message.length)
      return toast.error(
        "Please provide a message or click on the cancel button"
      );
    try {
      const res = await fetch(`${APIURL}/payments/${intentId}/add-comment`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (res.ok) {
        toast.success("Comment sucessfully added");

        setTimeout(() => {
          router.push("/");
        }, 1000);
      } else {
        const data = await res.json();
      }
    } catch (error) {
      toast.error("Sorry could not add message");
    }
  };

  const handleMsgCancel = () => {
    router.push("/");
  };

  return (
    <>
      <form
        id="payment-form"
        className={`${succeded ? "hidden" : "block"}`}
        onSubmit={handleSubmit}
      >
        <CardElement
          id="card-element"
          className="border py-3 text-lg px-2 rounded-md mb-2 border-primary_green"
          options={cardStyle}
          onChange={handleChange}
          hidePostalCode={true}
        />
        <button
          className="bg-primary_green shadow-md text-gray-50 w-full py-2 rounded-md font-semibold text-lg"
          disabled={processing || disabled || succeded}
          id="submit"
        >
          <span id="button-text">
            {processing ? (
              <div className="spinner" id="spinner"></div>
            ) : (
              "Pay now"
            )}
          </span>
        </button>
        {/* Show any error that happens when processing the payment */}
        {error && (
          <div className="card-error text-red-500" role="alert">
            {error}
          </div>
        )}
      </form>
      {/* Show a success message upon completion */}
      <div className={succeded ? "block " : "hidden"}>
        <p className="text-green-500">
          Payment succeeded, Please leave a message for the beneficiary
          (optional)
        </p>

        <textarea
          className="w-full h-52 p-3 border outline-none border-green-500 font-primary resize-none rounded-md mt-4"
          placeholder="Message*"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button
          className="bg-primary_green shadow-md outline-none text-gray-50 w-full py-2 rounded-md font-semibold text-lg"
          disabled={!succeded}
          onClick={handleAddComment}
        >
          Submit
        </button>

        <button
          className="bg-red-400 mt-2 shadow-md outline-none text-gray-50 w-full py-2 rounded-md font-medium text-lg"
          disabled={!succeded}
          onClick={handleMsgCancel}
        >
          Cancle, I don't want to leave a message
        </button>
      </div>
    </>
  );
};

export default CheckoutForm;
