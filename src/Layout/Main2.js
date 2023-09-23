import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navber2 from '../Shared/Navber/Navber2';

const Main2 = () => {
    return (
        <div>
            <Navber2></Navber2>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main2;