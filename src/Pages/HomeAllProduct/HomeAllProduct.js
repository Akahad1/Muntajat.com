import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import CartHomeAllProduct from './CartHomeAllProduct';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
// ..


const HomeAllProduct = () => {
    const [alllaptop,setAllLaptop]=useState([])
    const [specificLaptop,setspecificLaptop]=useState([])
    const {user}=useContext(AuthContext)
    const {name,price,SellerName,category,ratings,img}=specificLaptop;
    useEffect(()=>{
        AOS.init({duration:'1000'});

    },[])

    useEffect(()=>{
        fetch('http://localhost:5000/allproduct')
        .then(res=>res.json())
        .then(data=>setAllLaptop(data))
    },[])
    const addOrderHandler=()=>{
        const orderProduct={
            name,
            price,
            SellerName,
            category,
            img,
            ratings,
            email:user?.email
        }

       console.log(orderProduct)
       console.log('hi')
        fetch('http://localhost:5000/orders',{
            method:"POST",
            headers:{
                "content-type" : 'application/json'
            },
            body: JSON.stringify(orderProduct)
            
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
               toast.success("successfully data add")
               
            
           
            //    alert('succufully add')
               
            }
        })

    }
    return (
        <div>
            <p className=' lg:text-2xl mt-10 lg:ml-5 md:ml-5 ml-2  '><strong>ALL PRODUCTS</strong></p>
           <div className='  p-5 '>
           <Toaster />

           <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center   lg:ml-0   place-items-center '  >
            {alllaptop?.map(laptop=><CartHomeAllProduct
            key={laptop._id}
            laptop={laptop}
            setspecificLaptop={setspecificLaptop}
            addOrderHandler={addOrderHandler}
            ></CartHomeAllProduct>)}
            
            

            </div>
            <div className='flex justify-end'>
               <Link to='/allproduct/laptop'> <button className='btn w-32' data-aos="fade-left"> See All</button></Link>
            </div>

           </div>
            
            
            
            
            
        </div>
    );
};

export default HomeAllProduct;