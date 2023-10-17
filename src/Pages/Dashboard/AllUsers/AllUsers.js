import React from 'react';
import { useQuery } from 'react-query';
import ShowAllUsers from './ShowAllUsers';

const AllUsers = () => {
    const {data:Users =[],refetch}=useQuery({
        queryKey: ['users'],
        queryFn: ()=> fetch('http://localhost:5000/users')
        .then(res=>res.json())
    })
    return (
        <div>
            <div className="">
  <table className="table">
  
    <thead>
      <tr className='flex gap-40'>
        
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Make Admin</th>
        <th>Delete Users</th>
      </tr>
    </thead>
  </table>
</div>
           <div>
           {
                Users.map(user=><ShowAllUsers
                key={user._id}
                user={user}
                refetch={refetch}
                >
                </ShowAllUsers>)
            }
           </div>
            
            
        </div>
    );
};

export default AllUsers;