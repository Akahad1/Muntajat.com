import React, { useState } from 'react';
import sidenaver from './SideNaver.css'
import { Link } from 'react-router-dom';

const SideNaver = ({isOpen,onClose}) => {
    const [nabver,setnaver]=useState('')
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
      
       <p> <Link className='  text-xl mt-10'>All Laptop</Link></p>
        <p><Link className='  text-xl mt-10'>All Mobile</Link></p>
        <Link className='  text-xl mt-10'>All Tab</Link>
        
    </div>
            
        </div>
    );
};

export default SideNaver;