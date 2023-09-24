import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Main2 from "../Layout/Main2";
import AllLaptop from "../Pages/AllLaptop/AllLaptop";
import AllMobile from "../Pages/AllMobile/AllMobile";



const router=createBrowserRouter([
    {path:'/',element:<Main></Main>,
    children:[
        {path:'/',element:<Home></Home>}
    ]},
    {path:'/allproduct',element:<Main2></Main2>,children:[
        {path:'/allproduct/laptop',element:<AllLaptop></AllLaptop>},
        {path:'/allproduct/mobile',element:<AllMobile></AllMobile>}
    ]}
])



export default  router;