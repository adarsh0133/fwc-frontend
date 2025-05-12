import {
  RiArrowUpSLine,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiMailLine,
  RiPhoneLine,
  RiWhatsappFill,
  RiYoutubeFill,
} from "@remixicon/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomeFooter = () => {

  return (
    <>
      <div className="w-full h-fit flex items-center justify-center max-[600px]:p-0">
        <div
          id="footer"
          className="h-full flex flex-col gap-10 w-full  bg-[#ffffff] text-black p-5 px-10 max-[600px]:p-5"
        >
          <div className="footer-wrapper flex max-[600px]:flex-col lg:justify-evenly max-[600px]:gap-10 pl-5 max-[600px]:pl-0">
            <div className=" w-[30%] max-[600px]:w-full flex flex-col h-fit max-[600px]:grid max-[600px]:grid-cols-1 lg:mt-8">
              <div className="image-wrapper w-[300px]">
                <img
                  className="max-[600px]:w-[40%] max-[600px]:mt-6 w-1/2 border-2"
                  src="/images/Home/logo.jpg"
                  alt=""
                />
                <div>
                  <p className="text-sm font-medium mt-10 max-[600px]:mt-5">
                    (First World Community)
                  </p>
                </div>
              </div>
              <div className="max-[600px]:flex max-[600px]:items-center">
                {/* <div className="flex flex-col gap-4 max-[600px]:w-[50%] max-[600px]:h-full">

                </div> */}
                <div className="mt-5 max-[600px]:mt-0 max-[600px]:h-full flex flex-col gap-4">
                  <div className="about mt-12">
                    <h1 className="text-lg font-medium">Contact Us</h1>
                    <div className="text-sm font-medium mt-5 flex gap-3">
                      <RiPhoneLine />
                      <span className="text-sm">+91 9171902209</span>
                    </div>
                    <div className="text-sm font-medium flex gap-3 mt-1">
                      <RiMailLine />
                      <span className="text-sm pr-3">
                        support@fwc-india.org
                      </span>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="links-wrapper max-[600px]:pl-0 pl-10 w-[70%] max-[600px]:w-full grid grid-cols-2 gap-10 md:grid-cols-3 md:gap-12 md:ml-10 lg:ml-20 lg:mt-10 lg:grid-cols-4">
              <div className="section">
                <h2 className=" font-semibold mb-2 uppercase">Benefits</h2>
                <div className="mt-14 max-[600px]:mt-5 flex flex-col gap-3">
                  <a
                    href="/events"
                    className="text-gray-500 block text-sm font-medium"
                  >
                    Weekly Meetups
                  </a>
                  <a
                    href="/investor-circle"
                    className="text-gray-500 block text-sm font-medium"
                  >
                    Investor Circle
                  </a>
                  <a
                    href="/business-matching"
                    className="text-gray-500 block text-sm font-medium"
                  >
                    Business Matching
                  </a>
                  {/* <a
                    href="#"
                    className="text-gray-500 block text-sm font-medium"
                  >
                    Partner Benefits
                  </a> */}
                  <a
                    href="/fwc-atithi"
                    className="text-gray-500 block text-sm font-medium"
                  >
                    FWC Atithi
                  </a>
                  <a
                    href="/events/#masterclass"
                    className="text-gray-500 block text-sm font-medium"
                  >
                    Exclusive Masterclass
                  </a>
                  {/* <a
                    href="#"
                    className="text-gray-500 block text-sm font-medium"
                  >
                    Resource Library
                  </a> */}
                  <a
                    href="/event-organiser"
                    className="text-gray-500 block text-sm font-medium"
                  >
                    Event Organiser
                  </a>
                  <a
                    href="/spotlight-boost"
                    className="text-gray-500 block text-sm font-medium"
                  >
                    Spotlight Boost
                  </a>
                </div>
              </div>
              <div className="section">
                <h2 className=" font-semibold mb-2 uppercase">Vertices</h2>
                <div className="mt-14 max-[600px]:mt-5 flex flex-col gap-3 mb-10">
                  <a
                    href={'/verticles/yuva-shakti-international'}
                    className="text-gray-500 block font-medium text-sm"
                  >
                    Yuva Shakti International
                  </a>
                  <a
                    href='/verticles/nari-shakti'
                    className="text-gray-500 block font-medium text-sm"
                  >
                    Nari Shakti
                  </a>
                  <a
                    href='/vertices/thofa'
                    className="text-gray-500 block font-medium text-sm"
                  >
                    THOFA
                  </a>
                  <a 
                    href="/verticles/edu-astra"
                    className="text-gray-500 block font-medium text-sm"
                  >
                    Edu Asthra
                  </a>
                  <a
                    href="/verticles/integrated-ayush"
                    className="text-gray-500 block font-medium text-sm"
                  >
                    Integrated Ayush
                  </a>
                </div>
                <Link to={'/partner'} className="bg-[#000000] text-white py-2 px-4 whitespace-nowrap  font-semibold rounded-full cursor-pointer max-[600px]:-ml-4">Become a Member</Link>
              </div>

              <div className="section">
                <h2 className=" font-semibold mb-2 uppercase">About FWC</h2>
                <div className="mt-14 max-[600px]:mt-5 flex flex-col gap-3">

                  <a
                    href="/about-us"
                    className="text-gray-500 block text-sm font-medium"
                  >
                    About Us
                  </a>
                  <a
                    href="/leadership"
                    className="text-gray-500 block text-sm font-medium"
                  >
                    Leadership
                  </a>
                  <a
                    href="/privacy-policy"
                    className="text-gray-500 block text-sm font-medium"
                  >
                    privacy-policy
                  </a>
                  <a
                    href="/privacy-policy"
                    className="text-gray-500 block text-sm font-medium"
                  >
                    Terms & Conditions
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 block text-sm font-medium"
                  >
                    Gallery
                  </a>
                </div>

              </div>

              <div className="btm-top-btn w-full flex items-end justify-end pr-5">
                <div className="size-10 bg-black p-2">
                  <a
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="text-xs text-white font-medium mt-10 cursor-pointer"
                  >
                    <RiArrowUpSLine />
                  </a>
                </div>
              </div>


            </div>
          </div>
          <div className="copyright-wrapper max-[600px]:flex-col-reverse py-5 flex gap-4 items-center justify-between mt-10 border-t-[1px] border-zinc-400">
            <span className="w-[20%]"></span>
            <div className="socials-wrapper flex gap-6 text-3xl">
              <a
                // href="https://www.instagram.com/krishna_mit_"
                className="text-zinc-300 hover:text-gray-500"
              >
                <img src="/images/Home/footer/insta.png" alt="" />
              </a>
              <a
                // href="https://www.linkedin.com/in/krishna-mit"
                className="text-zinc-300 hover:text-gray-500"
              >
                <img src="/images/Home/footer/fb.png" alt="" />

              </a>
              <a
                // href="https://wa.link/wbwwp2"
                className="text-zinc-300 hover:text-gray-500"
              >
                <img src="/images/Home/footer/yt.png" alt="" />

              </a>
              <a
                // href="https://youtube.com/@krishnamit"
                className="text-zinc-300 hover:text-gray-500"
              >
                <img src="/images/Home/footer/lk.png" alt="" />

              </a>
            </div>
            <div className="">
              <p className="text-gray-500 text-sm font-medium">
                © 2025 firstworldcommunity. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFooter;
