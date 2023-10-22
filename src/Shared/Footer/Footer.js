import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-slate-500 text-base-content">
  <aside>
    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"></svg>
    <p className='text-white'>Muntajat.Com.<br/>Providing reliable tech since 2009</p>
  </aside> 
  <nav>
    <header className="footer-title text-white">Services</header> 
    <a className="link link-hover text-white">Laptop</a> 
    <a className="link link-hover text-white">Mobile</a> 
    <a className="link link-hover text-white">Tablet</a> 
    
  </nav> 
  <nav>
    <header className="footer-title text-white">Company</header> 
    <a className="link link-hover text-white">About us</a> 
    <a className="link link-hover text-white">Contact</a> 
    <a className="link link-hover text-white">Jobs</a> 
    <a className="link link-hover text-white">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title  text-white">Legal</header> 
    <a className="link link-hover text-white">Terms of use</a> 
    <a className="link link-hover text-white">Privacy policy</a> 
    <a className="link link-hover text-white">Cookie policy</a>
  </nav>
</footer>
            
        </div>
    );
};

export default Footer;