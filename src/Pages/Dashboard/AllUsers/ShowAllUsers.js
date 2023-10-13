import React from 'react';

const ShowAllUsers = ({user}) => {
    const {name,email,role}=user;
    return (
        <div>
        <div className="">
  <table className="table">
  
   
    <tbody >
     
      <tr >
        
        <td className='mr-10'>{name}</td>
        <td className='mr-6'>{email}</td>
        <td className='mr-6'>{role}</td>
      <td className='mr-6'> <button className='btn '>Make Admin</button></td>
      <td className='mr-6'> <button className='btn'>Delete</button></td>
      </tr>
      
     
    </tbody>
  </table>
</div>
           
            
        </div>
    );
};

export default ShowAllUsers;