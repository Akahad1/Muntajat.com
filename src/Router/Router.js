import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Main2 from "../Layout/Main2";
import AllLaptop from "../Pages/AllLaptop/AllLaptop";
import AllMobile from "../Pages/AllMobile/AllMobile";
import Singup from "../Pages/Authentication/Singup/Singup";
import LogIn from "../Pages/Authentication/LongIn/LogIn";
import AllTablet from "../Pages/AllTablet/AllTablet";
import { BiLogoApple } from "react-icons/bi";
import Bolgs from "../Pages/Bolgs/Bolgs";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Myorder from "../Pages/BuyerInformation/Myorder";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddProducts from "../Pages/Dashboard/addProduct/AddProducts";
import Myproduct from "../Pages/Dashboard/Myproduct/Myproduct";




const router=createBrowserRouter([
    {path:'/',element:<Main></Main>,
    children:[
        {path:'/',element:<Home></Home> },
        {path:'/singup',element:<Singup></Singup>},
        {path:'/login',element:<LogIn></LogIn>},
        {path:'/blog',element:<Bolgs></Bolgs>},
        
    ]},
    {path:'/allproduct',element:<Main2></Main2>,children:[
        {path:'/allproduct/laptop',element:<AllLaptop></AllLaptop>},
        {path:'/allproduct/mobile',element:<AllMobile></AllMobile>},
        {path:'/allproduct/tab',element:<AllTablet></AllTablet>},
        
    ]},
    {path:'/dashboard',element:<Dashboard></Dashboard>,
    children:[
        {path:'/dashboard/myorders',element:<Myorder></Myorder>},
        {path:'/dashboard/alluser',element:<AllUsers></AllUsers>},
        {path:'/dashboard/myproducts',element:<Myproduct></Myproduct>},
        {path:'/dashboard/addproducts',element:<AddProducts></AddProducts>},
    ]
}
    
    
])



export default  router;