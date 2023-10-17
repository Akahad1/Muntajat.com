import React, { useContext } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const MyOrder = () => {
  const{user}=useContext(AuthContext)
    

    const {data:oders =[],}=useQuery({
        queryKey:['oders',user?.email],
        queryFn:()=> fetch(`http://localhost:5000/orders?email=${user?.email}`)
        .then(res=>res.json())
    })

     console.log(oders)
    return (
        <div>
            <div className="overflow-x-auto mt-5">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
       
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        
        
        <th>Pyment</th>
      </tr>
    </thead>
    <tbody>
    {
        oders.map((order,i)=><tr>
        <th>{i+1}</th>
        
  
        <td>{order.name}</td>
        <td>{order.category}</td>
        <td>{order.price}</td>
        
        
        
      
      <td>{
      order.price && !order.paid && <Link to={`/dashboard/payment/${order._id}`}>
      <button className='btn btn-primary btn-xs'>Pay</button>
      
      </Link> 
      }
      ,{
        order.price && order.paid && <button className='text-green-400'>Paid</button>
      }
      </td>
      </tr>)
      }
        
      
      
      
      
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default MyOrder;