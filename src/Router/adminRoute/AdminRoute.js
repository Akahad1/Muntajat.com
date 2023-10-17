
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import Loading from '../../Hooks/Loading';



const AdminRoute = ({children}) => {
    const location=useLocation()
    const {user,loding}=useContext(AuthContext)
    
    const [isAdmin,isAdminLoading]=useAdmin(user?.email)
    if(loding || isAdminLoading){
        return <Loading></Loading>
    }
    if(user && isAdmin){
        return children
    }
    return (
        <Navigate to="/login"  state={{from:location}} replace>

        </Navigate>
    );
};

export default AdminRoute;