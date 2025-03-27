import React, { useEffect, useState } from 'react';
import Magnet from './../../UI/Magnet';
import { Link } from 'react-router-dom';
import { RiArrowDownSLine } from '@remixicon/react';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser, logoutUser } from '../../store/Actions/userAction';
import { removeUser } from '../../store/Reducers/userSlice';

const Nav = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    benefits: false,
    vertices: false,
    aboutFwc: false,
  });

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);

  const handelLogout = () => {
    dispatch(logoutUser());
  }

  const handleMouseEnter = (menu) => {
    setDropdownOpen((prev) => ({ ...prev, [menu]: true }));
  };

  const handleMouseLeave = (menu) => {
    setDropdownOpen((prev) => ({ ...prev, [menu]: false }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setDropdownOpen({
          benefits: false,
          vertices: false,
          aboutFwc: false,
        });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, []);

  useEffect(() => {
    dispatch(currentUser());
  }, [])


  return (
    <div className='fixed z-50 w-full px-14 h-[10vh] max-[600px]:px-5 bg-zinc-900 flex justify-between items-center'>
      <div className="logo w-40">
        <a href="/">
          <img className='w-full h-full object-cover' src="/images/Home/logo.png" alt="Logo" />
        </a>
      </div>
      <div className="nav-links relative h-full max-[600px]:hidden">
        <ul className='flex gap-10 text-white text-base items-center h-full font-medium'>
          <li
            onMouseEnter={() => handleMouseEnter('benefits')}
            onMouseLeave={() => handleMouseLeave('benefits')}
            className='flex items-center cursor-pointer h-full relative dropdown'
          >
            Benefits
            <RiArrowDownSLine
              className={`ml-1 ${dropdownOpen.benefits ? "-rotate-180" : "rotate-0"} duration-300`}
            />
            {dropdownOpen.benefits && (
              <div
                onMouseEnter={() => handleMouseEnter('benefits')}
                onMouseLeave={() => handleMouseLeave('benefits')}
                className="absolute z-[99] flex flex-col top-[70px] -left-10 w-fit p-4 bg-white text-black border border-gray-200 shadow-lg font-normal text-sm"
              >
                <Link to="/events" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
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
                <a href='/events/#masterclass' className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                  <img className='w-[15%]' src="/images/Home/nav/masterclass.png" alt="Exclusive Masterclass" />
                  <p className='whitespace-nowrap'>Exclusive Masterclass</p>
                </a>
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
          <li className='cursor-pointer'>
            <a href={'/events'}>
              Events
            </a>
          </li>
          <li className='cursor-pointer'>FWC Stories</li>
          <li
            onMouseEnter={() => handleMouseEnter('vertices')}
            onMouseLeave={() => handleMouseLeave('vertices')}
            className='flex items-center cursor-pointer h-full relative dropdown'
          >
            Vertices
            <RiArrowDownSLine
              className={`ml-1 ${dropdownOpen.vertices ? "-rotate-180" : "rotate-0"} duration-300`}
            />
            {dropdownOpen.vertices && (
              <div
                onMouseEnter={() => handleMouseEnter('vertices')}
                onMouseLeave={() => handleMouseLeave('vertices')}
                className="absolute z-[99] flex flex-col top-[70px] -left-10 w-56 p-4 px-0 bg-white text-black border border-gray-200 shadow-lg font-normal text-sm"
              >
                <Link to="/vertices/yuva-shakti-international" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                  <img className='w-[15%]' src="/images/Home/nav/ysint.png" alt="" />
                  <p className='whitespace-nowrap'>Yuva Shakti International</p>
                </Link>
                <Link to="/vertices/thofa" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                  <img className='w-[15%]' src="/images/Home/nav/thofa.png" alt="" />
                  <p className='whitespace-nowrap'>THOFA</p>
                </Link>
                <Link to="/vertex-3" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                  <img className='w-[15%]' src="/images/Home/nav/asthra.png" alt="" />
                  <p className='whitespace-nowrap'>Edu Asthra</p>
                </Link>
                <Link to="/vertices/integrated-ayush" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                  <img className='w-[15%]' src="/images/Home/nav/ayush.png" alt="" />
                  <p className='whitespace-nowrap'>Integrated Ayush</p>
                </Link>
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => handleMouseEnter('aboutFwc')}
            onMouseLeave={() => handleMouseLeave('aboutFwc')}
            className='flex items-center cursor-pointer h-full relative dropdown'
          >
            About FWC
            <RiArrowDownSLine
              className={`ml-1 ${dropdownOpen.aboutFwc ? "-rotate-180" : "rotate-0"} duration-300`}
            />
            {dropdownOpen.aboutFwc && (
              <div
                onMouseEnter={() => handleMouseEnter('aboutFwc')}
                onMouseLeave={() => handleMouseLeave('aboutFwc')}
                className="absolute z-[99] flex flex-col top-[70px]  w-48 p-4 bg-white text-black border border-gray-200 shadow-lg font-normal text-sm"
              >
                <Link to="/about-us" className="flex gap-3 items-center justify-start py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                  <img className='w-[20%]' src="/images/Home/nav/about.png" alt="" />
                  <p className='whitespace-nowrap'>About Us</p>
                </Link>
                <Link to="/our-mission" className="flex gap-3 items-center justify-start py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                  <img className='w-[20%]' src="/images/Home/nav/leadership.png" alt="" />
                  <p className='whitespace-nowrap'>Leadership </p>
                </Link>
                <Link to="/privacy-policy" className="flex gap-3 items-center justify-start py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                  <img className='w-[20%]' src="/images/Home/nav/careers.png" alt="" />
                  <p className='whitespace-nowrap'>Privacy Policy</p>
                </Link>
                <Link to="/our-team" className="flex gap-3 items-center justify-start py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                  <img className='w-[20%]' src="/images/Home/nav/gallery.png" alt="" />
                  <p className='whitespace-nowrap'>Gallery</p>
                </Link>
              </div>
            )}
          </li>
        </ul>
      </div>
      {
        user && user ? (
          <div className="flex items-center gap-4 max-[600px]:hidden">
            <img className='w-10 h-10 object-cover rounded-full' src={user.avatar.url} alt="" />
            <p className='text-white font-semibold'>{user.name}</p>
            <button onClick={handelLogout} className="bg-black border-2 border-white text-white py-0.5 px-5 text-lg font-semibold rounded-full cursor-pointer">Logout</button>
          </div>
        ) : (
          <div className="login-signup-btn space-x-4 max-[600px]:hidden">
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <Link to={'/Signup'} className="bg-white border-2 border-white text-black py-0.5 px-5 text-lg font-semibold rounded-full cursor-pointer">Get Start</Link>
            </Magnet>
            <Link to={'/login'} className="bg-black border-2 border-white text-white py-0.5 px-5 text-lg font-semibold rounded-full cursor-pointer">Login</Link>
          </div>
        )
      }

      {
        user && user ? (
          <button onClick={handelLogout} className="bg-black border-2 border-white text-white py-0.5 px-5 text-lg font-semibold rounded-full cursor-pointer min-[600px]:hidden">Logout</button>
        ) : (
          <div className="border-[2px] border-white min-[600px]:hidden rounded-lg p-2">
            <h1 className='text-white min-[600px]:hidden'>
              <Link to={'/login'}>login</Link> / <Link to={'/Signup'}>signup</Link>
            </h1>
          </div>
        )
      }

    </div>
  );
};

export default Nav;