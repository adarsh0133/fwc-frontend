import React, { useEffect, useState } from 'react'
import Nav from '../Home/Nav'
import HomeFooter from '../Home/HomeFooter'
import PopUpForm from '../../UI/PopUpForm';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitSpotlightBoost } from '../../store/Actions/partnerAction';
import { toast } from 'react-toastify';

const SpotlightBoost = () => {
    const { user } = useSelector(state => state.user);
    const isAuth = useSelector((state) => state.user.isAuth);
    const navigate = useNavigate();
    const [loading, setloading] = useState(false);
    const dispatch = useDispatch();

    const checkLoginHandler = () => {
        if (!isAuth) {
            window.alert("Please login first");
            navigate("/login", { state: { from: `/spotlight-boost` } });
            return;
        }
    };

    const [popup, setPopup] = useState(false);

    const handleFormSubmit = async (formData) => {
        const requiredFields = fields.filter((field) => !field.hidden);
        const emptyFields = requiredFields.filter((field) => {
            const value = formData[field.name];

            if (field.type === 'file') {
                return false; // optional or already handled differently
            }

            if (typeof value === 'string') {
                return !value.trim();
            }

            // Handle select or other types with default empty string
            return !value;
        });

        if (emptyFields.length > 0) {
            const fieldNames = emptyFields.map((field) => field.label).join(', ');
            window.alert(`Please fill the required fields: ${fieldNames}`);
            setloading(false);
            return;
        }
        setloading(false);

        try {
            setloading(true);
            await dispatch(submitSpotlightBoost(formData));
            alert("Form submitted successfully!");
            setloading(false);
            navigate("/");
        } catch (error) {
            toast.error(error.response.data.message);
        }
        setPopup(false);
    };

    const [fields, setFields] = useState([
        { name: 'userId', type: 'text', label: 'User ID:', placeholder: 'User ID', value: '', hidden: true },
        { name: 'name', type: 'text', label: 'Business/Product Name', placeholder: 'Enter your Business/Product name', value: '' },
        {
            name: 'promote', type: 'select', label: 'What Do You Want to Promote?', placeholder: 'Select an Option', value: '', options: [
                { value: '', label: 'Select an Option' },
                { value: 'business', label: 'My Business' },
                { value: 'product', label: 'A Product' },
                { value: 'idea', label: 'An Idea' },
                { value: 'others', label: 'Others' }
            ]
        },
        { name: 'feature', type: 'textarea', label: 'Why Should We Feature You?', placeholder: 'Tell us what makes your business/idea special!', value: '' },
        { name: 'link', type: 'input', label: 'Your Website or Product link', placeholder: 'paste here', value: '' },
        { name: 'file', type: 'file', label: 'Upload a File (Optional)', placeholder: 'Upload a file or drag and drop pdf/jpeg/word up to 5MB', value: '' }
    ]);

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
            <Nav />
            <div className="homepage w-full h-screen bg-amber-50 center flex-col px-5 text-center md:px-20">
                <h1 className='text-3xl lg:text-5xl font-bold'>FWC <span className='text-[#000DFF]'>Spotlight Boost</span></h1>
                <h1 className='text-3xl lg:text-5xl font-bold my-3'>Get Your Business in the Spotlight</h1>
                <h2 className='text-xl lg:text-2xl font-bold mt-2'>Shine Bright with Spotlight Boost</h2>
                <p className='text-lg leading-6 mt-3 lg:w-1/2'>Step into the limelight with FWC’s Spotlight Boost! As a member, you’ve already joined the revolution—now let us amplify your story. Apply to showcase your business, idea, or product to our global community. Approved? We’ll blast it across our social channels, newsletters, and app—because your success is our mission.</p>
                {
                    !isAuth ? (
                        <button onClick={checkLoginHandler} className='mt-5 cursor-pointer bg-[#020F2F] text-white rounded-full px-5 py-2'>Become a Member</button>
                    ) : (
                        <button onClick={() => setPopup(true)} className='mt-5 cursor-pointer bg-[#020F2F] text-white rounded-full px-5 py-2'>Apply Now</button>
                    )
                }
            </div>
            {popup && (
                user.role === 'member' ? (
                    <PopUpForm
                        setpopup={setPopup}
                        // fields={fields.filter((field) => !field.hidden)}
                        fields={fields}
                        setFields={setFields}
                        onSubmit={handleFormSubmit}
                        loading={loading}
                    >
                        <h2 className="text-xl font-bold text-center">Spotlight Application Form</h2>
                        <p className="text-sm text-gray-600 mt-2 text-center">
                            Since you’re already an FWC member, we’ve got most of your details. Just answer a few quick questions to get started. Ready to stand out?
                        </p>
                        <p className="text-xs text-gray-500 mt-4">
                            We’ll review your application and notify you within 7 days. Approved? Get ready to shine!
                        </p>
                    </PopUpForm>
                ) :
                    (
                        (() => {
                            window.alert("Only members can apply for Spotlight Boost.");
                            setPopup(false);
                            return null;
                        })()
                    ))}


            <div className="howItWorks w-full h-fit px-5 bg-[#DFDCFF] py-10 md:px-20 lg:px-40 lg:flex lg:justify-evenly lg:items-center lg:h-[80vh] lg:gap-36">
                <div className="img-container w-full h-[45vh] overflow-hidden rounded-md lg:w-[45%] lg:h-[60vh]">
                    <img className='w-full h-full object-cover' src="/images/Spotlight/sb.png" alt="" />
                </div>
                <div className="lg:w-[45%]">
                    <h1 className='text-3xl font-bold my-3'>How It Works</h1>
                    <p className='text-lg leading-6 mt-3'>Transform your business journey with our simple three-step process. Join the elite group of featured businesses making waves in the industry.</p>
                    <h2 className='text-xl font-bold mt-10'>1. Apply</h2>
                    <p className='leading-6 mt-3 text-zinc-500'>Fill out our quick form below—takes 2 minutes! Share your business story and vision with us.</p>
                    <h2 className='text-xl font-bold mt-5'>2. Review</h2>
                    <p className='leading-6 mt-3 text-zinc-500'>Our team carefully evaluates each application, selecting the most innovative and impactful ideas.</p>
                    <h2 className='text-xl font-bold mt-5'>3. Shine</h2>
                    <p className='leading-6 mt-3 text-zinc-500'>Watch your business light up across our platforms, reaching thousands of potential customers.</p>
                </div>
            </div>
            <HomeFooter />
        </>
    )
}

export default SpotlightBoost