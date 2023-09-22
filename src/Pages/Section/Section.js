import React from 'react';
import section from './Section.css'

const Section = () => {
    return (
        <div className='bg-base-200 p-10'>
            <div>
                <p className='mt-10 text-2xl lg:ml-32 md:ml-32 ml-7 mb-4'>Diffrent Type  products of our site</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center'>
              <div className='grid grid-cols-1 ml-10 bg-white'>

              <div className="carousel lg:h-96  w-full mt-16">
  <div id="item1" className="carousel-item w-full">
    <img src="https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg" className="w-full" alt='' />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1687941482994/894efb5ca153f54f35f30380849de8a5.png" className="w-full" alt='' />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://www.lenovo.com/medias/?context=bWFzdGVyfHJvb3R8NTU3MDEwfGltYWdlL3BuZ3xoZmIvaDhmLzEzNzMyMjM5MDE1OTY2LmpwZ3w4ZTM1ZWVhYmYyOGU0MjY1NTUxNmJmMjEzYjlhZmUzZTBlMmNhNGUzZjQ0MDk0ODlhNDFjZGRkMGY3OTRmNTYw" className="w-full" alt='' />
  </div> 
  
</div> 
<div className="flex justify-center w-full py-2 gap-2  mb-16">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  
</div>
              </div>
              <div className='grid grid-cols-2  bg-white ml-5 mr-5  '>
                <div className='grid grid-cols-1 lg:h-96  mt-16 mb-16'>
                  <img src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1687941482994/894efb5ca153f54f35f30380849de8a5.png" alt="" />
                  <img src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1687941482994/894efb5ca153f54f35f30380849de8a5.png" alt="" />

                </div>
                <div className='grid grid-cols-1 mt-16 mb-16'>
                  <img src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1687941482994/894efb5ca153f54f35f30380849de8a5.png" alt="" />
                  <img src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1687941482994/894efb5ca153f54f35f30380849de8a5.png" alt="" />

                </div>


              </div>
              <div className='bg-white'>
              <div className='grid grid-cols-1  bg-white mt-16 mb-16'>
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