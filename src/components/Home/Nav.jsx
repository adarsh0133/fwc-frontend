import React, { useEffect, useState } from 'react';
import Magnet from './../../UI/Magnet';
import { Link } from 'react-router-dom';
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
    vertices: false,
    aboutFwc: false,
  });

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
    <>
      <div className='fixed z-50 hidden lg:flex  w-full lg:px-4 xl:px-10 h-[10vh]  bg-zinc-900  justify-between items-center'>
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
                  <a href="/events" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                    <img className='w-[15%]' src="/images/Home/nav/gmeet.png" alt="Weekly Meetups" />
                    <p className='whitespace-nowrap'>Weekly Meetups</p>
                  </a>
                  <a href="/investor-circle" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                    <img className='w-[15%]' src="/images/Home/nav/dollar.png" alt="Investor Circle" />
                    <p className='whitespace-nowrap'>Investor Circle</p>
                  </a>
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
                  <a href="/zoom-premium" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                    <img className='w-[15%]' src="/images/Home/nav/zoom.png" alt="Zoom Premium" />
                    <p className='whitespace-nowrap'>Zoom Premium</p>
                  </a>
                  <a href="/spotlight-boost" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                    <img className='w-[15%]' src="/images/Home/nav/spotlight.png" alt="Spotlight Boost" />
                    <p className='whitespace-nowrap'>Spotlight Boost</p>
                  </a>
                </div>
              )}
            </li>
            <li className='cursor-pointer'>
              <a href={'/events'}>
                Events
              </a>
            </li>
            <li className='cursor-pointer'>
              <a href="/fwc-stories">
                FWC Stories
              </a>
            </li>
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
                  <a href="/vertices/yuva-shakti-international" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                    <img className='w-[15%]' src="/images/Home/nav/ysint.png" alt="" />
                    <p className='whitespace-nowrap'>Yuva Shakti International</p>
                  </a>
                  <a href="/vertices/thofa" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                    <img className='w-[15%]' src="/images/Home/nav/thofa.png" alt="" />
                    <p className='whitespace-nowrap'>THOFA</p>
                  </a>
                  <a href="/vertices/edu-astra" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                    <img className='w-[15%]' src="/images/Home/nav/asthra.png" alt="" />
                    <p className='whitespace-nowrap'>Edu Asthra</p>
                  </a>
                  <a href="/vertices/integrated-ayush" className="flex gap-2 items-center py-2 px-4 cursor-pointer font-semibold hover:bg-gray-200">
                    <img className='w-[15%]' src="/images/Home/nav/ayush.png" alt="" />
                    <p className='whitespace-nowrap'>Integrated Ayush</p>
                  </a>
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
      </div>

      <div className=" fixed z-50 w-full flex items-center justify-between lg:hidden h-[10vh] bg-zinc-900">
        <div className="logo w-[30%] center  h-full">
          <a className='w-full h-full center' href="/">
            <img className='w-[60%]' src="/images/Home/logo.png" alt="Logo" />
          </a>
        </div>
        <div onClick={toggleMenu} className="w-[14%] h-full text-white center">
          <RiMenu2Line />
        </div>
      </div>
      <div
        className={`w-full h-fit pb-10 fixed top-0 left-0 z-[9999] lg:hidden transition-transform duration-500 bg-zinc-900 text-white shadow-md rounded-md ${menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
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
              <a href="/zoom-premium" className="flex   items-center px-2 py-1 cursor-pointer text-sm opacity-70  hover:bg-gray-200">
                <RiArrowDropRightLine size={20} />
                <p className='whitespace-nowrap'>Zoom Premium</p>
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
            <div onClick={() => handleDropdown("vertices")} className="w-fit flex items-center gap-2 h-fit cursor-pointer">
              <p>Vertices</p>
              <RiArrowDownSLine className={`w-5 h-5 transition-transform duration-300 ${mobiledrop === "vertices" ? "rotate-180" : "rotate-0"}`} />
            </div>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: mobiledrop === "vertices" ? "auto" : 0 }}
              transition={{ duration: .3, ease: "easeInOut" }}
              className="w-full  overflow-hidden"
            >
              <a href="/vertices/yuva-shakti-international" className="flex   items-center px-2 py-1 cursor-pointer text-sm opacity-70  hover:bg-gray-200">
                <RiArrowDropRightLine size={20} />

                <p className='whitespace-nowrap'>Yuva Shakti International</p>
              </a>
              <a href="/vertices/thofa" className="flex   items-center px-2 py-1 cursor-pointer text-sm opacity-70  hover:bg-gray-200">
                <RiArrowDropRightLine size={20} />

                <p className='whitespace-nowrap'>THOFA</p>
              </a>
              <a href="/vertices/edu-astra" className="flex   items-center px-2 py-1 cursor-pointer text-sm opacity-70  hover:bg-gray-200">
                <RiArrowDropRightLine size={20} />

                <p className='whitespace-nowrap'>Edu Asthra</p>
              </a>
              <a href="/vertices/integrated-ayush" className="flex   items-center px-2 py-1 cursor-pointer text-sm opacity-70  hover:bg-gray-200">
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
              className=" border-2 border-white text-white py-0.5 px-5  font-semibold rounded-full cursor-pointer"
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