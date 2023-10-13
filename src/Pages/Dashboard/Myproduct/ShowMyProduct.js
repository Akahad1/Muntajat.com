import React from 'react';

const ShowMyProduct = ({userProduct}) => {
    const {name,price,SellerName,category,ratings,img}=userProduct;
    return (
        <div className='border border-slate-700 w-80 mt-5 h-96'>
            <div className='p-1'>
           <div className='flex justify-center mb-2'>
           <img src={img} alt="" className='w-44 '/>
           </div>
            <p>{name}</p>
            <p><span className='text-xl'>SellerName: </span>{SellerName}</p>
            <h1><span className='text-xl mt-1'>CatagoryName: </span>{category}</h1>
            <span><span className='text-xl mt-1'>Rating: </span>{ratings} </span>
            <p><span className='text-xl mt-1'>price: </span>{price}</p>

            </div>
            
            
        </div>
    );
};

export default ShowMyProduct;