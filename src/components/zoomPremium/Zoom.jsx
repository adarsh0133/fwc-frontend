import React, { useEffect, useState } from 'react'
import HomeFooter from '../Home/HomeFooter'
import Nav from '../Home/Nav'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitZoomPremium } from '../../store/Actions/partnerAction';
import { currentUser } from '../../store/Actions/userAction';

const Zoom = () => {
    const { user } = useSelector(state => state.user);
    const isAuth = useSelector((state) => state.user.isAuth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setloading] = useState(false);

    const systum = [
        {
            name: 'Free Zoom Premium',
            description: 'Host 300+ attendees with no time limits',
            image: '/images/vertices/ayush/ayurveda.webp'
        },
        {
            name: 'FWC Promotion',
            description: 'Reach thousands of potential attendees',
            image: '/images/vertices/ayush/unani.webp'
        },
        {
            name: 'Pro Support',
            description: 'Expert team handles every detail',
            image: '/images/vertices/ayush/siddha.webp'
        },
        {
            name: 'Free Zoom Premium',
            description: 'Host 300+ attendees with no time limits',
            image: '/images/vertices/ayush/yoga.webp'
        },
    ]
    const [formData, setFormData] = useState({
        userId: '',
        type: '',
        title: '',
        date: '',
        description: '',
        audience: '',
        thumbnail: null,
    });

    useEffect(() => {
        if (user) {
            setFormData((prevInput) => ({
                ...prevInput,
                userId: user._id,
                name: user.name,
            }));
        }
    }, [user]);

    const [thumbnailError, setThumbnailError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                setThumbnailError('File size exceeds 5MB');
                return;
            }
            setThumbnailError('');
            setFormData((prev) => ({
                ...prev,
                thumbnail: file,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true);
        await dispatch(submitZoomPremium(formData));
        setFormData({
            userId: "",
            title: "",
            type: "",
            description: "",
            audience: "",
            date: "",
            thumbnail: {
                fileId: "",
                url: ""
            }
        });
        setloading(false);
        alert('Form submitted successfully!');
    };

    const checkLoginHandler = () => {
        if (!isAuth) {
            window.alert("Please login first");
            navigate("/login", { state: { from: `/zoom-premium` } });
            return;
        }
        dispatch(currentUser());
    };

    return (
        <>
            <Nav />
            <div className="w-full h-fit lg:h-screen px-5 pt-28 pb-5 lg:flex lg:px-10 lg:pt-40 lg:pb-20 bg-[#F6F5FD]">
                <div className="hero-text lg:w-1/2 lg:px-10">
                    <h1 className='text-2xl lg:text-5xl font-bold leading-8 lg:leading-10 lg:mt-5'>Unleash Epic Online Events</h1>
                    <h2 className='text-2xl lg:text-2xl font-semibold leading-8 lg:leading-10 mt-4'>Your Idea, Our Firepower</h2>
                    <p className='text-sm lg:text-lg  mt-5 lg:my-5 text-zinc-600'>Ready to rock the online world? FWC Stage Igniter turns your class, webinar, or event into a pro-level hit. Free Zoom Premium, promo to thousands, and a team to make it flawless—ignite your stage and own the spotlight!</p>
                    <button className='mt-5 cursor-pointer bg-gradient-to-r from-[#1700C8] to-[#0B0062] text-white rounded-full px-5 py-2'>
                        <a href="#formpage">
                            Become a Member
                        </a>
                    </button>
                </div>
                <div className="hero-image mt-10 lg:w-1/2 lg:h-[50vh] lg:mt-0 lg:px-10 overflow-hidden">
                    <img src="/images/fwc-atithi/home.webp" alt="atithi" className='w-full h-full object-cover rounded-md' />
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
                    <h1 className='text-center text-xl lg:text-3xl font-semibold'>Three Simple Steps to Success</h1>
                    <div className="steps py-10 flex flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-center lg:gap-10">
                        <div className="num1 center flex-col">
                            <div className="circle center size-20 rounded-full border-[2px] ">1</div>
                            <h1 className='text-xl font-semibold mt-5'>Submit Details</h1>
                            <p className='text-lg'>Share your event vision</p>
                        </div>
                        <div className="Arrow"></div>
                        <div className="num1 center flex-col">
                            <div className="circle center size-20 rounded-full border-[2px] ">2</div>
                            <h1 className='text-xl font-semibold mt-5'>We Setup</h1>
                            <p className='text-lg'>72hr approval process</p>
                        </div>
                        <div className="Arrow"></div>
                        <div className="num1 center flex-col">
                            <div className="circle center size-20 rounded-full border-[2px] ">3</div>
                            <h1 className='text-xl font-semibold mt-5'>Go Live</h1>
                            <p className='text-lg'>Share your event vision</p>
                        </div>
                    </div>
                </div>

            <div id='formpage' className="form-age w-full py-10">
                <h1 className='text-2xl font-semibold text-center lg:text-3xl'>Ignite Your Stage</h1>
                <p className='text-sm text-center text-zinc-600'>Drop Your Event Deets</p>
                <form
                    onSubmit={handleSubmit}
                    className="max-w-3xl mx-auto bg-white p-5 rounded-lg shadow-md space-y-5 border mt-5 border-gray-300"
                >
                    {/* Event Type */}
                    <div className="flex flex-col">
                        <label htmlFor="eventType" className="text-sm font-medium mb-1">
                            Event Type
                        </label>
                        <select
                            name="type"
                            id="eventType"
                            value={formData.type}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus-within:ring-2 ring-blue-500"
                            required
                        >
                            <option value="">Select Event Type</option>
                            <option value="Class">Class</option>
                            <option value="Webinar">Webinar</option>
                            <option value="Event">Event</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>

                    {/* Event Title */}
                    <div className="flex flex-col">
                        <label htmlFor="eventTitle" className="text-sm font-medium mb-1">
                            Event Title
                        </label>
                        <input
                            type="text"
                            name="title"
                            id="eventTitle"
                            placeholder="e.g., Startup Secrets Webinar"
                            value={formData.title}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus-within:ring-2 ring-blue-500"
                            required
                        />
                    </div>

                    {/* Date */}
                    <div className="flex flex-col">
                        <label htmlFor="date" className="text-sm font-medium mb-1">
                            Date
                        </label>
                        <input
                            type="date"
                            name="date"
                            id="date"
                            value={formData.date}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus-within:ring-2 ring-blue-500"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div className="flex flex-col">
                        <label htmlFor="description" className="text-sm font-medium mb-1">
                            Description
                        </label>
                        <textarea
                            name="description"
                            id="description"
                            placeholder="Describe your event"
                            value={formData.description}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus-within:ring-2 ring-blue-500"
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    {/* Audience Goal */}
                    <div className="flex flex-col">
                        <label htmlFor="audienceGoal" className="text-sm font-medium mb-1">
                            Audience Goal
                        </label>
                        <select
                            name="audience"
                            id="audienceGoal"
                            value={formData.audience}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus-within:ring-2 ring-blue-500"
                            required
                        >
                            <option value="">Select Audience Goal</option>
                            <option value="<50">&lt;50</option>
                            <option value="50-100">50-100</option>
                            <option value="100+">100+</option>
                            <option value="Not sure">Not sure</option>
                        </select>
                    </div>

                    {/* Thumbnail */}
                    <div className="flex flex-col">
                        <label htmlFor="thumbnail" className="text-sm font-medium mb-1">
                            Thumbnail (Optional)
                        </label>
                        <input
                            type="file"
                            name="thumbnail"
                            id="thumbnail"
                            accept="image/jpeg, image/png"
                            onChange={handleFileChange}
                            className="border border-gray-300 rounded-md p-2 focus:outline-none focus-within:ring-2 ring-blue-500"
                        />
                        {thumbnailError && (
                            <p className="text-sm text-red-500 mt-1">{thumbnailError}</p>
                        )}
                        {formData.thumbnail && (
                            <p className="text-sm text-gray-500 mt-1">
                                Selected File: {formData.thumbnail.name}
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        {
                            !isAuth ? (
                                <button onClick={checkLoginHandler} className='mt-5 cursor-pointer bg-[#020F2F] text-white rounded-full px-5 py-2'>Become a Member</button>
                            ) : (
                                loading ? (
                                    <button disabled className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600">Loading...</button>
                                ) : (
                                    <button type="submit" className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600">Ignite Now 🔥</button>
                                )

                            )
                        }

                    </div>
                </form>
            </div>

            <div className="w-full h-fit py-20 center px-5 md:px-20 bg-[url('/images/zoomprem/bgdot.png')] bg-cover bg-center">
                <div className="h-fit lg:w-[50%] space-y-5 lg:space-y-10 text-center">
                    <h1 className='font-bold text-2xl md:text-4xl lg:text-5xl'>Why Wait? Ignite Now</h1>
                    <h2 className='font-bold text-lg lg:text-2xl'>Your Stage Is Hot</h2>
                    <h2 className='font-bold text-lg lg:text-xl my-5'>Make Waves, Not Excuses</h2>
                    <p className='font-light text-sm lg:text-lg'>No crowd? No skills? No sweat. FWC Stage Igniter hands you Zoom Premium, a ready audience, and pro swagger to rule the online game. Apply now—let’s set the world on fire!"</p>
                </div>
            </div>
            <HomeFooter />
        </>
    )
}

export default Zoom