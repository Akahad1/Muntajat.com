import React from 'react';
import MoblieBanner from './MoblieBanner';
import CartMobile from './CartMobile';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import SideNaver from '../AllLaptop/SideNavber/SideNaver';

const AllMobile = () => {
    const {SetAddCatagory,AddCatagory}=useContext(AuthContext)

    const [mobiles,setMobiles]=useState([])
    useEffect(()=>{
     fetch(`http://localhost:5000/catagoryproduct?catagory=${AddCatagory}`)
     .then(res=>res.json())
     .then(data=>setMobiles(data))
    },[AddCatagory])
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
    return (
        <div>
            <MoblieBanner></MoblieBanner>
            <div className='flex justify-between'>
            <div className='lg:hidden inline ml-1 h-10   w-20'>
                {/* <BsLayoutTextSidebar className='inline   w-8'/> */}
            <button className="toggle-button rounded-btn mt-2 mb-2 " onClick={toggleSidebar}>
        {isSidebarOpen ? 'Close Sidebar' : 'Show Sidebar'}
      </button>
      <SideNaver isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <main className="main-content">
        
        
      </main>
            </div>

            <div className='lg:ml-10 md:ml-5 ml-1 '>
                <p className='inline  lg:text-xl'><Link to='/'>Home</Link></p>
                <span className='text-xl'>/</span>
                <p className='inline lg:text-xl ' onClick={()=>SetAddCatagory('Laptop')}  ><Link to='/allproduct/laptop'>Shop</Link></p>
            </div>
            <div>
            <div className="form-control">
  <div className="input-group lg:mr-10 mr-1 md:mr-4">
    <select name='role'  className="select select-bordered  md:w-44 lg:w-96   w-32">
      <option  selected>Sort</option>
      <option>Sellar</option>
      
    </select>
    
  </div>
</div>
            </div>
                
            </div>
            <div className='divider h-1 bg-yellow-500  lg:w-40 md:w-24  lg:ml-10 md:ml-4 w-20 ml-3

            
            '></div>

            <div className='grid grid-cols-12 gap-4 '>
                <div className='lg:col-span-2  bg-base-200 lg:block md:hidden hidden'>
                    <div>
                        <h1  className='text-2xl ml-2 p-3'>ALL CATAGORY PRODUCT</h1>
                        <div>
                            <p onClick={()=>SetAddCatagory('Laptop')}  className='mt-2 text-xl ml-2 p-3'> <Link to='/allproduct/laptop'>All Laptop</Link></p>
                            
                            <p onClick={()=>SetAddCatagory('Tablet')} className='mt-2 text-xl ml-2 p-3' ><Link to='/allproduct/tab'> All Tab</Link></p>
                            <p onClick={()=>SetAddCatagory('Mobile')} className='mt-2 text-xl p-3'><Link to='/allproduct/mobile' >All Mobile</Link></p>
                        </div>
                    </div>

                </div>
                
                <div className='lg:col-span-10 md:col-span-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 col-span-12 place-items-center mt-10'>
                    {mobiles.map(mobile=><CartMobile
                    mobile={mobile}
                    key={mobile._id}

                    ></CartMobile>)}
                </div>
               
            </div>
            
        </div>
    );
};

export default AllMobile;