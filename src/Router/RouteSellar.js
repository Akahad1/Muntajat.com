
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

import Loading from '../Hooks/Loading';
import useSellar from '../Hooks/useSellar';




const RouteSellar = ({children}) => {
    const location=useLocation()
    const {user,loding}=useContext(AuthContext)
    
    const [IsSellar,IsSellarLoading]=useSellar(user?.email)
    if(loding || IsSellarLoading){
        return <Loading></Loading>
    }
    if(user && IsSellar){
        return children
    }
    return (
        <Navigate to="/login"  state={{from:location}} replace>

        </Navigate>
    );
};

export default RouteSellar;