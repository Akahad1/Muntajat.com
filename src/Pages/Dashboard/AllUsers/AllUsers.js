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
            {
                Users.map(user=><ShowAllUsers
                key={user._id}
                user={user}
                >
                </ShowAllUsers>)
            }
            
            
        </div>
    );
};

export default AllUsers;