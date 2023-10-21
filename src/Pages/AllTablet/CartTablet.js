import React, { useContext } from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const CartTablet = ({tablet,setspecificTablet,addOrderHandler,errorHandler}) => {
    const {name,price,SellerName,category,ratings,img}=tablet;
    const {user}=useContext(AuthContext)
    setspecificTablet(tablet)
    useEffect(()=>{
        AOS.init({duration:'1000'});

    },[])
    return (
        <div>
            <div className="card    border-blue-950 mb-10 lg:w-96 md:w-96 w-80 ml-5 border bg-base-100  shadow-xl" data-aos="zoom-in">
  <figure className='transition duration-300 ease-in-out'><Link ><img className='h-64 w-full mt-3 ' src={img} alt="" /></Link></figure>
  <div className=" items-center  mt-6 mb-6">
    <div>
     
    <h1 className='ml-4 '>{name.slice(0,60)}...</h1>
    <h1 ><span className='ml-4'><strong>Seller Name</strong>: </span> {SellerName}</h1>
    <h1 ><span className='ml-4'><strong>Catagory</strong>: </span> {category}</h1>
    
    <span className='inline ml-4 '>Rating</span>
    <Rating className='inline ml-4 ' style={{ maxWidth: 90 }} value={ratings} readOnly />
    <div className="divider mb-0"></div> 
   
    <div className='flex justify-center'>
        <h1 className='text-xl text-red '><span className='text-2xl'>৳</span>{price}</h1>
    </div>
    {
        user?<button onClick={addOrderHandler} className='btn w-full mt-3'>Add Order</button>:
        <button onClick={errorHandler} className='btn w-full mt-3'>Add Order</button>
    }
    </div>
  </div>
  </div>
            
        </div>
    );
};

export default CartTablet;