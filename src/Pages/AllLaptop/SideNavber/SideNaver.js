import React, { useState } from 'react';
import sidenaver from './SideNaver.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const SideNaver = ({isOpen,onClose}) => {
    const [nabver,setnaver]=useState('')
    const {SetAddCatagory,AddCatagory}=useContext(AuthContext)
    console.log(nabver)
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
    
    return (
        <div>
           <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="close-button mb-9" onClick={onClose}>
        Close
      </button>
      <h2>Sidebar Content</h2>
      {/* Add your sidebar content here */}
      
       <p onClick={()=>SetAddCatagory('Laptop')} className='  text-xl mt-10'> <Link to='/allproduct/laptop' >All Laptop</Link></p>
        <p onClick={()=>SetAddCatagory('Mobile')}className='  text-xl mt-10'><Link to='/allproduct/mobile'>All Mobile</Link></p>
        <p onClick={()=>SetAddCatagory('Tablet')}className='  text-xl mt-10'><Link to='/allproduct/tab' >All Tab</Link></p>
        
    </div>
            
        </div>
    );
};

export default SideNaver;