import React from 'react'
import Nav from '../Home/Nav'
import HomeFooter from '../Home/HomeFooter'

const EduAstra = () => {
    const cards = [
        {
            title: "Beyond Classroom Education",
            description: "Experience learning that goes beyond traditional boundaries with hands-on projects and real-world applications.",
            image: "/images/vertices/eduastra/edu.png",
        },
        {
            title: "AI & Robotics Programs",
            description: "Dive into cutting-edge technology with our comprehensive AI and robotics curriculum designed for future innovators.",
            image: "/images/vertices/eduastra/Bot.png",
        },
        {
            title: "Self-Awareness Programs",
            description: "Develop emotional intelligence and self-awareness through our specialized personal development programs.",
            image: "/images/vertices/eduastra/Brain.png",
        },
    ]
    return (
        <>
            <Nav />
            <div className="w-full h-fit px-5 pt-28 pb-5 lg:flex lg:px-10 lg:pt-40 lg:pb-20  ">
                <div className="hero-text lg:w-1/2 lg:px-10">
                    <h1 className='text-2xl lg:text-4xl font-bold leading-8 lg:leading-10'>Empowering the Next Generation with Practical & Skill-Based Learning</h1>
                    <p className='text-sm lg:text-lg font-semibold mt-5 lg:my-10 leading-none'>Beyond classroom education - Discover AI, Robotics & Self-Awareness programs designed for future leaders.</p>
                    <ul className="mt-4 space-y-4 font-normal text-sm leading-tight lg:text-lg">
                        <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-5 before:h-5 before:bg-[url('/images/vertices/eduastra/CheckMark.png')] before:bg-contain before:bg-no-repeat">
                            Beyond classroom education
                        </li>
                        <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-5 before:h-5 before:bg-[url('/images/vertices/eduastra/CheckMark.png')] before:bg-contain before:bg-no-repeat">
                            AI, Robotics & Self-Awareness programs
                        </li>
                        <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-5 before:h-5 before:bg-[url('/images/vertices/eduastra/CheckMark.png')] before:bg-contain before:bg-no-repeat">
                            Scholarships & Global Exposure
                        </li>
                    </ul>
                </div>
                <div className="hero-image mt-10 lg:w-1/2 lg:mt-0 lg:px-10 overflow-hidden">
                    <img src="/images/vertices/eduastra/heroimg.png" alt="EduAstra" className='w-full h-full object-cover' />
                </div>
            </div>
            <div className="learning-approch w-full h-fit px-5 py-10">
                <div className="approch-text lg:flex lg:flex-col lg:gap-5 lg:items-center">
                    <h1 className='text-xl lg:text-2xl font-bold text-nowrap text-center'>A New Age Learning Approach</h1>
                    <p className='text-xs lg:text-xl lg:w-1/3 text-zinc-500 mt-2 text-center'>Edu ASTHRA provides a wholesome education that blends academic
                        excellence with practical expertise.</p>
                    <div className="text-wrapper w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-12 lg:gap-20 mt-10 gap-5">
                        <div className="w-full flex ">
                            <div className="img-container w-[25%] px-4 pt-1">
                                <img className='w-[70%]' src="/images/vertices/eduastra/laptop.png" alt="" />
                            </div>
                            <div className="w-[75%]">
                                <h1 className='text-xl font-bold'>Skill-Based Learning</h1>
                                <p className='text-lg leading-none mt-2 text-zinc-500'>Practical exposure beyond textbooks ensuring real-world readiness.</p>
                            </div>
                        </div>
                        <div className="w-full flex">
                            <div className="img-container w-[25%] px-4 pt-1">
                                <img className='w-[70%]' src="/images/vertices/eduastra/laptop.png" alt="" />
                            </div>
                            <div className="w-[75%]">
                                <h1 className='text-xl font-bold'>Skill-Based Learning</h1>
                                <p className='text-lg leading-none mt-2 text-zinc-500'>Practical exposure beyond textbooks ensuring real-world readiness.</p>
                            </div>
                        </div>
                        <div className="w-full flex">
                            <div className="img-container w-[25%] px-4 pt-1">
                                <img className='w-[70%]' src="/images/vertices/eduastra/laptop.png" alt="" />
                            </div>
                            <div className="w-[75%]">
                                <h1 className='text-xl font-bold'>Skill-Based Learning</h1>
                                <p className='text-lg leading-none mt-2 text-zinc-500'>Practical exposure beyond textbooks ensuring real-world readiness.</p>
                            </div>
                        </div>
                    </div>

                    <div className="cards-wrapper w-full py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-12 lg:gap-20 gap-5">
                        {
                            cards.map((item, index) => (
                                <div key={index} className="w-full flex flex-col gap-3 p-5 bg-radial-[at_50%_75%] from-[#00113B] via-[#000d2d] to-[#00040e] to-90% text-white rounded-md">
                                    <div className="img-container size-20">
                                        <img className='size-full object-cover' src={item.image} alt="" />
                                    </div>
                                    <h1 className='text-lg font-bold'>{item.title}</h1>
                                    <p className='text-sm text-zinc-300'>{item.description}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
            <div className="program w-full h-fit text-white bg-[#020F2F] px-5 py-10">
                <p className='text-center'>Our Key Initiatives</p>
                <h1 className='text-2xl lg:text-3xl font-bold text-center text-nowrap'>Innovative Learning Programs</h1>
                <div className="cards-wrapper w-full py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:p-20 lg:gap-20 gap-5">
                    <div className="w-full flex flex-col gap-3 p-5 bg-white text-black rounded-md">
                        <div className="w-full flex ">
                            <div className="img-container w-[25%] lg:w-[20%] pt-1 lg:pt-0 lg:mb-4">
                                <img className='w-[70%] lg:w-[60%]' src="/images/vertices/eduastra/bbot.png" alt="" />
                            </div>
                            <div className="w-[75%]">
                                <h1 className='text-lg font-bold'>Village Vingyani</h1>
                                <p className='text-xs leading-none  text-zinc-900'>Practical exposure beyond textbooks ensuring real-world readiness.</p>
                            </div>
                        </div>
                        <div className="img-container w-full h-[20vh] lg:h-[30vh] rounded-md overflow-hidden">
                            <img className='w-full h-full object-cover' src={"/images/vertices/eduastra/village.png"} alt="" />
                        </div>
                        <ul className="mt-4 space-y-2 font-normal text-sm leading-tight">
                            <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-5 before:h-5 before:bg-[url('/images/vertices/eduastra/CheckMark.png')] before:bg-contain before:bg-no-repeat">
                                Hands-on digital learning experiences
                            </li>
                            <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-5 before:h-5 before:bg-[url('/images/vertices/eduastra/CheckMark.png')] before:bg-contain before:bg-no-repeat">
                                In collaboration with AICRA
                            </li>
                            <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-5 before:h-5 before:bg-[url('/images/vertices/eduastra/CheckMark.png')] before:bg-contain before:bg-no-repeat">
                                Preparing for future tech careers
                            </li>
                        </ul>
                    </div>

                    <div className="w-full flex flex-col gap-3 p-5 bg-white text-black rounded-md">
                        <div className="w-full flex ">
                            <div className="img-container w-[25%] lg:w-[20%] pt-1 lg:pt-0 lg:mb-4">
                                <img className='w-[70%] lg:w-[60%]' src="/images/vertices/eduastra/div.png" alt="" />
                            </div>
                            <div className="w-[75%]">
                                <h1 className='text-lg font-bold'>Karma Yogi</h1>
                                <p className='text-xs leading-none  text-zinc-900'>Self-Awareness Program</p>
                            </div>
                        </div>
                        <div className="img-container w-full h-[20vh] lg:h-[30vh] rounded-md overflow-hidden">
                            <img className='w-full h-full object-cover' src={"/images/vertices/eduastra/karma.png"} alt="" />
                        </div>
                        <ul className="mt-4 space-y-2 font-normal text-sm leading-tight">
                            <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-5 before:h-5 before:bg-[url('/images/vertices/eduastra/CheckMark.png')] before:bg-contain before:bg-no-repeat">
                                Law of Attraction & Abundance
                            </li>
                            <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-5 before:h-5 before:bg-[url('/images/vertices/eduastra/CheckMark.png')] before:bg-contain before:bg-no-repeat">
                                Develop confidence & fearless mindset
                            </li>
                            <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-5 before:h-5 before:bg-[url('/images/vertices/eduastra/CheckMark.png')] before:bg-contain before:bg-no-repeat">
                                Self-discovery & mental well-being
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="scholar w-full h-fit bg-white px-5 md:px-10 py-10">
                <p className='text-center font-semibold'>Scholarships & Global Exposure</p>
                <h1 className='text-xl md:text-3xl font-bold text-center text-nowrap'>Supporting Deserving Students</h1>
                <div className="img-container w-full md:h-[50vh] lg:h-[60vh] my-5">
                    <img className='w-full h-full object-cover' src="/images/vertices/eduastra/Rectangle.png" alt="" />
                </div>
                <h1 className='text-xl lg:text-2xl font-bold  text-nowrap'>Global Opportunities Await</h1>
                <ul className="mt-4 space-y-4 font-normal text-sm leading-tight">
                    <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-5 before:h-5 before:bg-[url('/images/vertices/eduastra/cap.png')] before:bg-contain before:bg-no-repeat">
                        Financial aid for talented students
                    </li>
                    <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-5 before:h-5 before:bg-[url('/images/vertices/eduastra/globe.png')] before:bg-contain before:bg-no-repeat">
                        Global networking & academic exposure
                    </li>
                    <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1 before:w-5 before:h-5 before:bg-[url('/images/vertices/eduastra/st.png')] before:bg-contain before:bg-no-repeat">
                        Future career growth opportunities
                    </li>
                </ul>
            </div>
            <HomeFooter />
        </>
    )
}

export default EduAstra