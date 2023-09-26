import React from 'react';
import MoblieBanner from './MoblieBanner';
import CartMobile from './CartMobile';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const AllMobile = () => {

    const [mobiles,setMobiles]=useState([])
    useEffect(()=>{
     fetch('http://localhost:5000/mobile')
     .then(res=>res.json())
     .then(data=>setMobiles(data))
    },[])
    return (
        <div>
            <MoblieBanner></MoblieBanner>

            <div className='grid grid-cols-12 gap-4 '>
                <div className='lg:col-span-2  bg-base-200 lg:block md:hidden hidden'>
                    <div>
                        <h1  className='text-2xl ml-2 p-3'>ALL CATAGORY PRODUCT</h1>
                        <div>
                            <p  className='mt-2 text-xl ml-2 p-3'> <Link to='/allproduct/laptop'>All Laptop</Link></p>
                            
                            <p className='mt-2 text-xl ml-2 p-3' ><Link to='/allproduct/tab'> All Tab</Link></p>
                            <p className='mt-2 text-xl p-3'><Link to='/allproduct/mobile' >All Mobile</Link></p>
                        </div>
                    </div>

                </div>
                
                <div className='lg:col-span-10 md:col-span-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 '>
                    {mobiles.map(laptop=><CartMobile
                    laptop={laptop}
                    key={laptop._id}

                    ></CartMobile>)}
                </div>
               
            </div>
            
        </div>
    );
};

export default AllMobile;