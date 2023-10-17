import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import ChackoutForm from './ChackoutForm';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../../Hooks/Loading';

const MyPyment = () => {
    const stripePromise = loadStripe('pk_test_51M6bnCGbMWtcM0fITPmW5rk0kyfE3bZ0IeIWZyrfoKWssuOTQI9mnMkGnYSzpLKsP6ginziugFJIXUnFOH6SPDCz00F8rCB8MF');
    const OrderData=useLoaderData()
    const{name,price, category,img,email,_id}=OrderData;
    console.log(OrderData)
    const navigation =useNavigation()

    console.log(process.env.REACT_APP_NOT_SECRET_CODE)

    if(navigation.state ==='loading'){
        return <Loading></Loading>

    }
    return (
        <div>
            <p>{name}</p>

           <div className='border border-gray-800 w-80 p-4'>
           <Elements stripe={stripePromise}>
      <ChackoutForm  price={price} name={name} email={email}
      _id={_id}/>
    </Elements>
           </div>


            
        </div>
    );
};

export default MyPyment;