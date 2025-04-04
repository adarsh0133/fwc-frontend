import React from 'react'
import Nav from '../Home/Nav'
import HomeFooter from '../Home/HomeFooter'
import { Link } from 'react-router-dom'

const LeadershipHome = () => {
    const leaders = [
        {
            name: "Dr JP Singh Sahni",
            designation: "Visionary Leader | Disaster Risk Reduction & Crisis Management Expert | Director, Indian Skills Development Council | Trustee, Indian Council for Education & Culture | Guinness World Records Mentor | Skill Development",
            image: "/images/Aboutus/leadership/jpsir.png",
            link: ""
        },
        {
            name: "DR. PARASHURAMAN",
            designation: "Principal Scientist at MSSRF.Mentored by Padma Vibhushan Dr. M.S. Swaminathan, I strive for sustainable development, youth empowerment, and scientific literacy",
            image: "/images/Aboutus/leadership/PARASHURAMAN.png",
            link: ""
        },
        {
            name: "Viswanathan K.G.",
            designation: "Skill-Education -Employment Expert| Strategic Partnerships| Relationship Management| Sales & Marketing|B2B |B2C |Client Acquisition |Start-Up-Venture Capital |Creating Leadership and overall a responsible Human Being",
            image: "/images/Aboutus/leadership/Viswanathan.png",
            link: ""
        },
        {
            name: "Dr. K Selvarajan",
            designation: "Visionary Leader | Disaster Risk Reduction & Crisis Management Expert | Director, Indian Skills Development Council | Trustee, Indian Council for Education & Culture | Guinness World Records Mentor | Skill Development",
            image: "/images/Aboutus/leadership/Selvarajan.png",
            link: ""
        },
        {
            name: "Karunanidhi Kasinathan",
            designation: "Indo Japan bridge Consultant with IT Bilingual Project Management and Technical and Business Development",
            image: "/images/Aboutus/leadership/Karunanidhi.png",
            link: ""
        },
        {
            name: "Dr. Ganesh Acharya",
            designation: "Ganesh Acharya is the CHAIRMAN of SHIELD International Group & one of the Director of ATRIBS and AARC GLOBAL TRUST he brings with him 18+ years of experience",
            image: "/images/Aboutus/leadership/Ganesh.png",
            link: ""
        },
        {
            name: "Dr. Jayanthi",
            designation: "Visionary Leader | Disaster Risk Reduction & Crisis Management Expert | Director, Indian Skills Development Council | Trustee, Indian Council for Education & Culture | Guinness World Records Mentor | Skill Development",
            image: "/images/Aboutus/leadership/Jayanthi.png",
            link: ""
        },
    ]
    return (
        <>
            <Nav />
            <div className="container m-auto pt-24 p-7 w-full">
                <h1 className="text-gray-800 font-semibold ">
                    LEADERSHIP *
                </h1>
                <h2 className="text-5xl font-semibold text-gray-900">
                    BOARD OF
                    <span className="text-[#050093] ml-3">
                        DIRECTORS
                    </span>
                </h2>
                <p className="mt-4 text-gray-600 max-w-2xl">
                    The Leadership section of the FWC (first world community) website highlights the key leaders, their roles, and their contributions to the organization. It may include the following details:
                </p>
                <div className="mt-8 h-fit lg:h-screen w-full flex flex-col  md:flex-row lg:py-20">
                    <div className=" w-full h-full flex flex-col justify-between md:w-1/2">
                        <h3 className="text-4xl font-medium text-gray-900">
                            Founder & Chairman
                        </h3>
                        <img alt="Founder standing in front of a large emblem" className="w-[80%] h-[90%] object-cover" src="/images/vertices/yuvaShakti/ys-cksir.webp" width="300" />
                    </div>
                    <div className="w-full md:w-1/2 md:pl-8 lg:flex lg:flex-col lg:justify-between lg:py-20">
                        <div className="">
                            <p className="text-gray-600">
                                The leaders of the First World Community serve as the foundational pillars that provide strength and unwavering support at every step of our journey. We extend our heartfelt gratitude to JP Sir, Dr. Parshu Raman, KK Sir, and the dedicated members of our board of directors.
                            </p>
                            <p className="mt-4 text-gray-600">
                                These individuals are not just the face of the First World Community; they are our mentors, guiding us with their invaluable experience and insights. Their commitment of time and effort is instrumental in our mission to create the world’s best community, and we deeply appreciate their dedication to our cause. Their leadership inspires us all, and we are truly thankful for their unwavering support.
                            </p>
                        </div>
                        <div className="">
                            <h4 className="mt-4 text-xl font-bold text-gray-900">
                                Dr. CK ASHOK KUMAR
                            </h4>
                            <p className="text-gray-600">
                                Chairman - First World Community
                            </p>
                            <p className="mt-2 text-gray-600">
                                C K Ashok Kumar, Founder of First World Community, as the Global Farmer Engagement Partner for the Millionaire Farmer of India (MFOI) Awards 2024!  With Dr. Kumar's vision and dedication, we're set to make MFOI a truly global celebration of agricultural excellence.
                            </p>
                            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
                                Read more
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit py-10 grid grid-cols-1 place-items-center sm:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-y-20">
                    {
                        leaders.map((leader, i) => (
                            <div key={i} className="w-[30vh] h-fit lg:h-[55vh] ">
                                <img alt="Dr JP Singh Sahni" className="w-full rounded-md" height="150" src={leader.image} width="150" />
                                <h4 className="mt-4 text-lg font-bold text-gray-900">
                                    {leader.name}
                                </h4>
                                <p className="text-gray-600 leading-tight text-sm mb-4">
                                    {leader.designation}
                                </p>
                                <Link to={leader.link} className=" px-4 py-2 text-blue-600 border-[1px] border-blue-600 rounded-full">
                                    {leader.link ? "Read more" : "Coming soon"}
                                </Link>
                            </div>
                        ))
                    }

                </div>
            </div>
            <HomeFooter />
        </>
    )
}

export default LeadershipHome