import React, { useEffect, useState } from 'react';
import CartHomeMobile from './CartHomeMobile';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeMobile = () => {
    
    useEffect(()=>{
        AOS.init({duration:'1000'});

    },[])
    const [mobiles,setMobiles]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/tab')
        .then(res=>res.json())
        .then(data=>setMobiles(data))
    },[])

    return (
        <div>
            <div>
                <p className='text-xl mt-10 mb-10  lg:ml-5 md:ml-5 ml-3'><strong>Mobile</strong></p>
            </div>
            <div className=' p-5 pt-5 pb-5'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center'>
            {mobiles?.map(mobile=><CartHomeMobile
            key={mobile._id}
            mobile={mobile}

            >
            </CartHomeMobile>)}
            </div>
            <div className='flex justify-end'>
                <button className='btn w-32' data-aos="fade-left"> See All</button>
            </div>

            </div>
            
        </div>
    );
};

export default HomeMobile;