import React from 'react';
import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import useTitle from '../../../Hooks/useTitle';

const AllUsers = () => {
  useTitle('Dashboard-MyUsers')
    const {data:Users =[],refetch}=useQuery({
        queryKey: ['users'],
        queryFn: ()=> fetch('http://localhost:5000/users')
        .then(res=>res.json())
    })
    const MakeAdminHandler=(id)=>{
      fetch(`http://localhost:5000/users/admin/${id}`,{
        method:"PUT"

      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.modifiedCount > 0){
          toast.success('Make admin successfully')
          refetch()
        }
      })

    }
    return (
        <div>
            <div className="">
            <div className="overflow-x-auto mt-5">
              <table className="table w-full">
                
                <thead>
                  <tr>
                    <th></th>
                   
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    
                    
                    <th>Make Admin</th>
                  </tr>
                </thead>
                <tbody>
                {
                    Users.map((user,i)=><tr>
                    <th>{i+1}</th>
                    
              
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td className='mr-6'> {user?.role!=='admin' && <button onClick={()=>MakeAdminHandler(user?._id)} className='btn  btn-xs'>Make Admin</button>}</td>
                    
                    
                    
                  
                  
                  </tr>)
                  }
                    
                  
                  
                  
                  
                </tbody>
              </table>
            </div>
            
            
        </div>
        </div>
    );
};

export default AllUsers;