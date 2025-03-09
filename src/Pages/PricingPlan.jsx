import React from 'react';

const PricingPlan = () => {
    return (
        <div className=' bg-[#131619] text-white'>
            <div className='w-9/12 mx-auto pb-16'>
                <h1 className='uppercase text-4xl font-bold text-center py-10'>
                    Choose your plan
                </h1>
            <div className="card-container grid grid-cols-3 gap-5">
            <div className="card bg-[#1E2029] shadow-sm">
  <div className="card-body">

    <div className="flex flex-col text-white gap-3 text-center">
      <h2 className="text-3xl font-bold uppercase">Monthly</h2>
      <span className="text-xl">$9.99/mo</span>
      <button className='uppercase bg-red-600 btn btn-ghost'>Start Your Free Trail</button>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>30,000+ comics accessible anytime, anywhere</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>New comics available as soon as 3 months after they hit shelves</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Read on iPhone®, iPad®, Android™ devices and web</span>
      </li>
    </ul>
  </div>
</div>
<div className="card bg-[#1E2029] shadow-sm">
  <div className="card-body">
    <div className="flex flex-col text-white gap-3 text-center">
      <h2 className="text-3xl font-bold uppercase">annual</h2>
      <span className="text-xl">$69.99/mo</span>
      <button className='uppercase bg-red-600 btn btn-ghost'>Start Your Free Trail</button>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>30,000+ comics accessible anytime, anywhere</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>New comics available as soon as 3 months after they hit shelves</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Read on iPhone®, iPad®, Android™ devices and web</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>$50 Savings</span>
      </li>
    </ul>
  </div>
</div>
<div className="card bg-[#1E2029] shadow-sm">
  <div className="card-body">
    <div className="flex flex-col text-white gap-3 text-center">
      <h2 className="text-3xl font-bold uppercase">annual plus</h2>
      <span className="text-xl">$99.99/mo</span>
      <button className='uppercase bg-red-600 btn btn-ghost'>Start Your Free Trail</button>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Everything you get with Monthly Plan</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Exclusive Membership Kit</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Invites and Access to Marvel Events!**</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>10% Off Marvel Merchandise + More at DisneyStore.com**</span>
      </li>
    </ul>
  </div>
</div>
            </div>
                
            </div>
        </div>
    );
};

export default PricingPlan;