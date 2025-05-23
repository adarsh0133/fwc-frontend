import React, { useEffect } from 'react'
import Nav from '../Home/Nav'
import HomeFooter from '../Home/HomeFooter'
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from '../../store/Actions/userAction';
import { Link, useNavigate } from 'react-router-dom';
import { createMatchmaking } from '../../store/Actions/matchMakingActions';

const ExpertConnectHomePage = () => {
    const systum = [
        {
            name: 'Free Zoom Premium',
            description: 'Connect seamlessly with top experts',
            image: '/images/vertices/ayush/ayurveda.webp'
        },
        {
            name: 'FWC Promotion',
            description: 'Highlight your expertise to a vast network',
            image: '/images/vertices/ayush/unani.webp'
        },
        {
            name: 'Pro Support',
            description: 'Get expert help for smooth interactions',
            image: '/images/vertices/ayush/siddha.webp'
        },
        {
            name: 'Verified Platform',
            description: 'Trusted and streamlined experience',
            image: '/images/vertices/ayush/yoga.webp'
        },
    ]

    const dispatch = useDispatch();

    const { user } = useSelector(state => state.user);
    const isAuth = useSelector((state) => state.user.isAuth);
    const navigate = useNavigate();


    const userId = user?._id;

    useEffect(() => {
        dispatch(currentUser());
    }, [])


    const handleClick = () => {
        dispatch(createMatchmaking(userId));
        dispatch(currentUser());
    }

    const checkLoginHandler = () => {
        if (!isAuth) {
            window.alert("Please login first");
            navigate("/login", { state: { from: `/business-matching` } });
            return;
        }
    };
    return (
        <>
            <Nav />
            <div className="w-full h-fit px-5 pb-5 lg:flex lg:flex-col-reverse lg:px-10 lg:pb-20 bg-[#F6F5FD]">
                <div className="hero-text lg:w-full lg:px-10 text-center">
                    <h1 className='text-2xl lg:text-5xl font-bold leading-8 lg:leading-10 lg:mt-5'>Connect with the Best Minds</h1>
                    <h2 className='text-2xl lg:text-2xl font-semibold leading-8 lg:leading-10 mt-4'>Your Vision, Our Network</h2>
                    <p className='text-sm lg:text-lg mt-5 lg:my-5 text-zinc-600'>
                        Looking to share your expertise or find the right mentor? Expert Connect by FWC helps you match with verified professionals, gain visibility, and access free Zoom Premium. Let’s grow together!
                    </p>

                    {
                        user === null ? (
                            <button
                                onClick={checkLoginHandler} className='mt-5 cursor-pointer bg-gradient-to-r from-[#1700C8] to-[#0B0062] text-white rounded-full px-5 py-2'>
                                Login Now
                            </button>
                        ) : (
                            user?.role === "member" ? (
                                user && user.expert_connect === "notapplied" ? (
                                    <button
                                        onClick={handleClick} className='mt-5 cursor-pointer bg-gradient-to-r from-[#1700C8] to-[#0B0062] text-white rounded-full px-5 py-2'>
                                        Request a Match
                                    </button>

                                ) : (
                                    <button
                                        className='mt-5 cursor-pointer bg-gradient-to-r from-[#1700C8] to-[#0B0062] text-white rounded-full px-5 py-2'>
                                        Successfuly applied
                                    </button>
                                )
                            ) : (
                                <button className='mt-5 cursor-pointer bg-gradient-to-r from-[#1700C8] to-[#0B0062] text-white rounded-full px-5 py-2'>
                                    <Link to={'/partner'} >Become a member</Link>
                                </button>
                            )
                        )
                    }
                </div>
                <div className="hero-image mt-10 lg:w-full lg:h-[50vh] lg:mt-0 lg:px-10 overflow-hidden">
                    <img src="/images/Spotlight/expert.jpeg" alt="Expert Connect" className='w-full h-full object-contain rounded-md' />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8 text-center px-10 bg-[#F6F5FD]">
                {
                    systum.map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-2 py-5 bg-white rounded-md">
                            <div className="img-wrapper rounded-full size-28 p-5 overflow-hidden">
                                <img className='size-full object-contain' src={item.image} alt={item.name} />
                            </div>
                            <h3 className="font-bold">{item.name}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))
                }
            </div>

            <div className="threeSimpleSteps h-fit w-full bg-[#F6F5FD] lg:py-10">
                <h1 className='text-center text-xl lg:text-3xl font-semibold'>Just Three Steps to Get Started</h1>
                <div className="steps py-10 flex flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-center lg:gap-10">
                    <div className="num1 center flex-col">
                        <div className="circle center size-20 rounded-full border-[2px]">1</div>
                        <h1 className='text-xl font-semibold mt-5'>Fill Details</h1>
                        <p className='text-lg'>Tell us about your expertise</p>
                    </div>
                    <div className="Arrow"></div>
                    <div className="num1 center flex-col">
                        <div className="circle center size-20 rounded-full border-[2px]">2</div>
                        <h1 className='text-xl font-semibold mt-5'>We Review</h1>
                        <p className='text-lg'>72-hour verification</p>
                    </div>
                    <div className="Arrow"></div>
                    <div className="num1 center flex-col">
                        <div className="circle center size-20 rounded-full border-[2px]">3</div>
                        <h1 className='text-xl font-semibold mt-5'>Get Connected</h1>
                        <p className='text-lg'>Start collaborating instantly</p>
                    </div>
                </div>
            </div>

            <div className="w-full h-fit py-20 center px-5 md:px-20 bg-[url('/images/zoomprem/bgdot.png')] bg-cover bg-center">
                <div className="h-fit lg:w-[50%] space-y-5 lg:space-y-10 text-center">
                    <h1 className='font-bold text-2xl md:text-4xl lg:text-5xl'>Why Wait? Connect Today</h1>
                    <h2 className='font-bold text-lg lg:text-2xl'>Your Expertise is Valuable</h2>
                    <h2 className='font-bold text-lg lg:text-xl my-5'>Build Relationships that Matter</h2>
                    <p className='font-light text-sm lg:text-lg'>
                        No network? No visibility? No worries. Expert Connect helps you grow your presence, collaborate with like-minded professionals, and make real impact. Join now—your expert journey begins here.
                    </p>
                </div>
            </div>
            <HomeFooter />
        </>
    )
}

export default ExpertConnectHomePage
