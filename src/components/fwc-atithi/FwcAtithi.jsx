import React, { useEffect, useState } from 'react'
import Nav from '../Home/Nav'
import HomeFooter from '../Home/HomeFooter'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PopUpForm from '../../UI/PopUpForm';
import { submitAtithiDetails } from '../../store/Actions/partnerAction';

const FwcAtithi = () => {
    const { user } = useSelector(state => state.user);
    const isAuth = useSelector((state) => state.user.isAuth);
    const [loading, setloading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const checkLoginHandler = () => {
        if (!isAuth) {
            window.alert("Please login first");
            navigate("/login", { state: { from: `/vertices/yuva-shakti-international` } });
            return;
        }
    };

    const handleFormSubmit = async (formData) => {
        setloading(true);
        const requiredFields = fields.filter((field) => !field.hidden); // Exclude hidden fields
        const emptyFields = requiredFields.filter((field) => !formData[field.name]?.trim());

        if (emptyFields.length > 0) {
            const fieldNames = emptyFields.map((field) => field.label).join(', ');
            window.alert(`Please fill the required fields: ${fieldNames}`);
            setloading(false);
            return;
        }
        setloading(false);

        try {
            setloading(true);
            await dispatch(submitAtithiDetails(formData));
            alert("Form submitted successfully!");
            setloading(false);
            navigate("/");
        } catch (error) {
            toast.error(error.response.data.message);
        }
        console.log('Form Data:', formData);
        setpopup(false);
    };

    const start = [{
        title: "Join FWC Akhiti",
        desc: "Fill in your basic details and travel plans to get started with our community.",
        img: "/images/vertices/eduastra/start1.png"
    },
    {
        title: "Connect Instantly",
        desc: "Your request reaches all FWC members in your destination city immediately.",
        img: "/images/vertices/eduastra/start2.png"
    },
    {
        title: "Get Approved",
        desc: "Available members will approve your request and offer their support.",
        img: "/images/vertices/eduastra/start3.png"
    },
    {
        title: "Collaborate",
        desc: "Connect directly with approved members for accommodation and networking.",
        img: "/images/vertices/eduastra/start3.png"
    },
    ]

    const benefits = [{
        title: "Free Accommodation",
        desc: "Stay with fellow members and save on accommodation costs while traveling. ",
        img: "/images/vertices/eduastra/start1.png"
    },
    {
        title: "Instant Connections",
        desc: "Connect with local members who are ready to support your journey.",
        img: "/images/vertices/eduastra/start2.png"
    },
    {
        title: "Exclusive Networking",
        desc: "Build powerful connections across various industries and backgrounds.",
        img: "/images/vertices/eduastra/start3.png"
    },
    {
        title: "Local Insights",
        desc: "Get personalized recommendations from locals who know their city best.",
        img: "/images/vertices/eduastra/start3.png"
    },
    ]

    const cards = [{
        title: "Travel with Purpose",
        description: "Join a community of like-minded travelers who share your passion for exploration.",
        image: "/images/vertices/eduastra/card1.png"
    },
    {
        title: "Empower Local Communities",
        description: "Support local members by staying with them and contributing to their economy.",
        image: "/images/vertices/eduastra/card2.png"
    },
    {
        title: "Global Network",
        description: "Expand your network and connect with members from around the world.",
        image: "/images/vertices/eduastra/card3.png"
    },
    ]

    const [fields, setFields] = useState([
        { name: 'userId', type: 'text', label: 'User ID:', placeholder: 'User ID', value: '', hidden: true },
        { name: 'travelerName', type: 'text', label: 'Traveler Name:', value: '', placeholder: 'Enter your travel name' },
        { name: 'travelerEmail', type: 'text', label: 'Traveler Email:', value: '', placeholder: 'Enter your travel email' },
        { name: 'destinationCity', type: 'text', label: 'Destination city', value: '', placeholder: 'Enter your destination city' },
        { name: 'arrivalDate', type: 'date', label: 'Arrival Date:', value: '', placeholder: 'Enter your arrival date' },
        { name: 'departureDate', type: 'date', label: 'Departure Date:', value: '', placeholder: 'Enter your  Departure Date' },
        { name: 'purpose', type: 'text', label: ' Purpose:', value: '', placeholder: 'Enter your Purpose' },
        {
            name: 'food', type: 'select', label: 'Food:', value: '', options: [{ value: '', label: 'not selected' }, { value: 'Veg', label: 'veg' }, { value: 'Non-Veg', label: 'non-veg' }, { value: 'Both', label: 'Both' }]
        },
        { name: 'additionalNotes', type: 'textarea', label: 'Additional Notes:', value: '', placeholder: 'Start additional notes' },
    ]);

    const [popup, setpopup] = useState(false);

    const openpopup = () => {
        setpopup(true);
    }

    useEffect(() => {
        if (user) {
            setFields((prevFields) =>
                prevFields.map((field) =>
                    field.name === 'userId'
                        ? { ...field, value: user._id || '' } // Ensure value is never undefined
                        : field.name === 'name'
                            ? { ...field, value: user.name || '' } // Ensure value is never undefined
                            : field
                )
            );
        }
    }, [user]);
    return (
        <>
            {popup && (
                user.role === 'member' ? (
                    <PopUpForm
                        setpopup={setpopup}
                        setFields={setFields}
                        fields={fields.filter((field) => !field.hidden)} // Exclude hidden fields like userId
                        loading={loading}
                        onSubmit={(formData) => handleFormSubmit({ ...formData, userId: user._id })} // Include userId in the submission
                    />
                ) : (
                    (() => {
                        window.alert("Only members can apply for FWC Atithi");
                        setpopup(false);
                        return null; // Return null to avoid rendering anything
                    })()
                )
            )}
            <Nav />
            <div className="w-full h-fit lg:h-screen px-5 pt-28 pb-5 lg:flex lg:px-10 lg:pt-40 lg:pb-20  ">
                <div className="hero-text lg:w-1/2 lg:px-10">
                    <h1 className='text-2xl lg:text-5xl font-bold leading-8 lg:leading-10 lg:mt-5'>FWC  Atithi</h1>
                    <h2 className='text-2xl lg:text-2xl font-bold leading-8 lg:leading-10 mt-2'>Your Gateway to Connection, Support, and New Horizons</h2>
                    <p className='text-sm lg:text-lg  mt-5 lg:my-5 text-zinc-600'>Join FWC Akhiti and become part of a global community where travelers connect, share experiences, and support each other's journeys.</p>
                    <p className='text-sm lg:text-lg  mt-5 lg:my-5 text-zinc-600'>At FWC, we believe in the power of community and connection. The FWC Atithi program is an exclusive, innovative platform designed to help our members travel, connect, and grow. It's not just about accommodation – it's about forming meaningful relationships, learning from each other, and creating opportunities for mutual success.</p>
                    {
                        !isAuth ? (
                            <button onClick={checkLoginHandler} className='mt-5 cursor-pointer bg-[#020F2F] text-white rounded-full px-5 py-2'>Become a Member</button>
                        ) : (
                            <button onClick={openpopup} className='mt-5 cursor-pointer bg-[#020F2F] text-white rounded-full px-5 py-2'>Apply For FWC Atithi</button>
                        )
                    }
                </div>
                <div className="hero-image mt-10 lg:w-1/2 lg:h-[50vh] lg:mt-0 lg:px-10 overflow-hidden">
                    <img src="/images/fwc-atithi/home.png" alt="atithi" className='w-full h-full object-cover rounded-md' />
                </div>
            </div>
            <div className="learning-approch w-full h-fit lg:h-screen px-5 py-10 bg-radial-[at_50%_75%] from-[#00113B] via-[#000d2d] to-[#00040e] to-90% lg:flex lg:flex-col lg:items-center lg:justify-evenly">
                <div className="approch-text lg:flex lg:flex-col  lg:items-center">
                    <p className='text-xs lg:text-xl lg:w-1/3 text-zinc-300 mt-2 text-center'>How It Works</p>
                    <h1 className='text-xl lg:text-2xl font-bold text-nowrap text-center text-white '>Simple Steps to Get Started</h1>
                    <div className="text-wrapper w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-12 lg:gap-20 mt-10 gap-5 ">
                        {
                            start.map((item, i) => (
                                <div key={i} className="w-full flex bg-white h-fit py-5 lg:py-10 rounded-md">
                                    <div className="img-container w-[25%] px-4 pt-1">
                                        <img className='w-[70%]' src={item.img} alt="" />
                                    </div>
                                    <div className="w-[75%]">
                                        <h1 className='text-xl font-bold'>{item.title}</h1>
                                        <p className='text-sm leading-none mt-2 text-zinc-500'>{item.desc}</p>
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
                            benefits.map((item, i) => (
                                <div key={i} className="w-full flex bg-white h-fit py-5 lg:py-10 rounded-md">
                                    <div className="img-container w-[25%] px-4 pt-1">
                                        <img className='w-[70%]' src={item.img} alt="" />
                                    </div>
                                    <div className="w-[75%]">
                                        <h1 className='text-xl font-bold'>{item.title}</h1>
                                        <p className='text-sm leading-none mt-2 text-zinc-500'>{item.desc}</p>
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
                    <img src="/images/fwc-atithi/whyjoin.png" alt="EduAstra" className='w-full h-full object-cover rounded-md' />
                </div>
            </div>
            <div className="learning-approch w-full h-fit px-5 py-10">
                <div className="approch-text lg:flex lg:flex-col lg:gap-5 lg:items-center">
                    <h1 className='text-xl lg:text-4xl font-bold text-nowrap text-center'>Community Stories</h1>
                    <p className='text-xs lg:text-lg lg:w-1/3 text-zinc-500 text-center'>Hear from our members about their experiences with FWC Atithi.</p>
                    <div className="cards-wrapper w-full py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-12 lg:gap-20 gap-5">
                        {
                            cards.map((item, index) => (
                                <div key={index} className="w-full flex flex-col gap-3 p-5 bg-radial-[at_50%_75%] from-[#00113B] via-[#000d2d] to-[#00040e] to-90% text-white rounded-md">
                                    <div className="flex">
                                        <div className="img-container size-20 w-[20%] rounded-full overflow-hidden">
                                            <img className='size-full object-cover' src={item.image} alt="" />
                                        </div>
                                        <div className="ml-3 w-[80%]">
                                            <h1 className='text-lg font-bold'>{item.title}</h1>
                                            <p className='text-sm text-zinc-300'>lalala</p>
                                        </div>
                                    </div>
                                    <p className='text-sm text-zinc-300 mt-4'>{item.description}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
            <HomeFooter />
        </>
    )
}

export default FwcAtithi