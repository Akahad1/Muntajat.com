import React, { useContext, useEffect, useState } from 'react';
import LaptopBanner from './LaptopBanner';
import SideNaver from './SideNavber/SideNaver';
import Cartlaptops from './Cartlaptops';
import sidenaver from './SideNavber/SideNaver.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { BsLayoutTextSidebar } from 'react-icons/bs';
import toast, { Toaster } from 'react-hot-toast';
import Spanner from '../../Hooks/Progress/Spanner';
import useTitle from '../../Hooks/useTitle';

const AllLaptop = () => {
    const {SetAddCatagory,AddCatagory}=useContext(AuthContext)
    const [Laptops,setLaptops]=useState([])
    const [specificLaptop,setspecificLaptop]=useState([])
    const [sort,setSort]=useState('')
    const [laptopLoding,setLaptopsLoading]=useState(true)
    useTitle("AllLaptop")
    

  const {name,price,SellerName,category,ratings,img}=specificLaptop;
  const {user}=useContext(AuthContext)
    
    useEffect(()=>{
     fetch(`https://muntajat-com-server-cve15m39y-akahad1.vercel.app/catagoryproduct?catagory=${AddCatagory}&sorting=${sort}`)
     .then(res=>res.json())
     .then(data=>{setLaptops(data)
        setLaptopsLoading(false)
    })
    },[AddCatagory,sort])

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
     console.log('hi')
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
             
          
         
          
             
          }
      })

  }

    const sorthandler=(event)=>{
        
        const sort=event.target.value;
        setSort(sort)
        
        console.log(sort)

    }

    
    const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  

  const errorHandler=()=> toast.error("Please Sing Up And Add Order")

 
  

      if(laptopLoding){
        return <Spanner></Spanner>
      }
    return (
        <div className=' mb-16'>
            <LaptopBanner></LaptopBanner>
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
            <div className="form-control">
  
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
                
            </div>
            <div className='divider h-1 bg-yellow-500  lg:w-40 md:w-24  lg:ml-10 md:ml-4 w-20 ml-3

            
            '></div>
            
            
            <div className='grid grid-cols-12 gap-4 mt-16'>
                <div className='lg:col-span-2  bg-base-200 lg:block md:hidden hidden'>
                    <div>
                        <h1  className='text-2xl ml-2 p-3'>ALL CATAGORY PRODUCT</h1>
                        <div>
                            <p onClick={()=>SetAddCatagory('Laptop')}  className='mt-2 text-xl ml-2 p-3'> <Link to='/allproduct/laptop'>All Laptop</Link></p>
                            
                            <p onClick={()=>SetAddCatagory('Mobile')} className='mt-2 text-xl ml-2 p-3' ><Link to='/allproduct/tab'> All Tab</Link></p>
                            <p onClick={()=>SetAddCatagory('Tablet')} className='mt-2 text-xl p-3'><Link to='/allproduct/mobile' >All Mobile</Link></p>
                        </div>
                       
                        
                    </div>

                </div>
                <Toaster />
                <div className='lg:col-span-10 md:col-span-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 col-span-12 lg:ml-0 md:ml-0 ml-2 justify-center  md:mr-6 mr-0'>
                    {Laptops.map(laptop=><Cartlaptops
                    laptop={laptop}
                    key={laptop._id}
                    setspecificLaptop={setspecificLaptop}
                    addOrderHandler={addOrderHandler}
                    errorHandler={errorHandler}

                    ></Cartlaptops>)}
                </div>
               
            </div>
        </div>
    );
};

export default AllLaptop;