import React, { useEffect, useState } from 'react';
import CartHomeTab from './CartHomeTab';

const HomeTab = () => {
    const [Tabs,setTabs]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/tab')
        .then(res=>res.json())
        .then(data=>setTabs(data))
    },[])
    return (
        <div>
            <div>
                <p className='text-xl mt-10 mb-10  lg:ml-5 md:ml-5 ml-3'><strong>Tablet</strong></p>
            </div>
            <div className='  p-5 pt-10 pb-10'>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center  mt-5 lg:ml-0   place-items-center '>
                {Tabs?.map(tab=><CartHomeTab
                Tablet={tab}
                key={tab._id}
                ></CartHomeTab>)}

                </div>
                <div className='flex justify-end'>
                <button className='btn w-32' data-aos="fade-left"> See All</button>
            </div>
                
            </div>
            
        </div>
    );
};

export default HomeTab;