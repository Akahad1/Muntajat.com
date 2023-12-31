import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navber1 from '../../Shared/Navber/Navber1';
import Footer from '../../Shared/Footer/Footer';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import useSellar from '../../Hooks/useSellar';
import { useState } from 'react';
import DashboardSidebar from './DashboardSidebar';
import useTitle from '../../Hooks/useTitle';

const Dashboard = () => {
    const {user}=useContext(AuthContext)
    const [IsSellar]=useSellar(user?.email)
    useTitle("Dashboard")
    
    const [isAdmin]=useAdmin(user?.email)
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
    return (
        <div className=''>
            <Navber1></Navber1>
            {/* <div className='min-h-screen lg:hidden md:hidden '> */}
            {/* <div className='lg:hidden inline ml-1 h-10   w-20'> */}
                {/* <BsLayoutTextSidebar className='inline   w-8'/> */}
            {/* <button className="toggle-button btn-success btn-xs rounded-btn mt-2 mb-2 " onClick={toggleSidebar}>
            {isSidebarOpen ? 'CloseSidebar' : 'ShowSidebar'}
      </button> */}
      {/* <DashboardSidebar  isOpen={isSidebarOpen} onClose={toggleSidebar}></DashboardSidebar> */}
      {/* </div>
      </div> */}
      <main className="main-content">
        
        
      </main>
            

           
            
            <div class="container mx-auto lg:inline md:inline ">
                
                <div class="flex flex-row flex-wrap py-4">
                
                    <main role="main" class="w-full  sm:w-2/3 md:w-3/4 pt-1 px-2">
                        <Outlet></Outlet>

                    </main>
                    
                    <aside class="w-full sm:w-1/3 md:w-1/4 px-2">
                        <div class="sticky top-0 p-4 w-full ">

                            <ul class="flex flex-col h-screen overflow-hidden bg-slate-800 border-shadow">
                               <div className='p-6'>

                               <p className=' text-white font-thin mt-2'><Link to='/dashboard/myorders'>My Orders</Link></p>

                               {
                                IsSellar && <>
                                <p className=' text-white font-thin mt-2'><Link to='/dashboard/addproducts'>Add Product</Link></p>
                               <p className=' text-white font-thin mt-2'><Link to='/dashboard/myproducts'>My Products</Link></p></>
                                
                               }



                               {/* {isSellers &&
                               <> 
                               
                               <p className=' text-white font-thin mt-2'><Link to='/Deshborad/advertisted'>Advertisted</Link></p></>} */}

                               {
                                isAdmin && <p className=' text-white font-thin mt-2'><Link to='/dashboard/alluser'>All User</Link></p>
                               }


                               
                               {/* { isadmin &&<>
                               <p className=' text-white font-thin mt-2'><Link to='/Deshborad/reportItem'>Report Item</Link></p>
                               </>}
                               <p className=' text-white font-thin mt-2'><Link to='/Deshborad/allbuyers'>ALL Buyers</Link></p> */}
                               </div>
                                
                                
                            </ul>
                        </div>
                    </aside>

                </div>
            </div>
            <Footer></Footer>




        </div>
    );
};

export default Dashboard;