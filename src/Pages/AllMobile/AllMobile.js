import React from 'react';
import MoblieBanner from './MoblieBanner';
import CartMobile from './CartMobile';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import SideNaver from '../AllLaptop/SideNavber/SideNaver';
import toast, { Toaster } from 'react-hot-toast';
import Spanner from '../../Hooks/Progress/Spanner';
import useTitle from '../../Hooks/useTitle';

const AllMobile = () => {
    const {SetAddCatagory,AddCatagory,user}=useContext(AuthContext)
    const [specificMobile,setspecificMobile]=useState([])
    const {name,price,SellerName,category,ratings,img}=specificMobile;
    const [mobileLoding,setmobilesLoading]=useState(true)
    const [sort,setSort]=useState('')
    useTitle('All Mobile')
  

    const [mobiles,setMobiles]=useState([])
    useEffect(()=>{
     fetch(`https://muntajat-com-server-cve15m39y-akahad1.vercel.app/catagoryproduct?catagory=${AddCatagory}&sorting=${sort}`)
     .then(res=>res.json())
     .then(data=>{setMobiles(data)
        setmobilesLoading(false)
    })
    },[AddCatagory,sort])
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
    const addOrderHandler=()=>{
        const orderProduct={
            name,
            price,
            SellerName,
            category,
            img,
            ratings,
            email:user?.email
        }
  
       console.log(orderProduct)
       
        fetch('https://muntajat-com-server-cve15m39y-akahad1.vercel.app/orders',{
            method:"POST",
            headers:{
                "content-type" : 'application/json'
            },
            body: JSON.stringify(orderProduct)
            
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
               toast.success("Successfully Order Add")
               
            
           
            //    alert('succufully add')
               
            }
        })
  
    }
    const sorthandler=(event)=>{
        
        const sort=event.target.value;
        setSort(sort)
        
        console.log(sort)

    }
    const errorHandler=()=> toast.error("Please Sing Up And Add Order")
    if(mobileLoding){
        return <Spanner></Spanner>
    }
    return (
        <div>
            <MoblieBanner></MoblieBanner>
            <div className='flex justify-between'>
            <div className='lg:hidden inline ml-1 h-10   w-20'>
                {/* <BsLayoutTextSidebar className='inline   w-8'/> */}
            <button className="toggle-button btn-success btn-xs rounded-btn mt-2 mb-2 " onClick={toggleSidebar}>
        {isSidebarOpen ? 'CloseSidebar' : 'ShowSidebar'}
      </button>
      <SideNaver isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <main className="main-content">
        
        
      </main>
            </div>

            <div className='lg:ml-10 md:ml-5 ml-1 '>
                <p className='inline  lg:text-xl'><Link to='/'>Home</Link></p>
                <span className='text-xl'>/</span>
                <p className='inline lg:text-xl ' onClick={()=>SetAddCatagory('Laptop')}  ><Link to='/allproduct/laptop'>Shop</Link></p>
            </div>
            <div>
            <div  className="input-group lg:mr-10 mr-1 md:mr-4">
    <select onChange={sorthandler} name='sort'  className="select select-bordered  md:w-44 lg:w-96   w-32">
      <option  selected>Default sorting</option>
      <option>Sort by price: low to hight </option>
      <option>Sort by price: hight to low </option>
      <option>Sort by name: A to Z </option>
      <option>Sort by name: Z to A </option>
      
    </select>
    
  </div>
            </div>
                
            </div>
            <div className='divider h-1 bg-yellow-500  lg:w-40 md:w-24  lg:ml-10 md:ml-4 w-20 ml-3

            
            '></div>

            <div className='grid grid-cols-12 gap-4 '>
                <div className='lg:col-span-2 lg:mb-12 bg-base-200 lg:block md:hidden hidden'>
                    <div>
                        <h1  className='text-2xl ml-2 p-3'>ALL CATAGORY PRODUCT</h1>
                        <div>
                            <p onClick={()=>SetAddCatagory('Laptop')}  className='mt-2 text-xl ml-2 p-3'> <Link to='/allproduct/laptop'>All Laptop</Link></p>
                            
                            <p onClick={()=>SetAddCatagory('Tablet')} className='mt-2 text-xl ml-2 p-3' ><Link to='/allproduct/tab'> All Tab</Link></p>
                            <p onClick={()=>SetAddCatagory('Mobile')} className='mt-2 text-xl p-3'><Link to='/allproduct/mobile' >All Mobile</Link></p>
                        </div>
                    </div>

                </div>
                <Toaster/>
                <div className='lg:col-span-10 md:col-span-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 col-span-12 lg:ml-0 md:ml-0 ml-2 justify-center  md:mr-6 mr-0 mt-10'>
                    {mobiles.map(mobile=><CartMobile
                    mobile={mobile}
                    key={mobile._id}
                    setspecificMobile={setspecificMobile}
                    addOrderHandler={addOrderHandler}
                    errorHandler={errorHandler}

                    ></CartMobile>)}
                </div>
               
            </div>
            
        </div>
    );
};

export default AllMobile;