import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome,AiFillContacts } from 'react-icons/ai'
import { FaBloggerB, } from 'react-icons/fa'
import { GrCatalog, GrCatalogOption} from 'react-icons/gr'
import { MdOutlineDashboard,MdOutlineSingleBed} from 'react-icons/md'
import { BiSolidLogInCircle} from 'react-icons/bi'
import { RiLogoutCircleLine} from 'react-icons/ri'

const Navber2 = () => {
    const[user,setUser]=useState([])
    return (
        <div>
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
            <li><Link>Laptop</Link></li>
            <li><Link>Mobile</Link></li>
            <li><Link>Tab</Link></li>
          </ul>
        </li></Link></li>
        <li><Link to='/dashboard' className='text-xl font-style'>Dashboard</Link></li>
        <li><Link to='/ContactUs' className='text-xl  font-style'>Contact Us</Link></li>

        {user?.uid?<button className='text-xl ' >Log Out</button>
    :
    <>
    <Link to='/singup' className='text-xl ml-5 mr-5  font-style'>Sing Up</Link>
    <Link to='/login' className='ml-5 mr-5 text-xl  font-style '> Log In</Link>
    </>
    }
        
        

        
      
        
      </ul>
    </div>
    <div className="avatar lg:flex md:flex  hidden">
  <div className="w-16 rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2">
    <img alt='' src="https://i.ibb.co/0r3MJc5/android-chrome-192x192.png" />
  </div>
</div>



  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><Link to='/' className='text-xl text-white '><AiOutlineHome className='h-10 w-8 mr-2'/></Link></li>

        <li><Link to='/blog' className='text-xl  text-white font-style'> <FaBloggerB className='h-10 w-8 mr-2'/></Link></li>

        <li><Link  className='text-xl  font-style'><div className="dropdown dropdown-bottom">
  <label className='text-xl text-white' tabIndex={0} > <GrCatalogOption className='inline h-10 w-8 mr-2 bg-white  text-white '/></label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><Link>Item 1</Link></li>
    <li><Link>Item 2</Link></li>
    <li><Link>Item 3</Link></li>
    <li><Link>Item 4</Link></li>
    
  </ul>
</div></Link></li>
        <li><Link to='/dashboard' className='text-xl  text-white font-style'><MdOutlineDashboard className='h-10 w-8 mr-2'/></Link></li>
        <li><Link to='/ContactUs' className=' text-xl  text-white font-style'><AiFillContacts className='h-10 w-8 mr-2'/></Link></li>
       
        {user?.uid?<button className='text-xl  text-white' ><RiLogoutCircleLine className='inline h-12 w-8 mr-2'/></button>
    :
    <>
    <Link to='/singup' className='text-xl  text-white font-style'><MdOutlineSingleBed className='inline h-12 w-8 mr-2'/></Link>
    <Link to='/login' className='ml-5 mr-5 text-xl  text-white font-style '> <BiSolidLogInCircle className='inline h-12 w-8 mr-2'/></Link>
    </>
    }
        
    </ul>
  </div>
  <div className="">
    

    
  
   
  </div>
  </div>
            
        </div>
    );
};

export default Navber2;