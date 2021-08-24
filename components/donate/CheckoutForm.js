import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect } from 'react'
import { useState } from 'react'

const CheckoutForm = ({totalDonation}) => {

    const [succeded,setSucceded] = useState(false)
    const [error, setError] = useState(null)
    const [processing, setProcessing] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [clientSecret, setClientSecret] = useState('')

    const stripe = useStripe()
    const element= useElements()

    const cardStyle = {
        style: {
          base: {
            color: "#02a95c",
            fontFamily: 'Arial, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
              color: "#02a95c"
            }
          },
          invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
          }
        }
    }
    

    useEffect(()=>{
        fetch("/api/create-pament-intent",{
            method:"POST",
            headers:{
                "content-type":"application/json",
                body:JSON.stringify({amount:totalDonation})
            }
        })
        .then(res=>res.json())
        .then(data=>setClientSecret(data))
        .catch(error=>console.log(error))
    },[])

    const handleChange=async(e)=>{
        setDisabled(e.empty)
        setError(e.error?e.error.message:"")
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        setProcessing(true)

        const payload= await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: element.getElement(CardElement)
            }
        })

        if(payload.error){
            setError(`Payment failed ${payload.error.message}`)
            setProcessing(false)
        }else{
            setError(null)
            setProcessing(false)
            setSucceded(true)


            // redirect user here to add comment orr show comment box now
        }
    }

    
    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <CardElement id="card-element" className="border py-3 text-lg px-2 rounded-md mb-2 border-primary_green" options={cardStyle} onChange={handleChange} />
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
            {/* Show a success message upon completion */}
            <p className={succeded ? "block text-green-500" : "hidden"}>
                Payment succeeded, Refresh the page to pay again.
            </p>
            </form>
            )
}

export default CheckoutForm
