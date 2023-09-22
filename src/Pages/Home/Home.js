import React from 'react';
import Banner from '../Banner/Banner';
import HomeLaptop from '../HomeLaptop/HomeLaptop';
import HomeMobile from '../HomeMobile/HomeMobile';
import HomeTab from '../HomeTab/HomeTab';
import WhyBuyThis from '../WhyBuyThis/WhyBuyThis';
import CounterSection from '../CounterSection/CounterSection';
import Section from '../Section/Section';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <div data-aos="fade-right">
            
            </div>
           
            <Banner></Banner>
            <div>

            </div>
            <HomeLaptop></HomeLaptop>
            <HomeMobile></HomeMobile>
            <HomeTab></HomeTab>
            <WhyBuyThis></WhyBuyThis>
            <CounterSection></CounterSection>
            <Section></Section>
            
            
        </div>
    );
};

export default Home;