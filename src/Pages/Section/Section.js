import React, { useEffect } from 'react';
import section from './Section.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section = () => {
  useEffect(()=>{
    AOS.init({duration:'1000'});

},[])
    return (
        <div className='bg-base-200 p-10 mb-16'>
            <div>
                <p className='mt-10 text-2xl  lg:ml-10 md:ml-1 ml-7 mb-6'>DIFFRENT TYPE PRODUCRS OF OUR SITE</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 '>

              {/* 1st cols */}

              <div className='grid grid-cols-1 mb-1 lg:ml-10 bg-white' data-aos="flip-left">

              <div className="carousel lg:h-96   w-full mt-16">
  <div id="item1" className="carousel-item w-full">
    <img src="https://m.media-amazon.com/images/I/71p-M3sPhhL.jpg" className="w-full" alt='' />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1687941482994/894efb5ca153f54f35f30380849de8a5.png" className="w-full" alt='' />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8NTU3MDEwfGltYWdlL3BuZ3xoZmIvaDhmLzEzNzMyMjM5MDE1OTY2LmpwZ3w4ZTM1ZWVhYmYyOGU0MjY1NTUxNmJmMjEzYjlhZmUzZTBlMmNhNGUzZjQ0MDk0ODlhNDFjZGRkMGY3OTRmNTYw" className="w-full" alt='' />
  </div> 
  
</div> 
<div className="flex justify-center w-full py-2 gap-2  ">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  
</div>
              </div>



              {/* 2st cols */}
              <div className=' bg-white lg:ml-5 md:ml-2 md:mr-0 lg:mr-5  ' data-aos="flip-up"> 
                <p className='text-xl ml-4 mt-4'>PRODUCTS ADDED TODAY</p>
                <div className='divider w-32 bg-yellow-500 h-1 ml-4'></div>
              <div className='grid grid-cols-2 '>
                
                <div className='grid grid-cols-1 lg:h-96  mt-16 mb-16'>
                  <img src="https://www.vibegaming.com.bd/wp-content/uploads/2021/10/xiaomi_mi_curved_gaming_monitor_34_02_ad_l.jpgf_.jpg" alt="" />
                  <img className='lg:h-40 md:h-32 h-20 ml-6' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHAAF322LvW_1TR9XWrTzfIlLZrvvF6iciQ&usqp=CAU" alt="" />

                </div>
                <div className='grid grid-cols-1 mt-16 mb-16'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOu7IBxrMGgAJHP1Dvhujtm9VJTFVHul9Iaw&usqp=CAU" alt="" />
                  <img  src="https://www.ihp.com.bd/wp-content/uploads/2021/09/L8050-5.jpg"  alt="" />

                </div>


              </div>

              </div>

              


              {/* 3rd cols */}


              <div className='bg-white lg:mt-0 md:mt-0 mt-10 lg:h-full' data-aos="flip-right">
              <div className='grid grid-cols-1 m  bg-white mt-16 mb-16'>
              <div className="card card-side border ml-2 mr-2 border-gray-800 mb-5">
  <figure><img className='h-36 ml-5 ' src="https://www.cloud.ryanscomputers.com/cdn/products/main/havit-kb380l-rgb-wired-black-gaming-keyboard-11661064845.webp" alt="Movie"/></figure>
  <div className="card-body mt-6 text-xl">
    
    <p> Our site lowest prices  </p>
    
  </div>
</div>

              </div>
              <div className='grid grid-cols-2'>
                <img src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1687941482994/894efb5ca153f54f35f30380849de8a5.png" alt="" />
                <div>
                <img src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1687941482994/894efb5ca153f54f35f30380849de8a5.png" alt="" />

                </div>
              </div>

              </div>
              
              
            </div>
            


            
        </div>
    );
};

export default Section;