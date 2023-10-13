import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyBuyThis = () => {
    useEffect(()=>{
        AOS.init({duration:'1000'});

    },[])
    return (
        <div>
            <div className='mt-16 text-2xl lg:ml-32 md:ml-32 ml-7 mb-4'>
                
                <h1>WHY CHOOSE THE  <span className='text-yellow-500'>MUNTAJAT.COM PRODUCTS?</span></h1>
                <div className='divider w-32 bg-yellow-500 h-1'></div>
            </div>
            <div>
            <div className="hero mb-16">
  <div className="hero-content flex-col lg:flex-row-reverse"  data-aos="fade-left">
    <img src="https://securityintelligence.com/wp-content/uploads/2019/04/external_mobile-security-versus-desktop-and-laptop-security-is-there-even-a-difference-anymore.jpg" className="lg:h-96 w-full  rounded-lg shadow-2xl" alt='' />
    <div data-aos="fade-right">
      <h1 className="text-4xl font-bold">This site has some unique features!</h1>
      <p className="py-6">Technology products like laptops mobiles etc are available here.The products of this site are delivered anywhere in the country within 7 to 10 days And 24-hour service is provided to customers</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
            </div>
            
        </div>
    );
};

export default WhyBuyThis;