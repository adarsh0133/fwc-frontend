import React, { useEffect, useState } from 'react'
import Nav from '../Home/Nav'
import HomeFooter from '../Home/HomeFooter'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import PopUpForm from '../../UI/PopUpForm';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { currentUser } from '../../store/Actions/userAction';
import { submitYuvaShaktiForm } from '../../store/Actions/yuvaShaktiActions';
import { toast } from 'react-toastify';

const YuvaSakti = () => {
    const isAuth = useSelector((state) => state.user.isAuth);
    const { user } = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [fields, setFields] = useState([
        { name: 'userId', type: 'text', label: 'User ID:', placeholder: 'User ID', value: '', hidden: true },
        { name: 'name', type: 'text', label: 'Enter Your Name:', value: '', placeholder: 'Enter Your Name' },
        { name: 'description', type: 'textarea', label: 'Enter Description:', value: '', placeholder: 'Enter Description' },
        { name: 'city', type: 'text', label: 'Enter Your City:', value: '', placeholder: 'Enter Your City' },
        { name: 'country', type: 'text', label: 'Enter Your Country:', value: '', placeholder: 'Enter Your Country' },
        { name: 'whatsappNumber', type: 'phone', label: 'Enter Your Number:', value: '', placeholder: 'Enter Your Number' },
        { name: 'socialMedia', type: 'text', label: 'Enter Your Socialmedia:', value: '', placeholder: 'Enter Your Socialmedia' },
        { name: 'education', type: 'select', label: 'Select Education:', value: '', options: [{ value: 'School/Student', label: 'School/Student' }, { value: 'College/Student', label: 'College/Student' }, { value: 'Professional', label: 'Professional' }]
        }
    ]);

    const imgs = Array.from({ length: 10 }, (_, index) => ({
        img: `/images/vertices/yuvaShakti/swiperimg/img${index + 1}.png`,
    }));

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

    const checkLoginHandler = () => {
        if (!isAuth) {
            window.alert("Please login first");
            navigate("/login", { state: { from: `/vertices/yuva-shakti-international` } });
            return;
        }
    };

    const handleFormSubmit = async (formData) => {
        const requiredFields = fields.filter((field) => !field.hidden); // Exclude hidden fields
        const emptyFields = requiredFields.filter((field) => !formData[field.name]?.trim());

        if (emptyFields.length > 0) {
            const fieldNames = emptyFields.map((field) => field.label).join(', ');
            window.alert(`Please fill the required fields: ${fieldNames}`);
            return;
        }

        try {
            await dispatch(submitYuvaShaktiForm(formData));
            alert("Form submitted successfully!");
            navigate("/");
        } catch (error) {
            toast.error(error.response.data.message);
        }
        console.log('Form Data:', formData);
        setpopup(false);
    };

    return (
        <>
            {popup && (
                <PopUpForm
                    setpopup={setpopup}
                    setFields={setFields}
                    fields={fields.filter((field) => !field.hidden)} // Exclude hidden fields like userId
                    onSubmit={(formData) => handleFormSubmit({ ...formData, userId: user._id })} // Include userId in the submission
                />
            )}
            <Nav />
            <div className="w-full">
                <div className="w-full h-fit pt-40 md:pt-23 text-zinc-900 flex flex-col justify-center items-center gap-20 lg:gap-12 lg:overflow-hidden">
                    <div className="flex flex-col justify-center items-center w-full px-5">
                        <h1 className='text-4xl md:text-6xl lg:w-1/2 font-bold text-center lg:mt-10'>FWC Yuvashakti International</h1>
                        <p className='text-center text-xs lg:w-1/2 text-zinc-600 mt-5 font-medium'>Led by CK Ashok Kumar and inspired by Sachet Revolution pioneer Chinnikrishnan, we empower India’s youth with mentorship, skills, and opportunities. Backed by the CK family’s legacy (CavinKare, Naturals, Velvette, Chik Shampoo) and partnerships like Zoho YEP, we foster training, jobs, and entrepreneurship, shaping future leaders.</p>
                        {
                            !isAuth ? (
                                <button onClick={checkLoginHandler} className='mt-5 cursor-pointer bg-[#020F2F] text-white rounded-full px-5 py-2'>Become a Member</button>
                            ) : (
                                <button onClick={openpopup} className='mt-5 cursor-pointer bg-[#020F2F] text-white rounded-full px-5 py-2'>Become a Member</button>
                            )
                        }
                    </div>
                    <div className="w-full lg:w-[70%] lg:">
                        <img src="/images/vertices/yuvaShakti/yuvashaktihero.png" alt="" />
                    </div>
                </div>
                <div className="founder-chairman w-full h-fit bg-radial-[at_50%_75%] from-[#00113B] via-[#000d2d] to-[#00040e] to-90% px-5 text-white md:flex md:items-center md:gap-10">
                    {/* <div className="founder py-10 space-y-5 md:p-20">
                        <h1 className='text-2xl font-bold text-center'>Founder & Chairman</h1>
                        <div className="founder-img w-full">
                            <img className='w-full h-full object-cover' src="/images/vertices/yuvaShakti/ys-cksir.png" alt="" />
                        </div>
                        <p className='text-sm font-bold text-center'>One World | One Community | One Future</p>
                    </div> */}
                    <div className="founder py-5 space-y-5 md:p-20">
                        <h1 className='text-2xl font-bold text-center'>President</h1>
                        <div className="founder-img w-full sm:w-[70%] sm:mx-auto lg:w-[50%]">
                            <img className='w-full h-full object-cover' src="/images/vertices/yuvaShakti/president.png" alt="" />
                        </div>
                        <p className='text-sm font-bold text-center'>Helping Students in Crossing their Skylimits</p>
                    </div>
                </div>
                <div className="highlights w-full h-fit px-5 pb-20 md:pb-10 md:px-20 lg:px-56">
                    <h1 className='text-2xl lg:text-3xl font-bold text-center py-10'>Last one year highlights </h1>
                    <div className="img-slider w-full h-[40vh] md:h-[60vh] overflow-hidden">
                        <Swiper
                            spaceBetween={20} // Slides ke beech 20px ka gap hoga
                            slidesPerView={1} // Ek time pe ek hi slide dikhega
                            pagination={{ clickable: true }} // Pagination dots clickable honge
                            autoplay={{ delay: 1000, disableOnInteraction: false }} // ⬅️ Autoplay enabled
                            modules={[Pagination, Autoplay]} // ⬅️ Modules me add kiya
                            loop={true} // ⬅️ Loop enable kiya taki smooth transition ho
                        >
                            {
                                imgs.map((i, index) => (
                                    <SwiperSlide key={index}>
                                        <img className='w-full h-[40vh] md:h-[60vh] object-contain' src={i.img} alt="" />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
                <div className="yashobhoomi w-full h-fit py-10 lg:flex lg:px-20 lg:gap-10 lg:items-center lg:justify-center lg:bg-radial-[at_50%_75%] from-[#00113B] via-[#000d2d] to-[#00040e] to-90%">
                    <div className="yasho-img w-full lg:w-1/2">
                        <img className='w-full object-cover' src="/images/vertices/yuvaShakti/ysaho.png" alt="" />
                    </div>
                    <div className="yasho-text px-5 space-y-5 lg:w-1/2">
                        <div className="lg:text-white">
                            <h1 className='text-xl font-bold'>The Journey Begins at</h1>
                            <h1 className='text-2xl font-bold'>Yashobhoomi Convention Centre, Delhi</h1>
                        </div>
                        <p className='text-sm text-zinc-500 lg:text-zinc-300 font-medium'>On June 30, at Asia’s Biggest Convention Centre, Yashobhoomi, in front of hundreds of startups, government officials, and global delegates, we ignited a revolution—FWC Yuva Shakti.</p>
                        <p className='text-sm text-zinc-500 lg:text-zinc-300 font-medium'>Inspired by the legendary Chinni Krishnan, the father of the Sachet Revolution, whose vision transformed industries and lives, Krishna Thakur has dedicated his life to youth empowerment and nation-building. Appointed as the President of FWC Yuva Shakti, Krishna—already a national hero who has empowered thousands of students and founded the global organization Cross the Skylimits—is leading this movement to create a new wave of young leaders, innovators, and changemakers.</p>
                        <p className='text-sm text-zinc-500 lg:text-zinc-300 font-medium'>This is just the beginning of the Yuva Shakti revolution—a movement that will reshape the future of India and the world!</p>
                    </div>
                </div>
            </div>
            <HomeFooter />
        </>
    )
}

export default YuvaSakti