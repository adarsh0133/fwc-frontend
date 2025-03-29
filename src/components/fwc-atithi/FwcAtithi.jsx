import React from 'react'
import Nav from '../Home/Nav'
import HomeFooter from '../Home/HomeFooter'

const FwcAtithi = () => {
    return (
        <>
            <Nav />
            <div className="w-full h-fit lg:h-screen px-5 pt-28 pb-5 lg:flex lg:px-10 lg:pt-40 lg:pb-20  ">
                <div className="hero-text lg:w-1/2 lg:px-10">
                    <h1 className='text-2xl lg:text-5xl font-bold leading-8 lg:leading-10 lg:mt-5'>FWC  Atithi</h1>
                    <h2 className='text-2xl lg:text-2xl font-bold leading-8 lg:leading-10 mt-2'>Your Gateway to Connection, Support, and New Horizons</h2>
                    <p className='text-sm lg:text-lg  mt-5 lg:my-5 text-zinc-600'>Join FWC Akhiti and become part of a global community where travelers connect, share experiences, and support each other's journeys.</p>
                    <p className='text-sm lg:text-lg  mt-5 lg:my-5 text-zinc-600'>At FWC, we believe in the power of community and connection. The FWC Atithi program is an exclusive, innovative platform designed to help our members travel, connect, and grow. It's not just about accommodation – it's about forming meaningful relationships, learning from each other, and creating opportunities for mutual success.</p>
                    <button className='rounded-full px-5 py-2 bg-[#04236F] text-white'>Become a Member</button>
                </div>
                <div className="hero-image mt-10 lg:w-1/2 lg:h-[50vh] lg:mt-0 lg:px-10 overflow-hidden">
                    <img src="/images/vertices/eduastra/heroimg.png" alt="EduAstra" className='w-full h-full object-cover rounded-md' />
                </div>
            </div>
            <div className="learning-approch w-full h-fit lg:h-screen px-5 py-10 bg-radial-[at_50%_75%] from-[#00113B] via-[#000d2d] to-[#00040e] to-90% lg:flex lg:flex-col lg:items-center lg:justify-evenly">
                <div className="approch-text lg:flex lg:flex-col  lg:items-center">
                    <p className='text-xs lg:text-xl lg:w-1/3 text-zinc-300 mt-2 text-center'>How It Works</p>
                    <h1 className='text-xl lg:text-2xl font-bold text-nowrap text-center text-white '>Simple Steps to Get Started</h1>
                    <div className="text-wrapper w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-12 lg:gap-20 mt-10 gap-5 ">
                        {
                            [1, 2, 3, 4].map((item, i) => (
                                <div key={i} className="w-full flex bg-white h-fit py-5 lg:py-10 rounded-md">
                                    <div className="img-container w-[25%] px-4 pt-1">
                                        <img className='w-[70%]' src="/images/vertices/eduastra/laptop.png" alt="" />
                                    </div>
                                    <div className="w-[75%]">
                                        <h1 className='text-xl font-bold'>Skill-Based Learning</h1>
                                        <p className='text-lg leading-none mt-2 text-zinc-500'>Practical exposure beyond textbooks ensuring real-world readiness.</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="approch-text mt-10 lg:flex lg:flex-col lg:items-center">
                    <p className='text-xs lg:text-xl lg:w-1/3 text-zinc-300 mt-2 text-center'>Benefits</p>
                    <h1 className='text-xl lg:text-2xl font-bold text-nowrap text-center text-white'>Why Join FWC Akhiti?</h1>
                    <div className="text-wrapper w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-12 lg:gap-20 mt-10 gap-5 ">
                        {
                            [1, 2, 3, 4].map((item, i) => (
                                <div key={i} className="w-full flex bg-white h-fit py-5 lg:py-10 rounded-md">
                                    <div className="img-container w-[25%] px-4 pt-1">
                                        <img className='w-[70%]' src="/images/vertices/eduastra/laptop.png" alt="" />
                                    </div>
                                    <div className="w-[75%]">
                                        <h1 className='text-xl font-bold'>Skill-Based Learning</h1>
                                        <p className='text-lg leading-none mt-2 text-zinc-500'>Practical exposure beyond textbooks ensuring real-world readiness.</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="w-full h-fit lg:h-screen px-5 pt-28 pb-5 lg:flex lg:px-10 lg:pt-40 lg:pb-20  ">
                <div className="hero-text lg:w-1/2 lg:px-10">
                    <h1 className='text-2xl lg:text-5xl font-bold leading-8 lg:leading-10 lg:mt-5'>Why Join FWC Atithi?</h1>
                    <p className='text-sm lg:text-lg  mt-5 lg:my-5 text-zinc-600'>The power of community is unstoppable when we all come together. Whether you're a traveler, entrepreneur, or start-up enthusiast, FWC Atithi is your gateway to not just a place, but to people, opportunities, and growth. It's about forming lasting connections and creating a supportive network wherever your journey takes you.</p>
                </div>
                <div className="hero-image mt-10 lg:w-1/2 lg:h-[50vh] lg:mt-0 lg:px-10 overflow-hidden">
                    <img src="/images/vertices/eduastra/heroimg.png" alt="EduAstra" className='w-full h-full object-cover rounded-md' />
                </div>
            </div>
            <HomeFooter />
        </>
    )
}

export default FwcAtithi