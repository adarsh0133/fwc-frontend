import React, { useState } from 'react'
import Stepper, { Step } from './../../UI/InputsStepper';
import Nav from '../Home/Nav';
import { useDispatch } from 'react-redux';
import { submitInverstorCircleDetails } from '../../store/Actions/investorAction';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const InvestorCircle = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selected, setSelected] = useState("");
    const [formLoading, setformLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        website: "",
        description: "",
        socialMedia: "",
        valuation: "",
        incorporation: "",
        incorporationNumber: "",
        pastInvestment: "",
        fundingRequirement: "",
        fundingUsage: "",
        usp: ""
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name ||
            !formData.website ||
            !formData.description ||
            !formData.socialMedia ||
            !formData.valuation ||
            !formData.incorporation ||
            !formData.incorporationNumber ||
            !formData.pastInvestment ||
            !formData.fundingRequirement ||
            !formData.fundingUsage ||
            !formData.usp) {
            alert("Please fill all the fields to proceed!");
            return;
        }
        setformLoading(true);
        try {
            await dispatch(submitInverstorCircleDetails(formData));
            setformLoading(false);
            alert("Form submitted successfully!")
            navigate("/");
        } catch (error) {
            console.log(error);
            setformLoading(false);
            toast.error(error.response.data.message);
        }

    }
    return (
        <>
             <ToastContainer />
            <Nav />
            <Stepper
                initialStep={1}
                backButtonText="Previous"
                nextButtonText="Next"
            >
                <Step>
                    <div className="flex max-[600px]:flex-col max-[600px]:gap-5 pb-10 pt-10">
                        <div className="1st-step-text text-white w-1/2 max-[600px]:w-full max-[600px]:pr-0 pr-28 ">
                            <h1 className='text-3xl mb-5 font-bold'>Start your <span className='text-[#F3BD02]'>investment Journey</span></h1>
                            <p>Please fill all the details correctly. Our investors will see and check all the details, and if they would like your business, then we will schedule a session with them.</p>
                            <h2 className='mt-5 text-2xl mb-5'>Please type in your name</h2>
                            <input type="text" name="name" onChange={handleChange} value={formData.name} id="" placeholder='Enter your name' className='bg-[#D9D9D9] w-2/3 p-5 focus:border-[#F3BD02] outline-none text-black rounded-lg' />
                        </div>
                        <div className="1st-step-img flex text-white w-1/2 max-[600px]:w-full gap-10  justify-center">
                            <div className="ck-sir-img size-32 rounded-full overflow-hidden">
                                <img className='size-full object-cover' src="/images/investorCircle/cksir.png" alt="" />
                            </div>
                            <div className="some-text w-1/2 mt-4">
                                <p className='leading-tight text-xs text-zinc-300'>"FWC is undoubtedly a valuable investment, and we are committed to continuing our membership for many years to come! I would highly recommend FWC to any business looking to grow, expand its network, and gain valuable knowledge along the way."</p>
                                <h1 className='mt-5 font-semibold'>
                                    <span className='text-[#F3BD02]'>CK Ashok Kumar </span><br />Chairman | First World Community</h1>
                            </div>
                        </div>
                    </div>
                </Step>
                <Step>
                    <div className="flex max-[600px]:flex-col max-[600px]:gap-5 pb-10 pt-10">
                        <div className="1st-step-text text-white w-1/2 max-[600px]:w-full max-[600px]:pr-0 pr-28 ">
                            <h1 className='text-3xl mb-5 font-bold'><span className='text-[#F3BD02]'>Business Website</span> or any online
                                existence</h1>
                            <h2 className='mt-5 text-2xl mb-5'>Please type in your website</h2>
                            <input type="text" name="website" onChange={handleChange} value={formData.website} id="" placeholder='Enter your website link' className='bg-[#D9D9D9] w-2/3 p-5 focus:border-[#F3BD02] outline-none text-black rounded-lg' />
                        </div>
                        <div className="1st-step-img flex text-white w-1/2 max-[600px]:w-full gap-10  justify-center items-center">
                            <div className="ck-sir-img size-32 overflow-hidden">
                                <img className='size-full object-cover' src="/images/investorCircle/laptop.png" alt="" />
                            </div>
                            <div className="some-text w-1/2 mt-4">
                                <p className='leading-tight text-xs text-zinc-300'>A business website or any online presence is essential for building brand credibility, reaching a wider audience, and increasing sales. It serves as a digital storefront, making it easier for customers to explore products or services, connect with the business, and make purchases anytime, anywhere.</p>
                            </div>
                        </div>
                    </div>
                </Step>
                <Step>
                    <div className="flex max-[600px]:flex-col max-[600px]:gap-5 pb-10 pt-10">
                        <div className="1st-step-text text-white w-1/2 max-[600px]:w-full max-[600px]:pr-0 pr-28 ">
                            <h1 className='text-3xl mb-5 font-bold'><span className='text-[#F3BD02]'>Business</span> Description</h1>
                            <h2 className='mt-5 text-2xl mb-5'>Please type in your Description</h2>
                            <textarea type="text" name="description" onChange={handleChange} value={formData.description} id="" placeholder='Write Description' className='bg-[#D9D9D9] w-2/3 h-[30vh] p-5 focus:border-[#F3BD02] outline-none text-black rounded-lg pb-5' />
                        </div>
                        <div className="1st-step-img flex text-white w-1/2 max-[600px]:w-full gap-10  justify-center">
                            <div className="ck-sir-img size-32 rounded-full overflow-hidden">
                                <img className='size-full object-cover' src="/images/investorCircle/desc.png" alt="" />
                            </div>
                            <div className="some-text w-1/2 mt-4">
                                <p className='leading-tight text-xs text-zinc-300'>Our business focuses on providing premium services/products with a vision to deliver quality and innovation. We seek investment to expand operations, enhance customer experience, and drive growth in the competitive market.</p>
                            </div>
                        </div>
                    </div>
                </Step>
                <Step>
                    <div className="flex max-[600px]:flex-col max-[600px]:gap-5 pb-10 pt-10">
                        <div className="1st-step-text text-white w-1/2 max-[600px]:w-full max-[600px]:pr-0 pr-28 ">
                            <h1 className='text-3xl mb-5 font-bold'><span className='text-[#F3BD02]'>Social </span> Media Links</h1>
                            <h2 className='mt-5 text-2xl mb-5'>Please paste in your Social media link</h2>
                            <input type="text" name="socialMedia" onChange={handleChange} value={formData.socialMedia} id="" placeholder='Paste your social  media link' className='bg-[#D9D9D9] w-2/3 p-5 focus:border-[#F3BD02] outline-none text-black rounded-lg' />
                        </div>
                        <div className="1st-step-img flex text-white w-1/2 max-[600px]:w-full gap-10  justify-center items-center">
                            <div className="ck-sir-img size-32 overflow-hidden">
                                <img className='size-full object-cover' src="/images/investorCircle/social.png" alt="" />
                            </div>
                            <div className="some-text w-1/2 mt-4">
                                <p className='leading-tight text-xs text-zinc-300'>Our business is dedicated to delivering high-quality products/services with innovation and excellence. We aim to expand our operations, improve customer satisfaction, and establish a strong market presence. With the right investment, we plan to scale our business, enhance technology, and reach a wider audience. Our goal is to create long-term value for both our customers and investors while maintaining a competitive edge in the industry.</p>
                            </div>
                        </div>
                    </div>
                </Step>
                <Step>
                    <div className="flex max-[600px]:flex-col max-[600px]:gap-5 pb-10 pt-10">
                        <div className="1st-step-text text-white w-1/2 max-[600px]:w-full max-[600px]:pr-0 pr-28 ">
                            <h1 className='text-3xl mb-5 font-bold'><span className='text-[#F3BD02]'>Valuation </span></h1>
                            <h2 className='mt-5 text-2xl mb-5'>Please enter your valuation</h2>
                            <input type="text" name="valuation" onChange={handleChange} value={formData.valuation} id="" placeholder='Enter valuation' className='bg-[#D9D9D9] w-2/3 p-5 focus:border-[#F3BD02] outline-none text-black rounded-lg' />
                        </div>
                        <div className="1st-step-img flex text-white w-1/2 max-[600px]:w-full gap-10  justify-center items-center">
                            <div className="ck-sir-img size-32 overflow-hidden">
                                <img className='size-full object-cover' src="/images/investorCircle/val.png" alt="" />
                            </div>
                            <div className="some-text w-1/2 mt-4">
                                <p className='leading-tight text-xs text-zinc-300'>Our business valuation is based on market potential, revenue growth, and future scalability. We assess factors like assets, brand value, customer base, and projected earnings to determine a fair valuation. With increasing demand and strategic expansion plans, we aim to maximize returns for investors while ensuring sustainable business growth.</p>
                            </div>
                        </div>
                    </div>
                </Step>
                <Step>
                    <div className="flex max-[600px]:flex-col max-[600px]:gap-5 pb-10 pt-10">
                        <div className="1st-step-text text-white w-1/2 max-[600px]:w-full max-[600px]:pr-0 pr-28 ">
                            <h1 className='text-3xl mb-5 font-bold'>Is it <span className='text-[#F3BD02]'>incorporated?</span></h1>
                            <h2 className='mt-5 text-2xl mb-5'>Please enter your valuation</h2>
                            <div className="flex items-center gap-4">
                                <button
                                    className={`p-5 px-7 rounded-lg transition-all duration-300 ${selected === "Yes" ? "bg-blue-600 text-white" : "bg-gray-200 text-black cursor-pointer"
                                        }`}
                                    onClick={() => {
                                        setSelected("Yes");
                                        setFormData({ ...formData, incorporation: "Yes" });
                                    }}
                                >
                                    Yes
                                </button>
                                <button
                                    className={`p-5 px-7 rounded-lg transition-all duration-300 ${selected === "No" ? "bg-blue-600 text-white" : "bg-gray-200 text-black cursor-pointer"
                                        }`}
                                    onClick={() => {
                                        setSelected("No");
                                        setFormData({ ...formData, incorporation: "No" });
                                    }}
                                >
                                    No
                                </button>

                            </div>
                        </div>
                        <div className="1st-step-img flex text-white w-1/2 max-[600px]:w-full gap-10  justify-center items-center">
                            <div className="ck-sir-img size-32 overflow-hidden">
                                <img className='size-full object-cover' src="/images/investorCircle/incor.png" alt="" />
                            </div>
                            <div className="some-text w-1/2 mt-4">
                                <p className='leading-tight text-xs text-zinc-300'>This image features a handshake and a gear with a globe, symbolizing business partnerships, global collaboration, and technological growth. However, it does not indicate incorporation by itself. If you are asking whether a specific company or business is incorporated, that would require checking official registration records. Let me know if you need help with that!</p>
                            </div>
                        </div>
                    </div>
                </Step>
                <Step>
                    <div className="flex max-[600px]:flex-col max-[600px]:gap-5 pb-10 pt-10">
                        <div className="1st-step-text text-white w-1/2 max-[600px]:w-full max-[600px]:pr-0 pr-28 ">
                            <h1 className='text-3xl mb-5 font-bold'>Please add your <span className='text-[#F3BD02]'>Incorporation details</span></h1>
                            <h2 className='mt-10 text-2xl mb-5'>Please enter your incorporation number</h2>
                            <input type="text" name="incorporationNumber" onChange={handleChange} value={formData.incorporationNumber} id="" placeholder='Enter your registration number' className='bg-[#D9D9D9] w-2/3 p-5 focus:border-[#F3BD02] outline-none text-black rounded-lg' />
                        </div>
                        <div className="1st-step-img flex text-white w-1/2 max-[600px]:w-full gap-10  justify-center items-center">
                            <div className="ck-sir-img size-32 overflow-hidden">
                                <img className='size-full object-cover' src="/images/investorCircle/indets.png" alt="" />
                            </div>
                            <div className="some-text w-1/2 mt-4">
                                <p className='leading-tight text-xs text-zinc-300'>Our business is officially incorporated, ensuring legal recognition, credibility, and structured operations. This status allows us to build trust with investors, expand opportunities, and comply with industry regulations for sustainable growth.</p>
                            </div>
                        </div>
                    </div>
                </Step>
                <Step>
                    <div className="flex max-[600px]:flex-col max-[600px]:gap-5 pb-10 pt-10">
                        <div className="1st-step-text text-white w-1/2 max-[600px]:w-full max-[600px]:pr-0 pr-28 ">
                            <h1 className='text-3xl mb-5 font-bold'>Past<span className='text-[#F3BD02]'> investment details.</span></h1>
                            <h2 className='mt-10 text-2xl mb-5'>Please enter your past investment details</h2>
                            <textarea type="text" name="pastInvestment" onChange={handleChange} value={formData.pastInvestment} id="" placeholder='Write your details' className='bg-[#D9D9D9] w-2/3 h-[30vh] p-5 focus:border-[#F3BD02] outline-none text-black rounded-lg pb-5' />
                        </div>
                        <div className="1st-step-img flex text-white w-1/2 max-[600px]:w-full gap-10  justify-center">
                            <div className="ck-sir-img size-32 overflow-hidden">
                                <img className='size-full object-cover' src="/images/investorCircle/investDets.png" alt="" />
                            </div>
                            <div className="some-text w-1/2 mt-4">
                                <p className='leading-tight text-xs text-zinc-300'>Our business has previously secured funding through self-investment, angel investors, or venture capital (if applicable). These investments have been utilized for product development, branding, and market expansion, helping us achieve steady growth and establish a strong market presence.</p>
                            </div>
                        </div>
                    </div>
                </Step>
                <Step>
                    <div className="flex max-[600px]:flex-col max-[600px]:gap-5 pb-10 pt-10">
                        <div className="1st-step-text text-white w-1/2 max-[600px]:w-full max-[600px]:pr-0 pr-28 ">
                            <h1 className='text-3xl mb-5 font-bold'><span className='text-[#F3BD02]'>Funding</span> required</h1>
                            <h2 className='mt-14 text-2xl mb-5'>Please enter your requirment</h2>
                            <input type="text" name="fundingRequirement" onChange={handleChange} value={formData.fundingRequirement} id="" placeholder='Enter you requirements' className='bg-[#D9D9D9] w-2/3 p-5 focus:border-[#F3BD02] outline-none text-black rounded-lg' />
                        </div>
                        <div className="1st-step-img flex text-white w-1/2 max-[600px]:w-full gap-10  justify-center ">
                            <div className="ck-sir-img size-32 overflow-hidden">
                                <img className='size-full object-cover' src="/images/investorCircle/req.png" alt="" />
                            </div>
                            <div className="some-text w-1/2 mt-4">
                                <p className='leading-tight text-xs text-zinc-300'>Funding Required: <br />We seek funding to accelerate business growth, expand operations, and enhance technology. The required investment will support product development, marketing, infrastructure, and team expansion, ensuring long-term scalability and profitability.</p>
                            </div>
                        </div>
                    </div>
                </Step>
                <Step>
                    <div className="flex max-[600px]:flex-col max-[600px]:gap-5 pb-10 pt-10">
                        <div className="1st-step-text text-white w-1/2 max-[600px]:w-full max-[600px]:pr-0 pr-28 ">
                            <h1 className='text-3xl mb-5 font-bold'>How will you be using that <span className='text-[#F3BD02]'>funding</span> and where?</h1>
                            <h2 className='mt-14 text-2xl mb-5'>Please enter your answer</h2>
                            <input type="text" name="fundingUsage" onChange={handleChange} value={formData.fundingUsage} id="" placeholder='Write your answer' className='bg-[#D9D9D9] w-2/3 p-5 focus:border-[#F3BD02] outline-none text-black rounded-lg' />
                        </div>
                        <div className="1st-step-img flex text-white w-1/2 max-[600px]:w-full gap-10  justify-center ">
                            <div className="ck-sir-img size-32 overflow-hidden">
                                <img className='size-full object-cover' src="/images/investorCircle/fund.png" alt="" />
                            </div>
                            <div className="some-text w-1/2 mt-4">
                                <p className='leading-tight text-xs text-zinc-300'>Funding Required: <br />The funding will be strategically utilized for business expansion, technology enhancement, marketing, and operational growth. Key areas include product development, infrastructure, talent acquisition, branding, and market penetration to drive scalability and long-term profitability.</p>
                            </div>
                        </div>
                    </div>
                </Step>
                <Step>
                    <div className="flex max-[600px]:flex-col max-[600px]:gap-5 pb-10 pt-10">
                        <div className="1st-step-text text-white w-1/2 max-[600px]:w-full max-[600px]:pr-0 pr-28 ">
                            <h1 className='text-3xl mb-5 font-bold'>What is your<span className='text-[#F3BD02]'> USP?</span></h1>
                            <h2 className='mt-14 text-2xl mb-5'>Please write your USP</h2>
                            <div className="flex gap-5 h-[30vh]">
                                <textarea type="text" name="usp" onChange={handleChange} value={formData.usp} id="" placeholder='Start write here UPS' className='bg-[#D9D9D9] w-full h-full p-5 focus:border-[#F3BD02] outline-none text-black rounded-lg' />
                                <div className="h-full font-semibold flex items-end justify-end">
                                    {formLoading ? <div className=' bg-green-500 gap-2 rounded-lg px-4 py-2 text-white center '>
                                        <div className="loader scale-75 "></div>
                                        <p className=' font-semibold'>Loading . . . </p>
                                    </div> :
                                        <button onClick={handleSubmit} className='bg-[#F3BD02] cursor-pointer rounded-lg px-4 py-2 text-white'>Submit</button>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="1st-step-img flex text-white w-1/2 max-[600px]:w-full gap-10 flex-col">
                            <div className="flex justify-center gap-10">
                                <div className="ck-sir-img size-32 overflow-hidden">
                                    <img className='size-full object-cover' src="/images/investorCircle/usp.png" alt="" />
                                </div>
                                <div className="some-text w-1/2 mt-4">
                                    <p className='leading-tight text-xs text-zinc-300'>Funding Required: <br />USP (Unique Selling Proposition): <br /> Our business stands out with high-quality products/services, innovative solutions, and a customer-centric approach. We prioritize excellence, reliability, and market-driven strategies to ensure unmatched value and long-term success.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </Step>
            </Stepper>
        </>
    )
}

export default InvestorCircle