import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import ShowMyProduct from './ShowMyProduct';
import useTitle from '../../../Hooks/useTitle';

const Myproduct = () => {
    const {user}=useContext(AuthContext)
    const [userProducts,setUserProduct]=useState([])
    useTitle('Dashboard-MyProducts')
    useEffect(()=>{
        fetch(`https://muntajat-com-server-cve15m39y-akahad1.vercel.app/catagoryproduct?sellerName=${user?.displayName}`)
        .then(res=>res.json())
        .then(data=>setUserProduct(data))
    },[user?.displayName])
    console.log(userProducts)
    console.log(user?.displayName)
    return (
        <div className=' grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 mt-5 lg:ml-5  ml-5 mb-5 md:ml-32 '>
            {
                userProducts.map(userProduct=><ShowMyProduct
                key={userProduct._id}
                userProduct={userProduct}
                ></ShowMyProduct>)
            }
           
            
        </div>
    );
};

export default Myproduct;