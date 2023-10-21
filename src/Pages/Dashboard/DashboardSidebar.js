import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import useSellar from '../../Hooks/useSellar';
import useAdmin from '../../Hooks/useAdmin';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const DashboardSidebar = ({isOpen,onClose}) => {
    const [nabver,setnaver]=useState('')
   
    console.log(nabver)
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const {user}=useContext(AuthContext)
    const [IsSellar]=useSellar(user?.email)
    
    const [isAdmin]=useAdmin(user?.email)

    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
    return (
        <div>
            <div>
           <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-button mb-9" onClick={onClose}>
        Close
      </button>
      <h2>Sidebar Content</h2>
      
      
                        <div class="sticky top-0 p-4 w-full ">

                            <ul class="flex flex-col h-screen overflow-hidden border-shadow">
                               <div className='p-6'>

                               <p className=' text-white font-thin mt-2'><Link to='/dashboard/myorders'>My Orders</Link></p>

                               {
                                IsSellar && <>
                                <p className=' text-white font-thin mt-2'><Link to='/dashboard/addproducts'>Add Product</Link></p>
                               <p className=' text-white font-thin mt-2'><Link to='/dashboard/myproducts'>My Products</Link></p></>
                                
                               }



                               

                               {
                                isAdmin && <p className=' text-white font-thin mt-2'><Link to='/dashboard/alluser'>All User</Link></p>
                               }


                               
                               
                               </div>
                                
                                
                            </ul>
                        </div>
                   
      
      
        
    </div>
    <div>
      
    </div>
            
        </div>
            
        </div>
    );
};

export default DashboardSidebar;