import React from 'react'
import Nav from '../Home/Nav'
import HomeFooter from '../Home/HomeFooter'

const Aboutus = () => {
    const start = [{
        title: "Mission",
        desc: "To ignite 5,000 startups and businesses by 2028, turning India into a beacon of entrepreneurship. We’re building a toxic-free nation—free of doubt, free of limits—where every dreamer thrives.",
        img: "/images/Aboutus/aboutus/mission.png"
    },
    {
        title: "Vision",
        desc: "One world, one community, one future. A globe united by innovation, sustainability, and the power of collective ambition.",
        img: "/images/Aboutus/aboutus/vision.png"
    },
    {
        title: "Goals",
        desc: "FWC aims to ignite 5,000 startups by 2028, fostering a limitless, toxic-free entrepreneurial India while uniting the world through innovation, sustainability, and collective ambition.",
        img: "/images/Aboutus/aboutus/goals.png"
    },
    ]
    const seedsArray = [
        { title: "MIONP", img: "/images/Aboutus/aboutus/MIONP.png" },
        { title: "Edu Astra ", img: "/images/Aboutus/aboutus/Astra.png" },
        { title: "Integrated Ayush", img: "/images/Aboutus/aboutus/Integrated.png" },
        { title: "Startup KY", img: "/images/Aboutus/aboutus/Startup.png" },
        { title: "Garbhavidhya ", img: "/images/Aboutus/aboutus/Garbhavidhya.png" },
        { title: "Yuva Shakti", img: "/images/Aboutus/aboutus/Yuva.png" },
        { title: "Naari Shakti", img: "/images/Aboutus/aboutus/Naari.png" },
        { title: "Renewable Energy", img: "/images/Aboutus/aboutus/Renewable.png" },
        { title: "Digital Marketplace", img: "/images/Aboutus/aboutus/Digital.png" },
    ]
    const people = [
        { name: "Vikas Bansal", img: "/images/Aboutus/aboutus/Vikas.png" },
        { name: "Manoj Kumar", img: "/images/Aboutus/aboutus/Manoj.png" },
        { name: "Moon Goel", img: "/images/Aboutus/aboutus/Moon.png" },
        { name: "Naveen Verma", img: "/images/Aboutus/aboutus/Naveen.png" },
        { name: "Kabir Sahni ", img: "/images/Aboutus/aboutus/Kabir.png" },
        { name: "Kandaswamy Natarajan", img: "/images/Aboutus/aboutus/Kandaswamy.png" },
        { name: "Krishna Thakur", img: "/images/Aboutus/aboutus/Krishna.png" },
    ]
    return (
        <>
            <Nav />
            <div className="w-full h-screen bg-[url('/images/Aboutus/aboutus/aboutushero.png')] bg-cover bg-center text-white center px-5 md:px-20">
                <div className="h-fit lg:w-[50%] space-y-5 lg:space-y-10">
                    <h1 className='font-bold text-2xl md:text-4xl lg:text-5xl'>Welcome to the First World Community</h1>
                    <h2 className='font-bold text-lg lg:text-2xl'>Where Visionaries Build the Future</h2>
                    <p className='font-light text-sm lg:text-lg'>We’re not just a community—we’re a movement. A powerhouse of dreamers, doers, and changemakers igniting a revolution in entrepreneurship. From India’s heart to the world’s stage, FWC is here to empower 5,000 startups by 2028, crafting a toxic-free tomorrow through innovation, connection, and unstoppable growth. </p>
                    <button className='text-black px-4 py-2 bg-white rounded-full font-bold text-sm'>Join the Revolution</button>
                </div>
            </div>
            <div className="roots-global w-full h-fit px-5 py-10 lg:flex lg:gap-20 lg:px-10">
                <div className="img-container w-full h-[40vh] lg:h-[50vh] rounded-md overflow-hidden">
                    <img className='w-full h-full bg-cover' src="/images/Aboutus/aboutus/roots.png" alt="" />
                </div>
                <div className="w-full h-fit flex flex-col justify-center items-start py-10">
                    <h1 className='font-bold text-2xl md:text-4xl lg:text-5xl'>Roots of a Global Dream</h1>
                    <h2 className='font-bold text-lg lg:text-2xl'>A Journey to Transform Lives</h2>
                    <p className='font-light text-sm lg:text-lg my-5'>In the vibrant soul of India, Dr. CK Ashok Kumar planted a seed—a vision to uplift the marginalized, empower women, and spark a global entrepreneurial fire. Today, FWC stands  tall as a Section-8 not-for-profit, weaving ancient wisdom with modern grit.</p>
                    <p className='font-light text-sm lg:text-lg'>FWC, founded by Dr. CK Ashok Kumar, is a Section-8 not-for-profit organization dedicated to uplifting marginalized communities, empowering women, and fostering global entrepreneurship by blending ancient wisdom with modern innovation.</p>
                </div>
            </div>
            <div className="w-full py-10 bg-[#F5F6FF]">
                <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl ml-5 lg:ml-10'>Our Mission</h1>
                <div className="lg:flex lg:flex-row-reverse">
                    <div className="relative mission-imgs w-full h-[70vh] overflow-hidden">
                        <div className="square absolute top-[30%] lg:top-[20%] left-[40%] -translate-x-1/2 -translate-y-1/2 rotate-45 size-20 md:size-32 lg:size-40 rounded-lg overflow-hidden">
                            <img className='w-full h-full object-cover' src={"/images/Aboutus/aboutus/m1.png"} alt="" /></div>
                        <div className="square absolute top-[50%] left-[17%] -translate-x-1/2 -translate-y-1/2 rotate-45 size-20 md:size-32 lg:size-40 rounded-lg overflow-hidden">
                            <img className='size-full object-cover' src={"/images/Aboutus/aboutus/m2.png"} alt="" /></div>
                        <div className="square absolute top-[70%] lg:top-[80%] left-[40%] -translate-x-1/2 -translate-y-1/2 rotate-45 size-20 md:size-32 lg:size-40 rounded-lg overflow-hidden">
                            <img className='size-full object-cover' src={"/images/Aboutus/aboutus/m3.png"} alt="" /></div>
                        <div className="square absolute top-[50%] left-[100%] -translate-x-1/2 -translate-y-1/2 -rotate-45 size-56 md:size-96 rounded-2xl border-2 border-black overflow-hidden">
                            <img className='size-full object-cover' src={"/images/Aboutus/aboutus/bigsquare.png"} alt="" /></div>
                    </div>
                    <div className="mission-text w-full">
                        <div className="text-wrapper w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 lg:px-12 lg:gap-0 mt-10 gap-5 lg:pl-20">
                            {
                                start.map((item, i) => (
                                    <div key={i} className="w-full flex h-fit py-5 lg:py-10 rounded-md lg:gap-2">
                                        <div className="img-container w-[30%] lg:size-20 px-4 pt-1 lg:px-0 lg:pt-0">
                                            <img className='w-full h-full lg:object-contain' src={item.img} alt="" />
                                        </div>
                                        <div className="w-[70%]">
                                            <h1 className='text-xl font-semibold lg:font-bold'>{item.title}</h1>
                                            <p className='text-xs leading-none lg:leading-normal mt-2 text-zinc-500'>{item.desc}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* { sparking change } */}

            <div className="w-full  p-5 md:p-10 ">
                <div className="w-full h-[25%]  flex flex-col md:flex-row items-center justify-between">
                    <div className="  w-full md:w-1/2 h-full">
                        <p className='text-3xl  font-semibold'>Seeds of Tomorrow</p>
                        <p className='font-medium opacity-80'>Initiatives That Inspire</p>
                    </div>
                    <div className=" w-full md:w-1/2 px-5 mt-5 text-xs opacity-70 lg:text-lg md:mt-0 md:px-10">
                        <p>Our projects are the driving force behind transformation, turning bold ideas into impactful realities. From empowering entrepreneurs to fostering innovation and sustainability, every initiative we undertake fuels progrvess, uplifts communities, and shapes a future where dreams thrive without limits.</p>
                    </div>
                </div>
                <div className="w-full py-10 gap-14  grid  grid-cols-1 md:grid-cols-3 xl:grid-cols-5 ">
                    {seedsArray.map((seed, index) => {
                        return (
                            <div key={index} className="  w-full ">
                                <div className="w-full h-[85%] overflow-hidden p-1 border-2 border-[#47464688] ">
                                    <img className='w-full h-full object-cover' src={seed.img} alt="" />
                                </div>
                                <div className="w-full h-[15%] center">
                                    <p className='font-medium text-xl'>{seed.title} </p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
            <div className="w-full h-[50vh] max-[600px]:h-[40vh] bg-[url('/images/Aboutus/aboutus/delhibg.png')] bg-cover max-[600px]:bg-[url('/images/Aboutus/aboutus/delhimobilebg.png')] max-[600px]:bg-contain bg-no-repeat bg-center"></div>
            <div className="w-full h-fit py-14 grid grid-cols-2 gap-5 md:grid-cols-5 xl:grid-cols-7 ">
                {
                    people.map((person, index) => {
                        return(
                        <div key={index} className="flex flex-col items-center  gap-2">
                            <div className=" size-32 md:size-24 lg:size-36 xl:size-44   rounded-full overflow-hidden">
                                <img src={person.img} className='w-full h-full object-cover' alt="" />
                            </div>
                            <div className="w-fit  h-[15%] center">
                                <p className='font-medium  text-sm lg:text-lg  text-center '>{person.name} </p>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
            <HomeFooter />
        </>
    )
}

export default Aboutus

