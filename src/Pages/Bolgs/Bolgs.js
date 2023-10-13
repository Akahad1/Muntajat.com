import React from 'react';

const Bolgs = () => {
    return (
        <div className='min-h-screen'>
            <div className="collapse  ">
  <input type="radio" name="my-accordion-1" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  What products are available here?
  </div>
  <div className="collapse-content"> 
    <p>Technology products like laptops mobiles etc are available here</p>
  </div>
</div>
<div className="collapse ">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
  How many days will  site product be available and how is its service?
  </div>
  <div className="collapse-content"> 
    <p>The products of this site are delivered anywhere in the country within 7 to 10 days And 24-hour service is provided to customers</p>
  </div>
</div>
<div className="collapse ">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
  If a product on this site is found to be damaged, can it be returned?
  </div>
  <div className="collapse-content"> 
    <p>Yes of course it can be given but if something is damaged by you then it cannot be given if the product is already damaged then the product can be given And bring the memo with you</p>
  </div>
</div>
            
        </div>
    );
};

export default Bolgs;