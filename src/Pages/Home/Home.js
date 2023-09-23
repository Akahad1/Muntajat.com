import React from 'react';
import Banner from '../Banner/Banner';
import WhyBuyThis from '../WhyBuyThis/WhyBuyThis';
import CounterSection from '../CounterSection/CounterSection';
import Section from '../Section/Section';
import Sponsorer from '../Sponsorer/Sponsorer';
import HowToOrder from '../HowToOrder/HowToOrder';
import HomeAllProduct from '../HomeAllProduct/HomeAllProduct';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <div data-aos="fade-right">
            
            </div>
           
            <Banner></Banner>
            <div>

            </div>
            <HomeAllProduct></HomeAllProduct>
            
            <WhyBuyThis></WhyBuyThis>
            <CounterSection></CounterSection>
            <Section></Section>
            <Sponsorer></Sponsorer>
            <HowToOrder></HowToOrder>
            
            
        </div>
    );
};

export default Home;