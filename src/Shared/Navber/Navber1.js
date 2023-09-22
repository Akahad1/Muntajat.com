import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

const Navber1 = () => {
    const[user,setUser]=useState([])
    return (
        <div>
            <div className='bg-slate-500 '>
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
        <li><Link to='/catagories' className='text-xl font-style'>Catagories</Link></li>
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
    <li><Link to='/' className='text-xl text-white '>Home</Link></li>
        <li><Link to='/blog' className='text-xl  text-white font-style'>Blogs</Link></li>
        <li><Link to='/catagories' className='text-xl  text-white font-style'>Catagories</Link></li>
        <li><Link to='/dashboard' className='text-xl  text-white font-style'>Dashboard</Link></li>
        <li><Link to='/ContactUs' className=' text-xl  text-white font-style'>Contact Us</Link></li>
       
        
        
    </ul>
  </div>
  <div className="navbar-end">
    

    {user?.uid?<button className='text-xl  text-white' >Log Out</button>
    :
    <>
    <Link to='/singup' className='text-xl  text-white font-style'>Sing Up</Link>
    <Link to='/login' className='ml-5 mr-5 text-xl  text-white font-style '>Log in</Link>
    </>
    }
  
   
  </div>
  </div>
            
        </div>
    );
};

export default Navber1;