import React, { useContext } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';

const MyOrder = () => {
  const{user,logOut}=useContext(AuthContext)
  useTitle("Dashboard-Myorder")
    

    const {data:oders =[], refetch}=useQuery({
        queryKey:['oders',user?.email],
        queryFn:()=> fetch(`https://muntajat-com-server-cve15m39y-akahad1.vercel.app/orders?email=${user?.email}`,{
          headers:{
            authraization:`Bearer ${localStorage.getItem('muntajatToken')}`

          }
        })
        .then(res=>{
          if(res.status === 401 || res.status ===403){
            return logOut()

          }
          return res.json()
         
        })
        
    })

     console.log(oders)
    
    return (
        <div>
           <><div >
                {/* <p className='text-4xl text-center lg:mt-40 md:mt-32'> YOU NO ORDER ADD !!</p> */}
                </div></>:<>
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
            </div></>
            
            
        </div>
    );
};

export default MyOrder;