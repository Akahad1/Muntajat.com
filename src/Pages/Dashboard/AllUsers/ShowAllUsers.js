import React from 'react';

const ShowAllUsers = ({user}) => {
    const {name,email,role}=user;
    return (
        <div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>{role}</td>
      </tr>
      
     
    </tbody>
  </table>
</div>
           
            
        </div>
    );
};

export default ShowAllUsers;