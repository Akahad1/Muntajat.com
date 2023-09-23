import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { TbDiscountCheck } from 'react-icons/tb';
import { GrUserManager } from 'react-icons/gr';
import { FaAmazonPay } from 'react-icons/fa';

const HowToOrder = () => {
    const [Togol,setTogol]=useState('Search')
    console.log(Togol)
    
    return (
        <div>
            <div>
                <p className='text-3xl ml-10 '>
                    Streamline ordering from search to fulfillment, all in one place</p>
            </div>
            <div className="card lg:card-side mt-16 mb-20 lg:mr-14">
  
  <div className="card-body" >
    {/* 1st section */}
    <div className='mb-10' onMouseMove={()=>setTogol('Search')} >
    <p > <BsSearch  className={Togol==="Search"?'inline mr-3 h-14 w-14 bg-red-400 p-2 rounded-full' :'inline mr-3 h-10 w-8' }/>

    <span  className={Togol=== "Search"? 'lg:text-4xl  md:text-4xl text-2xl ':'text-2xl '}>Search for matches</span></p>
    
   
    <p className={Togol==='Search'? 'ml-10 mb-5 flex lg:w-96':'ml-10 mb-5 lg:w-96 hidden'}>Search and filter from millions of product and supplier offerings to find the matching ones for your business.</p>
    </div>


    {/* 2nd section */}
    <div className='mb-10' onMouseMove={()=>setTogol('Identify')}>
    <p className=' hover:bg-white'> <TbDiscountCheck  className={Togol==="Identify"?'inline mr-3 h-14 w-14 bg-red-400 p-2 rounded-full' :'inline mr-3 h-10 w-8' } />
    <span   className={Togol=== "Identify"? 'lg:text-4xl  md:text-4xl text-2xl mb-0 ':'text-2xl '}>Identify the right one</span></p>
    
   
    <p className={Togol==='Identify'? 'ml-10 mb-5 flex lg:w-96':'ml-10 mb-5 lg:w-96 hidden'} >Evaluate product quality and supplier capabilities easily and efficiently through verified inspections and digital sourcing tools.</p>
    </div>
    {/* 3nd section */}

    <div className='mb-10'  onMouseMove={()=>setTogol('Pay')}>
    <p className=' hover:bg-white'> <FaAmazonPay  className={Togol==="Pay"?'inline mr-3 h-14 w-14 bg-red-400 p-2 rounded-full' :'inline mr-3 h-10 w-8' } />
    <span   className={Togol=== "Pay"? 'lg:text-4xl  md:text-4xl text-2xl ':'text-2xl '}>Pay with confidence</span></p>
    
   
    <p className={Togol==='Pay'? 'ml-10 mb-5 flex lg:w-96':'ml-10 mb-5 lg:w-96 hidden'}>Pay for your order in over 20 currencies via 20+ secure payment methods, including flexible payment terms.</p>
    </div>
    {/* 4nd section */}

    <div  onMouseMove={()=>setTogol('Manage')}>
    <p className=' hover:bg-white'> <GrUserManager  className={Togol==="Manage"?'inline mr-3 h-14 w-14 bg-red-400 p-2 rounded-full' :'inline mr-3 h-10 w-8' }/>
    <span   className={Togol=== "Manage"? 'lg:text-4xl  md:text-4xl text-2xl ':'text-2xl '}>Manage with ease</span></p>
    
   
    <p className={Togol==='Manage'? 'ml-10 mb-5 flex lg:w-96':'ml-10 mb-5 lg:w-96 hidden'}>Check order status, manage suppliers, track payments and shipments, and contact after-sales support all via My Alibaba..</p>
    </div>
    
   
  </div>
  <div >
    {Togol ==='Search'?<figure><img className='lg:mt-24' src="https://www.bedfed.org.uk/wp-content/uploads/search-components.png" alt="Movie"/></figure>:''}
    {Togol ==='Identify'?<figure><img className='lg:mt-24 lg:h-96 rounded-2xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ4knD3rByj6dzAF_D6rTgeq34ZbkF36sHxQ&usqp=CAU" alt="Movie"/></figure>:''}
    {Togol ==='Pay'?<figure><img className='lg:mt-24 lg:h-96 rounded-2xl' src="https://www.investopedia.com/thmb/5JTGFd4sQQhIDJWd8KdkGXN_ySI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/payment-gateway.asp-final-2987d839b42f4b3ba069f532faa366df.png" alt="Movie"/></figure>:''}
    {Togol ==='Manage'?<figure><img className='lg:mt-24 lg:h-96 rounded-2xl' src="https://management30.com/wp-content/uploads/2022/03/agile-leadership-training-workshop.png" alt="Movie"/></figure>:''}
  
  </div>
</div>
            
        </div>
    );
};

export default HowToOrder;