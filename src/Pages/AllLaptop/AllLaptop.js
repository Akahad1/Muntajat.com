import React, { useContext, useEffect, useState } from 'react';
import LaptopBanner from './LaptopBanner';
import SideNaver from './SideNavber/SideNaver';
import Cartlaptops from './Cartlaptops';
import sidenaver from './SideNavber/SideNaver.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AllLaptop = () => {
    const {SetAddCatagory,AddCatagory}=useContext(AuthContext)
    const [Laptops,setLaptops]=useState([])
    useEffect(()=>{
     fetch(`http://localhost:5000/catagoryproduct?catagory=${AddCatagory}`)
     .then(res=>res.json())
     .then(data=>setLaptops(data))
    },[AddCatagory])

    
    const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

    return (
        <div className=''>
            <LaptopBanner></LaptopBanner>
            <div className='lg:hidden inline'>
            <button className="toggle-button rounded-btn  btn-success" onClick={toggleSidebar}>
        {isSidebarOpen ? 'Close Sidebar' : 'Show All Product'}
      </button>
      <SideNaver isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <main className="main-content">
        
        
      </main>
            </div>
            
            <div className='grid grid-cols-12 gap-4 '>
                <div className='lg:col-span-2  bg-base-200 lg:block md:hidden hidden'>
                    <div>
                        <h1  className='text-2xl ml-2 p-3'>ALL CATAGORY PRODUCT</h1>
                        <div>
                            <p onClick={()=>SetAddCatagory('Laptop')}  className='mt-2 text-xl ml-2 p-3'> <Link to='/allproduct/laptop'>All Laptop</Link></p>
                            
                            <p onClick={()=>SetAddCatagory('Mobile')} className='mt-2 text-xl ml-2 p-3' ><Link to='/allproduct/tab'> All Tab</Link></p>
                            <p onClick={()=>SetAddCatagory('Tablet')} className='mt-2 text-xl p-3'><Link to='/allproduct/mobile' >All Mobile</Link></p>
                        </div>
                    </div>

                </div>
                
                <div className='lg:col-span-10 md:col-span-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 '>
                    {Laptops.map(laptop=><Cartlaptops
                    laptop={laptop}
                    key={laptop._id}

                    ></Cartlaptops>)}
                </div>
               
            </div>
        </div>
    );
};

export default AllLaptop;