import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigation } from 'react-router-dom';
import Spanner from '../../../Hooks/Progress/Spanner';

const ChackoutForm = ({price,email,_id}) => {
    
    const stripe=useStripe()
    const elements=useElements()
    const navigation =useNavigation()
    const [cartError,setCarterror]=useState('')
    const [success,setSuccess]=useState('')
    const [processing,setProcessing]=useState(true)
    const [transfierid,setTransfierid]=useState('')
    const [clientSecret, setClientSecret] = useState("");
    
    

    
    useEffect(() => {
      
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price }),
      })
        .then((res) => res.json())
        .then((data) => {setClientSecret(data.clientSecret)
          console.log(data.clientSecret)
        });
    }, [price]);

    const handleSubmit=async(event)=>{
        event.preventDefault();

    if (!stripe || !elements) {
      
      return;
    }
      const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setCarterror(error.message)
    } 
    else{
      setCarterror('')
    
    }

    const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            
            email: email
          },
        },
      },
    );

    if(confirmError){
      setCarterror(confirmError)
      return
    }
    console.log('paymentIntent',paymentIntent)

    if(paymentIntent.status === 'succeeded'){
      
      const paymentData={
        price,
        email,
        transactionid:paymentIntent.id,
        orderId: _id,

      }
      fetch('http://localhost:5000/payment',{
        method: "POST",
        headers:{
          "content-type" : 'application/json'
      },
      body: JSON.stringify(paymentData)

      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.insertedId){
          setTransfierid(paymentIntent.id)
      setSuccess('Payment successfull Paid')
      setProcessing(false)

        }
      })
    
  
    }
  };

  
  


    
    return (
        <>
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-sm btn-success mt-5' type="submit" disabled={!stripe || !clientSecret || !processing }>
          Pay
        </button>
      </form>
      <p className='text-red-400'>{cartError}</p>
      <p className='text-xl text-lime-500'>{success}</p>
      <p className='text-xl text-lime-500'>{transfierid}</p>
        </>
    );
};

export default ChackoutForm;