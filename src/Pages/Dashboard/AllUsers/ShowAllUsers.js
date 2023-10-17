import React from 'react';
import toast from 'react-hot-toast';

const ShowAllUsers = ({user,refetch}) => {
    const {name,email,role,_id}=user;
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
  <table className="table">
  
   
    <tbody >
     
      <tr >
        
        <td className='mr-10'>{name}</td>
        <td className='mr-6'>{email}</td>
        <td className='mr-6'>{role}</td>
      <td className='mr-6'> {user?.role!=='admin' && <button onClick={()=>MakeAdminHandler(_id)} className='btn  btn-xs'>Make Admin</button>}</td>
      <td className='mr-6'> <button className='btn btn-xs '>Delete</button></td>
      </tr>
      
     
    </tbody>
  </table>
</div>
           
            
        </div>
    );
};

export default ShowAllUsers;