import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import { AiOutlineHome,AiFillContacts } from 'react-icons/ai'
import { FaBloggerB, } from 'react-icons/fa'
import { GrCatalog, GrCatalogOption} from 'react-icons/gr'
import { MdOutlineDashboard,MdOutlineSingleBed} from 'react-icons/md'
import { BiSolidLogInCircle} from 'react-icons/bi'
import { RiLogoutCircleLine} from 'react-icons/ri'
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navber1 = () => {
    
  const {user,logOut,cartSup,SetAddCatagory}=useContext(AuthContext)
  console.log(cartSup)

  const logOuthander=()=>{
    logOut()
    .then(()=>{})
    .then(error=>console.log(error))

  }
    return (
        <div>
            <div  className={window.location.pathname === '/' ? ' bg-slate-500' : 'hidden'}>
            <Marquee>
                <p className='text-white p-3' >Welcome To Our Muntajat.com.Our Shop Serveces 24 hour.Thank You For Visiting Our Website</p>
            </Marquee>
            </div>
             <div className="navbar bg-slate-600">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 text-white w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white  rounded-box w-52">
      <li><Link to='/' className='text-xl font-style '>Home</Link></li>
        <li><Link to='/blog' className='text-xl  font-style'>Blogs</Link></li>
        <li><Link  className='text-xl font-style'><li>
          <Link>Catagory</Link>
          <ul className="p-2">
            <li onClick={()=>SetAddCatagory('Laptop')}><Link to='/allproduct/laptop'>All Laptop</Link></li>
            <li onClick={()=>SetAddCatagory('Mobile')}><Link to='/allproduct/mobile'>All Mobile</Link></li>
              <li onClick={()=>SetAddCatagory('Tablet')}><Link to='/allproduct/tab'>All Tablet</Link></li>
          </ul>
        </li></Link></li>
        <li><Link to='/dashboard' className='text-xl font-style'>Dashboard</Link></li>
        <li><Link to='/ContactUs' className='text-xl  font-style'>Contact Us</Link></li>
        
        

        
      
        
      </ul>
    </div>
    <div className="avatar lg:flex md:flex  hidden">
  <div className="w-16 rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2">
    <img alt='' src="https://i.ibb.co/0r3MJc5/android-chrome-192x192.png" />
  </div>
</div>



  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to='/' className='text-xl text-white '><AiOutlineHome className='h-10 w-8 mr-2'/>Home</Link></li>

        <li><Link to='/blog' className='text-xl  text-white font-style'> <FaBloggerB className='h-10 w-8 mr-2'/>Blogs</Link></li>

        <li><Link  className='text-xl  font-style'><div className="dropdown dropdown-bottom">
  <label className='text-xl text-white h-10' tabIndex={0} > <GrCatalogOption className='inline h-10 w-8 mr-2 bg-white  text-white '/>Catagory</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li onClick={()=>SetAddCatagory('Laptop')}><Link  to='/allproduct/laptop'>All Laptop</Link></li>
    <li  onClick={()=>SetAddCatagory('Mobile')}><Link to='/allproduct/mobile'>All Mobile</Link></li>
    <li onClick={()=>SetAddCatagory('Tablet')}><Link  to='/allproduct/tab'>All Tablet</Link></li>
    <li><Link>{user?.name}</Link></li>
    
  </ul>
</div></Link></li>
        <li><Link to='/dashboard' className='text-xl  text-white font-style'><MdOutlineDashboard className='h-10 w-8 mr-2'/>Dashboard</Link></li>
        <li><Link to='/ContactUs' className=' text-xl  text-white font-style'><AiFillContacts className='h-10 w-10 mr-2'/>Contact Us</Link></li>
       
        
        
    </ul>
  </div>
  <div className="navbar-end">
    

    {user?.uid?<button  onClick={logOuthander} className='text-xl  text-white' ><RiLogoutCircleLine className='inline h-12 w-10 mr-2'/>Log Out</button>
    :
    <>
    <Link to='/singup' className='text-xl  text-white font-style'><MdOutlineSingleBed className='inline h-12 w-10 mr-2'/>Sing Up</Link>
    <Link to='/login' className='ml-5 mr-5 text-xl  text-white font-style '> <BiSolidLogInCircle className='inline h-12 w-10 mr-2'/>Log in</Link>
    </>
    }
  
   
  </div>
  </div>
            
        </div>
    );
};

export default Navber1;