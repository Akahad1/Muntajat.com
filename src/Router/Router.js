import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Main2 from "../Layout/Main2";
import AllLaptop from "../Pages/AllLaptop/AllLaptop";
import AllMobile from "../Pages/AllMobile/AllMobile";
import Singup from "../Pages/Authentication/Singup/Singup";
import LogIn from "../Pages/Authentication/LongIn/LogIn";
import AllTablet from "../Pages/AllTablet/AllTablet";



const router=createBrowserRouter([
    {path:'/',element:<Main></Main>,
    children:[
        {path:'/',element:<Home></Home> },
        {path:'/singup',element:<Singup></Singup>},
        {path:'/login',element:<LogIn></LogIn>},
    ]},
    {path:'/allproduct',element:<Main2></Main2>,children:[
        {path:'/allproduct/laptop',element:<AllLaptop></AllLaptop>},
        {path:'/allproduct/mobile',element:<AllMobile></AllMobile>},
        {path:'/allproduct/tab',element:<AllTablet></AllTablet>}
    ]}
])



export default  router;