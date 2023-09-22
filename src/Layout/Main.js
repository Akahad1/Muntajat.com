import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navber1 from '../Shared/Navber/Navber1';


const Main = () => {
    return (
        <div>
            <Navber1></Navber1>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;