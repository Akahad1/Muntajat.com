import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Main2 from "../Layout/Main2";
import AllLaptop from "../Pages/AllLaptop/AllLaptop";
import AllMobile from "../Pages/AllMobile/AllMobile";
import Singup from "../Pages/Authentication/Singup/Singup";
import LogIn from "../Pages/Authentication/LongIn/LogIn";
import AllTablet from "../Pages/AllTablet/AllTablet";
import Bolgs from "../Pages/Bolgs/Bolgs";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddProducts from "../Pages/Dashboard/addProduct/AddProducts";
import Myproduct from "../Pages/Dashboard/Myproduct/Myproduct";
import MyOrder from "../Pages/Dashboard/MyOrder/MyOrder";
import MyPyment from "../Pages/Dashboard/MyPyment/MyPyment";
import PriviteRoute from "./PriviteRoute";
import AdminRoute from "./adminRoute/AdminRoute";
import RouteSellar from "./RouteSellar";
import DashbordHome from "../Pages/Dashboard/DashbordHome";







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
    {path:'/dashboard',element:<PriviteRoute><Dashboard></Dashboard></PriviteRoute>,
    children:[
        {path:'/dashboard',element:<DashbordHome></DashbordHome>},
        {path:'/dashboard/myorders',element:<MyOrder></MyOrder>},
        {path:'/dashboard/alluser',element:<AdminRoute><AllUsers></AllUsers></AdminRoute>},
        {path:'/dashboard/myproducts',element:<Myproduct></Myproduct>},
        {path:'/dashboard/addproducts',element:<RouteSellar><AddProducts></AddProducts></RouteSellar>},
        {path:'/dashboard/payment/:id',element:<MyPyment></MyPyment>,
        loader:async({params})=>fetch(`https://muntajat-com-server-cve15m39y-akahad1.vercel.app/orders/${params.id}`)
    },
        
    ]
}
    
    
])



export default  router;