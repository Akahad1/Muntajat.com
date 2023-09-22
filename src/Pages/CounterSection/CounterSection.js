import React, { useEffect } from 'react';
import { CiDiscount1 } from 'react-icons/ci';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CounterSection = () => {
    useEffect(()=>{
        AOS.init({duration:'1000'});

    },[])
    return (
        <div>
            
           <div className=' grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 place-items-center mt-32'>
           <div className='h-[195px] lg:w-[240px] hover:border-2 border-sky-500 lg:ml-32  ml-4 mr-4 shadow-2xl mb-20 text-center ' data-aos="fade-up">
            <div className=' flex justify-center'>
            <CiDiscount1 className=' h-14 w-8  mt-4' />
            </div>
            <p className='text-xl  mt-0'><strong>991</strong></p>
            <p>Buyer</p>
            <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  </p>
            </div>
           <div className='h-[195px] mr-4 lg:w-60 hover:border-2 border-sky-500 lg:ml-32 ml-7 shadow-2xl mb-20 text-center ' data-aos="fade-up">
            <div className='flex justify-center'>
            <CiDiscount1 className=' h-14 w-8  mt-4' />
            </div>
            <p className='text-xl  mt-0'><strong>501</strong></p>
            <p>Seller</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  </p>
            </div>
           <div className='h-[195px] mr-4  lg:w-60 hover:border-2 border-sky-500 lg:ml-32 ml-7 shadow-2xl mb-20 text-center ' data-aos="fade-up">
            <div className=' flex justify-center'>
            <CiDiscount1 className=' h-14 w-8  mt-4' />
            </div>
            <p className='text-xl  mt-0'><strong>1201</strong></p>
            <p>Products</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  </p>
            </div>
           </div>
            
            
        </div>
    );
};

export default CounterSection;