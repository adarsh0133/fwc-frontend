import React from 'react'
import { Link } from 'react-router-dom';
import Nav from './Nav';
import RotatingText from '../../UI/RotatingText';
import Magnet from '../../UI/Magnet';

export const Home = () => {
  const cards = [
    {
      id: 1,
      title: "Providing Connections",
      desc: "Connect with industry leaders, peers, and collaborators to grow your network.",
      bgimg: "/images/Home/bgimg.png"
    },
    {
      id: 2,
      title: "Funding Support",
      desc: "Secure funding through our Investor Circle and tailored support",
      bgimg: "/images/Home/bgimg.png"
    },
    {
      id: 3,
      title: "Mentoring",
      desc: "Learn from expert mentors to accelerate your business success.",
      bgimg: "/images/Home/bgimg.png"
    },
    {
      id: 4,
      title: "Community Support",
      desc: "Engage in meetups, events, and support initiatives like FWC Aditi.",
      bgimg: "/images/Home/bgimg.png"
    },
  ]

  console.log(cards)
  return (
    <div>
      <Nav />
      <div className="w-full h-screen bg-[url('/images/Home/bgimg.png')] bg-cover flex flex-col justify-center items-center gap-3">
        <div className="hero-logo w-28 bg-white rounded-lg mb-3">
          <img className='w-full h-full object-cover' src="/images/Home/homeCenterLogo.png" alt="" />
        </div>
        <div className="flex items-center gap-2">
          <h1 className='text-7xl text-white font-bold text-center'>Boost Your</h1>
          <RotatingText
            texts={['Business', 'Network', 'Revenue']}
            mainClassName="px-2 sm:px-2 md:px-3 text-7xl text-white font-bold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center "
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
        <p className='text-white text-xl'>One World | One Community | One Future</p>
        <Magnet padding={50} disabled={false} magnetStrength={10}>
          <button className="bg-[#FFF700] text-black py-2 mt-14 px-5 text-lg font-semibold rounded-full cursor-pointer">Become a Member</button>
        </Magnet>
      </div>
      <div className="what-we-do w-full h-screen px-10 py-32">
        <h1 className='text-4xl font-semibold'>What We Do</h1>
        <div className="circle-wrapper w-full py-16 flex gap-16">
          {
            cards.map((c) => (
              <div
                key={c.id}
                className="group size-[20vw] shrink-0 bg-white overflow-hidden rounded-full flex items-center justify-center border-[1px] border-black cursor-pointer relative transition-all duration-500 bg-cover bg-center hover:scale-110"
              >
                {/* Default background */}
                <div
                  className="absolute inset-0 bg-white transition-opacity duration-500 opacity-100 group-hover:opacity-0"
                ></div>

                {/* Hover background */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                  style={{ backgroundImage: `url(${c.bgimg})` }}
                ></div>

                <h1 className="text-3xl font-semibold text-center absolute transition-opacity duration-300 group-hover:opacity-0">
                  {c.title}
                </h1>
                <p className="text-lg text-white bg-transparent font-medium text-center opacity-0 absolute transition-opacity duration-300 group-hover:opacity-100 px-6">
                  {c.desc}
                </p>
              </div>
            ))
          }
        </div>
        <p className='text-sm w-1/2 text-zinc-800'>We provide a comprehensive support system for individuals and businesses by offering valuable connections, funding assistance, expert mentoring, and a strong community network. Our goal is to empower growth through collaboration, financial support, and strategic guidance while enhancing visibility and promotion to help you succeed.</p>
      </div>
    </div>
  )
}
