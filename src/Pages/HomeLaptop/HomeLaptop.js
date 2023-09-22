import React, { useEffect, useState } from 'react';
import CartHomeLaptop from './CartHomeLaptop';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


const HomeLaptop = () => {
    const [alllaptop,setAllLaptop]=useState([])
    useEffect(()=>{
        AOS.init({duration:'1000'});

    },[])

    useEffect(()=>{
        fetch('http://localhost:5000/laptop')
        .then(res=>res.json())
        .then(data=>setAllLaptop(data))
    },[])
    return (
        <div>
            <p className='text-2xl mt-10 lg:ml-5 md:ml-5 ml-2 mb-5 '><strong>Laptop</strong></p>
           <div className='  p-5 pt-10 pb-10'>

           <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center  mt-5 lg:ml-0   place-items-center '  >
            {alllaptop?.map(laptop=><CartHomeLaptop
            key={laptop._id}
            laptop={laptop}
            ></CartHomeLaptop>)}
            

            </div>
            <div className='flex justify-end'>
                <button className='btn w-32' data-aos="fade-left"> See All</button>
            </div>

           </div>
            
            
            
            
            
        </div>
    );
};

export default HomeLaptop;