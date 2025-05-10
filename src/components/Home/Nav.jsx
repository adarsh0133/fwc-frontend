import React, { useEffect, useState } from 'react';
import Magnet from './../../UI/Magnet';
import { Link, useLocation } from 'react-router-dom';
import { RiArrowDownSLine, RiArrowDropRightLine, RiCloseLine, RiLoginBoxLine, RiMenu2Line } from '@remixicon/react';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser, logoutUser } from '../../store/Actions/userAction';
import { removeUser } from '../../store/Reducers/userSlice';
import { motion } from 'framer-motion';

const Nav = () => {
  const { isAuth } = useSelector((state) => state.user);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobiledrop, setmobiledrop] = useState("none")
  const [dropdownOpen, setDropdownOpen] = useState({
    benefits: false,
    verticles: false,
    aboutFwc: false,
  });

    const location = useLocation();
    const isHomePage = location.pathname === '/';
  
    const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
      if (!isHomePage) return;
  
      const handleScroll = () => {
        setIsSticky(window.scrollY > 65);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [isHomePage]);

  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);

  const handelLogout = () => {
    dispatch(logoutUser());
  }
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMouseEnter = (menu) => {
    setDropdownOpen((prev) => ({ ...prev, [menu]: true }));
  };

  const handleMouseLeave = (menu) => {
    setDropdownOpen((prev) => ({ ...prev, [menu]: false }));
  };
  const handleDropdown = (menu) => {
    setmobiledrop((prev) => (prev === menu ? "none" : menu));
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setDropdownOpen({
          benefits: false,
          verticles: false,
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
    <>
      <div className={`w-full lg:px-4 xl:px-10 h-[10vh] hidden lg:flex justify-between items-center bg-white z-50 transition-all duration-300 ${isSticky ? 'fixed top-0 shadow-md' : 'relative'}`}>

        <div className="logo w-20 h-full overflow-hidden ">
          <a href="/" className='w-full h-full center'>
            <img className='w-full h-full object-cover' src="/images/Home/logo.jpg" alt="Logo" />
          </a>
        </div>
        <div className="nav-links relative h-full max-[600px]:hidden">
          <ul className='flex gap-10 text-base items-center h-full font-medium text-zinc-700'>
            <li
              onMouseEnter={() => handleMouseEnter('benefits')}
              onMouseLeave={() => handleMouseLeave('benefits')}
              className='flex items-center cursor-pointer h-full relative dropdown hover:text-[#2965FF]'
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
                  <a href="/events" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                    <img className='w-[15%]' src="/images/Home/nav/gmeet.png" alt="Weekly Meetups" />
                    <p className='whitespace-nowrap'>Weekly Meetups</p>
                  </a>
                  <Link to="/investor-circle" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                    <img className='w-[15%]' src="/images/Home/nav/dollar.png" alt="Investor Circle" />
                    <p className='whitespace-nowrap'>Investor Circle</p>
                  </Link>
                  <a href="/expert-connect" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                    <img className='w-[15%]' src="/images/Home/nav/expert.png" alt="Expert Connect" />
                    <p className='whitespace-nowrap'>Expert Connect</p>
                  </a>
                  <a href="/partner-benefits" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                    <img className='w-[15%]' src="/images/Home/nav/partner.png" alt="Partner Benefits" />
                    <p className='whitespace-nowrap'>Partner Benefits</p>
                  </a>
                  <a href="/fwc-atithi" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                    <img className='w-[15%]' src="/images/Home/nav/athiti.png" alt="FWC Atithi" />
                    <p className='whitespace-nowrap'>FWC Atithi</p>
                  </a>
                  <a href='/events/#masterclass' className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                    <img className='w-[15%]' src="/images/Home/nav/masterclass.png" alt="Exclusive Masterclass" />
                    <p className='whitespace-nowrap'>Exclusive Masterclass</p>
                  </a>
                  <a href="/resource-library" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                    <img className='w-[15%]' src="/images/Home/nav/library.png" alt="Resource Library" />
                    <p className='whitespace-nowrap'>Resource Library</p>
                  </a>
                  <a href="/event-organiser" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                    <img className='w-[15%]' src="/images/Home/nav/zoom.png" alt="Zoom Premium" />
                    <p className='whitespace-nowrap'>Event Organiser</p>
                  </a>
                  <a href="/spotlight-boost" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                    <img className='w-[15%]' src="/images/Home/nav/spotlight.png" alt="Spotlight Boost" />
                    <p className='whitespace-nowrap'>Spotlight Boost</p>
                  </a>
                </div>
              )}
            </li>
            <li className='cursor-pointer hover:text-[#2965FF]'>
              <a href={'/events'}>
                Events
              </a>
            </li>
            <li className='cursor-pointer hover:text-[#2965FF]'>
              <a href="/fwc-stories">
                FWC Stories
              </a>
            </li>
            <li
              onMouseEnter={() => handleMouseEnter('verticles')}
              onMouseLeave={() => handleMouseLeave('verticles')}
              className='flex items-center cursor-pointer h-full relative dropdown hover:text-[#2965FF]'
            >
              Verticles
              <RiArrowDownSLine
                className={`ml-1 ${dropdownOpen.verticles ? "-rotate-180" : "rotate-0"} duration-300`}
              />
              {dropdownOpen.verticles && (
                <div
                  onMouseEnter={() => handleMouseEnter('verticles')}
                  onMouseLeave={() => handleMouseLeave('verticles')}
                  className="absolute z-[99] flex flex-col top-[70px] -left-10 w-56 p-4 px-0 bg-white text-black border border-gray-200 shadow-lg font-normal text-sm"
                >
                  <a href="/verticles/yuva-shakti-international" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                    <img className='w-[15%]' src="/images/Home/nav/ysint.png" alt="" />
                    <p className='whitespace-nowrap'>Yuva Shakti International</p>
                  </a>
                  <a href="/verticles/nari-shakti" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                    <img className='w-[15%]' src="/images/Home/nav/nariShakti.png" alt="" />
                    <p className='whitespace-nowrap'>Nari Shakti</p>
                  </a>
                  <a href="/verticles/thofa" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                    <img className='w-[15%]' src="/images/Home/nav/thofa.png" alt="" />
                    <p className='whitespace-nowrap'>THOFA</p>
                  </a>
                  <a href="/verticles/edu-astra" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                    <img className='w-[15%]' src="/images/Home/nav/asthra.png" alt="" />
                    <p className='whitespace-nowrap'>Edu Asthra</p>
                  </a>
                  <a href="/verticles/integrated-ayush" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                    <img className='w-[15%]' src="/images/Home/nav/ayush.png" alt="" />
                    <p className='whitespace-nowrap'>Integrated Ayush</p>
                  </a>
                </div>
              )}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter('aboutFwc')}
              onMouseLeave={() => handleMouseLeave('aboutFwc')}
              className='flex items-center cursor-pointer h-full relative dropdown hover:text-[#2965FF]'
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
                  <a href="/about-us" className="flex gap-3 items-center justify-start py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                    <img className='w-[20%]' src="/images/Home/nav/about.png" alt="" />
                    <p className='whitespace-nowrap'>About Us</p>
                  </a>
                  <a href="/leadership" className="flex gap-3 items-center justify-start py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                    <img className='w-[20%]' src="/images/Home/nav/leadership.png" alt="" />
                    <p className='whitespace-nowrap'>Leadership </p>
                  </a>
                  <a href="/privacy-policy" className="flex gap-3 items-center justify-start py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                    <img className='w-[20%]' src="/images/Home/nav/careers.png" alt="" />
                    <p className='whitespace-nowrap'>Privacy Policy</p>
                  </a>
                  <a href="/our-team" className="flex gap-3 items-center justify-start py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                    <img className='w-[20%]' src="/images/Home/nav/gallery.png" alt="" />
                    <p className='whitespace-nowrap'>Gallery</p>
                  </a>
                </div>
              )}
            </li>
            {/* <li className='cursor-pointer'>
              <a href="/privacy-policy">
              Privacy Policy
              </a>
            </li> */}
          </ul>
        </div>
        {
          user && user ? (
            <div className="flex items-center gap-4 max-[600px]:hidden">
              <img className='w-10 h-10 object-cover rounded-full' src={user.avatar.url} alt="" />
              <p className='hover:text-[#2965FF] font-semibold'>{user.name}</p>
              <button onClick={handelLogout} className="border-2 border-black hover:text-white hover:bg-[#2965FF] hover:border-white py-0.5 px-5 text-lg font-semibold rounded-full cursor-pointer">Logout</button>
            </div>
          ) : (
            <div className="login-signup-btn space-x-4 max-[600px]:hidden">
              <Link to={'/Signup'} className="bg-[#2965FF] border-2 border-[#2965FF] text-white px-6 py-2 text-lg font-semibold rounded-full cursor-pointer">Get Start</Link>
              <Link to={'/login'} className="border-2 border-zinc-700 text-zinc-700 px-6 py-2 text-lg font-semibold rounded-full cursor-pointer">Login</Link>
            </div>
          )
        }
      </div>

      <div className=" fixed z-50 w-full flex items-center justify-between lg:hidden h-[10vh] bg-zinc-900 ">
        <div className="logo w-[30%] md:w-[10%] center  h-full overflow-hidden">
          <a className='w-full h-full center' href="/">
            <img className='w-[60%]' src="/images/Home/logo.jpg" alt="Logo" />
          </a>
        </div>
        <div onClick={toggleMenu} className="w-[14%] h-full hover:text-[#2965FF] center">
          <RiMenu2Line color='white' />
        </div>
      </div>

      <div
        className={`w-full h-fit pb-10 fixed top-0 left-0 z-[9999] lg:hidden transition-transform duration-500 bg-zinc-900 shadow-md rounded-md ${menuOpen ? "translate-y-0" : "-translate-y-full"
          } text-white`}
      >
        <div className="w-full flex items-center justify-between p-5">
          <a className="w-[15%] max-[600px]:w-[30%] center" href="/">
            <img className="w-full" src="/Images/home/CTSLogo.png" alt="" />
          </a>
          <RiCloseLine className="scale-150" onClick={toggleMenu} />
        </div>
        <div className="pl-10 flex-col capitalize text-lg font-normal flex gap-3">
          <div className="w-full">
            <div onClick={() => handleDropdown("benefit")} className="w-fit flex items-center gap-2 h-fit cursor-pointer">
              <p>Benefits</p>
              <RiArrowDownSLine className={`w-5 h-5 transition-transform duration-300 ${mobiledrop === "benefit" ? "rotate-180" : "rotate-0"}`} />
            </div>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: mobiledrop === "benefit" ? "auto" : 0 }}
              transition={{ duration: .3, ease: "easeInOut" }}
              className="w-full  overflow-hidden"
            >
              <a href="/events" className="flex   items-center px-2 py-1 cursor-pointer text-sm opacity-70  hover:bg-gray-200">
                <RiArrowDropRightLine size={20} />
                <p className='whitespace-nowrap'>Weekly Meetups</p>
              </a>
              <a href="/investor-circle" className="flex   items-center px-2 py-1 cursor-pointer text-sm opacity-70   hover:bg-gray-200">
                <RiArrowDropRightLine size={20} />
                <p className='whitespace-nowrap'>Investor Circle</p>
              </a>
              <a href="/expert-connect" className="flex   items-center px-2 py-1 cursor-pointer text-sm opacity-70  hover:bg-gray-200">
                <RiArrowDropRightLine size={20} />
                <p className='whitespace-nowrap'>Expert Connect</p>
              </a>
              <a href="/partner-benefits" className="flex   items-center px-2 py-1 cursor-pointer text-sm opacity-70  hover:bg-gray-200">
                <RiArrowDropRightLine size={20} />
                <p className='whitespace-nowrap'>Partner Benefits</p>
              </a>
              <a href="/fwc-atithi" className="flex   items-center px-2 py-1 cursor-pointer text-sm opacity-70  hover:bg-gray-200">
                <RiArrowDropRightLine size={20} />
                <p className='whitespace-nowrap'>FWC Atithi</p>
              </a>
              <a href='/events/#masterclass' className="flex   items-center px-2 py-1 cursor-pointer text-sm opacity-70   hover:bg-gray-200">
                <RiArrowDropRightLine size={20} />
                <p className='whitespace-nowrap'>Exclusive Masterclass</p>
              </a>
              <a href="/resource-library" className="flex   items-center px-2 py-1 cursor-pointer text-sm opacity-70  hover:bg-gray-200">
                <RiArrowDropRightLine size={20} />
                <p className='whitespace-nowrap'>Resource Library</p>
              </a>
              <a href="/event-organiser" className="flex   items-center px-2 py-1 cursor-pointer text-sm opacity-70  hover:bg-gray-200">
                <RiArrowDropRightLine size={20} />
                <p className='whitespace-nowrap'>Event Organiser</p>
              </a>
              <a href="/spotlight-boost" className="flex   items-center px-2 py-1 cursor-pointer text-sm opacity-70   hover:bg-gray-200">
                <RiArrowDropRightLine size={20} />
                <p className='whitespace-nowrap'>Spotlight Boost</p>
              </a>
            </motion.div>
          </div>
          <div className="w-full">
            <a href={'/events'} className='w-fit flex items-center gap-2 h-fit cursor-pointer'>
              Events
            </a>
          </div>
          <div className="w-full">
            <a href={'/fwc-stories'} className='w-fit flex items-center gap-2 h-fit cursor-pointer'>
              FWC Stories
            </a>
          </div>
          <div className="w-full">
            <div onClick={() => handleDropdown("verticles")} className="w-fit flex items-center gap-2 h-fit cursor-pointer">
              <p>verticles</p>
              <RiArrowDownSLine className={`w-5 h-5 transition-transform duration-300 ${mobiledrop === "verticles" ? "rotate-180" : "rotate-0"}`} />
            </div>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: mobiledrop === "verticles" ? "auto" : 0 }}
              transition={{ duration: .3, ease: "easeInOut" }}
              className="w-full  overflow-hidden"
            >
              <a href="/verticles/yuva-shakti-international" className="flex   items-center px-2 py-1 cursor-pointer text-sm opacity-70  hover:bg-gray-200">
                <RiArrowDropRightLine size={20} />
                <p className='whitespace-nowrap'>Yuva Shakti International</p>
              </a>
              <a href="/verticles/nari-shakti" className="flex   items-center px-2 py-1 cursor-pointer text-sm opacity-70  hover:bg-gray-200">
                <RiArrowDropRightLine size={20} />

                <p className='whitespace-nowrap'>Nari Shakti</p>
              </a>
              <a href="/verticles/thofa" className="flex   items-center px-2 py-1 cursor-pointer text-sm opacity-70  hover:bg-gray-200">
                <RiArrowDropRightLine size={20} />
                <p className='whitespace-nowrap'>THOFA</p>
              </a>
              <a href="/verticles/edu-astra" className="flex   items-center px-2 py-1 cursor-pointer text-sm opacity-70  hover:bg-gray-200">
                <RiArrowDropRightLine size={20} />

                <p className='whitespace-nowrap'>Edu Asthra</p>
              </a>
              <a href="/verticles/integrated-ayush" className="flex   items-center px-2 py-1 cursor-pointer text-sm opacity-70  hover:bg-gray-200">
                <RiArrowDropRightLine size={20} />

                <p className='whitespace-nowrap'>Integrated Ayush</p>
              </a>
            </motion.div>
          </div>
          <div className="w-full">
            <div onClick={() => handleDropdown("aboutfwc")} className="w-fit flex items-center gap-2 h-fit cursor-pointer">
              <p>About FWC</p>
              <RiArrowDownSLine className={`w-5 h-5 transition-transform duration-300 ${mobiledrop === "aboutfwc" ? "rotate-180" : "rotate-0"}`} />
            </div>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: mobiledrop === "aboutfwc" ? "auto" : 0 }}
              transition={{ duration: .3, ease: "easeInOut" }}
              className="w-full  overflow-hidden"
            >

              <a href="/about-us" className="flex   items-center px-2 py-1 cursor-pointer text-sm opacity-70  hover:bg-gray-200">
                <RiArrowDropRightLine size={20} />

                <p className='whitespace-nowrap'>About Us</p>
              </a>
              <a href="/leadership" className="flex   items-center px-2 py-1 cursor-pointer text-sm opacity-70  hover:bg-gray-200">
                <RiArrowDropRightLine size={20} />

                <p className='whitespace-nowrap'>Leadership </p>
              </a>
              <a href="/privacy-policy" className="flex   items-center px-2 py-1 cursor-pointer text-sm opacity-70  hover:bg-gray-200">
                <RiArrowDropRightLine size={20} />

                <p className='whitespace-nowrap'>Privacy Policy</p>
              </a>
              <a href="/our-team" className="flex   items-center px-2 py-1 cursor-pointer text-sm opacity-70  hover:bg-gray-200">
                <RiArrowDropRightLine size={20} />

                <p className='whitespace-nowrap'>Gallery</p>
              </a>
            </motion.div>
          </div>
        </div>
        {isAuth ? (
          <div className="flex gap-4 mt-5 ml-6">
            <div className="bg-white border-2 border-white text-black py-0.5 px-5 text-lg font-semibold rounded-full cursor-pointer">
              <button className="center gap-2" onClick={handelLogout}>
                <RiLoginBoxLine className="w-5 h-5" />
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="login-sigup flex gap-4 mt-5 ml-6">
            <Link
              to="/login"
              className=" border-2 border-white py-0.5 px-5  font-semibold rounded-full cursor-pointer"
            >
              <button>LOG IN</button>
            </Link>
            <Link
              to="/Signup"
              className="bg-white border-2 border-white text-black py-0.5 px-5  font-semibold rounded-full cursor-pointer"
            >
              <button className="uppercase">Register</button>
            </Link>
          </div>
        )}
      </div>
    </>

  );
};

export default Nav;