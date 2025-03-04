import React, { useEffect, useState } from 'react';
import Magnet from './../../UI/Magnet';
import { Link } from 'react-router-dom';
import { RiArrowDownSLine } from '@remixicon/react';

const Nav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='fixed z-50 w-full px-14 h-[10vh] max-[600px]:px-5 bg-zinc-900 flex justify-between items-center'>
      <div className="logo w-40">
        <img className='w-full h-full object-cover' src="/images/Home/logo.png" alt="Logo" />
      </div>
      <div className="nav-links relative h-full max-[600px]:hidden">
        <ul className='flex gap-10 text-white text-base items-center h-full font-medium'>
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='flex items-center cursor-pointer h-full relative dropdown'
          >
            Benefits
            <RiArrowDownSLine
              className={`ml-1 ${dropdownOpen ? "-rotate-180" : "rotate-0"} duration-300`}
            />
            {dropdownOpen && (
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="absolute z-[99] flex flex-col top-[70px] -left-10 w-fit bg-white text-black border border-gray-200 shadow-lg font-normal text-sm"
              >
                <Link to="/weekly-meetups" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                  <img className='w-[15%]' src="/images/Home/nav/gmeet.png" alt="Weekly Meetups" />
                  <p className='whitespace-nowrap'>Weekly Meetups</p>
                </Link>
                <Link to="/investor-circle" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                  <img className='w-[15%]' src="/images/Home/nav/dollar.png" alt="Investor Circle" />
                  <p className='whitespace-nowrap'>Investor Circle</p>
                </Link>
                <Link to="/expert-connect" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                  <img className='w-[15%]' src="/images/Home/nav/expert.png" alt="Expert Connect" />
                  <p className='whitespace-nowrap'>Expert Connect</p>
                </Link>
                <Link to="/partner-benefits" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                  <img className='w-[15%]' src="/images/Home/nav/partner.png" alt="Partner Benefits" />
                  <p className='whitespace-nowrap'>Partner Benefits</p>
                </Link>
                <Link to="/fwc-atithi" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                  <img className='w-[15%]' src="/images/Home/nav/athiti.png" alt="FWC Atithi" />
                  <p className='whitespace-nowrap'>FWC Atithi</p>
                </Link>
                <Link to="/exclusive-masterclass" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                  <img className='w-[15%]' src="/images/Home/nav/masterclass.png" alt="Exclusive Masterclass" />
                  <p className='whitespace-nowrap'>Exclusive Masterclass</p>
                </Link>
                <Link to="/resource-library" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                  <img className='w-[15%]' src="/images/Home/nav/library.png" alt="Resource Library" />
                  <p className='whitespace-nowrap'>Resource Library</p>
                </Link>
                <Link to="/zoom-premium" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                  <img className='w-[15%]' src="/images/Home/nav/zoom.png" alt="Zoom Premium" />
                  <p className='whitespace-nowrap'>Zoom Premium</p>
                </Link>
                <Link to="/spotlight-boost" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                  <img className='w-[15%]' src="/images/Home/nav/spotlight.png" alt="Spotlight Boost" />
                  <p className='whitespace-nowrap'>Spotlight Boost</p>
                </Link>
              </div>
            )}
          </li>
          <li className='cursor-pointer'>Events</li>
          <li className='cursor-pointer'>FWC Stories</li>
          <li className='cursor-pointer'>Vertices</li>
          <li className='cursor-pointer'>About FWC</li>
        </ul>
      </div>
      <div className="login-signup-btn space-x-4 max-[600px]:hidden">
        <Magnet padding={50} disabled={false} magnetStrength={5}>
          <Link to={'/Signup'} className="bg-white border-2 border-white text-black py-0.5 px-5 text-lg font-semibold rounded-full cursor-pointer">Get Start</Link>
        </Magnet>
        <Link to={'/login'} className="bg-black border-2 border-white text-white py-0.5 px-5 text-lg font-semibold rounded-full cursor-pointer">Login</Link>
      </div>
      <div className="border-[2px] border-white min-[600px]:hidden rounded-lg p-2">
        <h1 className='text-white min-[600px]:hidden'>
          <Link to={'/login'}>login</Link> / <Link to={'/Signup'}>signup</Link>
        </h1>
      </div>
    </div>
  );
};

export default Nav;