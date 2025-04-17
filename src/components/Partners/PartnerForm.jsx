
import React, { useEffect, useState } from 'react'
import Stepper, { Step } from '../../UI/Stepper';
import PhoneInputField from './../../UI/PhoneInputField';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from '../../store/Actions/userAction';
import { sendMemberPayment, submitMemberDetails } from '../../store/Actions/partnerAction';
import { useNavigate } from 'react-router-dom';

export const PartnerForm = () => {
  const key = import.meta.env.VITE_RAZORPAY_KEY;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formLoading, setformLoading] = useState(false)
  const [showFinancialAid, setShowFinancialAid] = useState(false);
  const { user } = useSelector(state => state.user)
  const [userInput, setUserInput] = useState({
    userId: null,
    // first step
    fullName: "",
    contact: "",
    email: "",
    city: "",
    country: "",
    linkedinProfile: "",
    youtube: "",
    instagram: "",
    twitter: "",
    // second step
    companyName: "",
    userType: "",
    sector: "",
    businessType: "",
    stage: "",
    turnover: "",
    GST_Number: "",
    Website: "",
    // third step
    requirements: "",
    lookingForCollaboration: "", // Yes/No
    needFWCConnection: "", // Yes/No
    offerServices: "", // Yes/No
    offerDetails: "",
    // fourth step
    platform: "",
    needTechSupport: "",
    helpInBranding: "",

    // fifth step
    shortTermGoals: "",
    longTermGoals: "",
    expandInternationally: "",
    investmentSupport: "",
    investmentAmount: "",
    investmentPurpose: "",

    // Membership Details
    membershipCategory: "Startup/Business",
    referredBy: "",

    // last step
    termsAccepted: false,

    // amount 
    categoryprice: 1999,
    amount: 0,

    // new fields for financial aid
    financialAidReason: "",
    financialAidBenefit: "",
    financialAidCommitment: "",
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleChange = (name) => (eventOrValue) => {
    const value = typeof eventOrValue === "object" && eventOrValue.target
      ? eventOrValue.target.value // For regular inputs
      : eventOrValue; // For direct values like dropdowns

    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const submitForm = () => {
    if (!userInput.termsAccepted) {
      alert("Please accept the terms and conditions to proceed!");
      return;
    }
    if (!userInput.fullName || !userInput.contact || !userInput.city || !userInput.email || !userInput.country || !userInput.country || !userInput.userType || !userInput.lookingForCollaboration || !userInput.needFWCConnection || !userInput.offerServices || !userInput.platform || !userInput.needTechSupport || !userInput.helpInBranding || !userInput.investmentSupport || !userInput.expandInternationally || !userInput.membershipCategory) {
      alert("Please fill all the fields to proceed!");
      return;
    }
    if (!userInput.financialAidReason || !userInput.financialAidBenefit || !userInput.financialAidCommitment) {
      alert("Please fill all financial-aid fields to proceed!");
      return;
    }
    setformLoading(true)
    dispatch(submitMemberDetails(userInput));
    setformLoading(false)
    alert("Form submitted successfully!")
    navigate('/')
  }

  const submitHandler = async () => {
    if (!userInput.termsAccepted) {
      alert("Please accept the terms and conditions to proceed!");
      return;
    }
    // if (!userInput.fullName || !userInput.contact || !userInput.city || !userInput.email || !userInput.country || !userInput.userType || !userInput.lookingForCollaboration || !userInput.needFWCConnection || !userInput.offerServices || !userInput.platform || !userInput.needTechSupport || !userInput.helpInBranding || !userInput.investmentSupport || !userInput.expandInternationally || !userInput.membershipCategory )
    //  {
    //   alert("Please fill all the fields to proceed!");
    //   return;
    // }
    setformLoading(true)
    try {
      const order = await dispatch(sendMemberPayment(userInput));
      const options = {
        key: key,
        amount: userInput.amount,
        currency: "INR",
        name: "FWC Membership",
        description: "Payment for FWC Membership",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHuqzgiEkvl9PaoFzwa6Q2LdqlUsbw1-b3Dw&s",
        order_id: order.id,
        callback_url:
          `${import.meta.env.VITE_BACKEND_URL}/member/verify-payment`,
        prefill: {
          name: user.name, //loggedinuser name
          email: user.email, //loggedinuser email
        },
        notes: {
          address: "",
        },
        theme: {
          color: "#121212",
        },
        method: {
          netbanking: true,
          card: true,
          upi: true,
          wallet: false,
          paylater: false,
          banktransfer: true,
          qr: true,
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Payment failed:", error);
    } finally {
      setformLoading(false);
    }
  }

  if (user) {
    userInput.email = user.email
    userInput.userId = user._id
  }
  useEffect(() => {
    dispatch(currentUser())
  }, [])

  useEffect(() => {
    switch (userInput.membershipCategory) {
      case "Student":
        setUserInput((prevInput) => ({ ...prevInput, categoryprice: 999 }));
        break;
      case "Startup/Business":
        setUserInput((prevInput) => ({ ...prevInput, categoryprice: 1999 }));
        break;
      case "Investor":
        setUserInput((prevInput) => ({ ...prevInput, categoryprice: 3999 }));
        break;
      case "coreteammember":
        setUserInput((prevInput) => ({ ...prevInput, categoryprice: 11999 }));
        break;
      case "nariShakti":
        setUserInput((prevInput) => ({ ...prevInput, categoryprice: 1999 }));
        break;
      default:
        setUserInput((prevInput) => ({ ...prevInput, categoryprice: 1999 }));
    }
  }, [userInput.membershipCategory]);


  if (!user)
    return (
      <div className='h-screen gap-5 w-full center '>
        <div className="loader scale-125"></div>
        <p className='text-2xl font-semibold'>Loading . . . </p>
      </div>
    )

  const gstRate = 0.18;
  const gstAmount = userInput.categoryprice * gstRate;
  const grandTotal = userInput.categoryprice + gstAmount;
  userInput.amount = grandTotal;

  return (
    <>
      <Stepper
        initialStep={1}
        backButtonText="Previous"
        nextButtonText="Next"
      >
        <Step>
          <h2 className='text-center font-semibold text-2xl'>Personal Information</h2>
          <div className="w-full flex flex-col items-start justify-between max-[600px]:flex-col">
            <div className="input-field w-full space-y-2">
              <p className="font-medium text-sm text-zinc-600">Name <span className='text-red-500 text-lg'>*</span></p>
              <input
                type="text"
                placeholder="Enter your full name"
                name="fullName"
                onChange={handleChange("fullName")}
                value={userInput.fullName}
                className="field rounded-xl"
              />
            </div>
            <div className="input-field w-full mt-4 space-y-2">
              <p className="font-medium text-sm text-zinc-600">Contact or WhatsApp No. <span className='text-red-500 text-lg'>*</span></p>
              <PhoneInputField
                value={userInput.contact}
                onChange={(value) => handleChange("contact")(value)}
              />
            </div>
            <div className="input-field w-full mt-4 space-y-2">
              <p className="font-medium text-sm text-zinc-600">Email <span className='text-red-500 text-lg'>*</span></p>
              <input
                type="email"
                disabled
                name="email"
                placeholder='Enter your email'
                value={userInput.email}
                className="field rounded-xl"
              />
            </div>
            <div className="input-field w-full mt-4 space-y-2">
              <p className="font-medium text-sm text-zinc-600">Country <span className='text-red-500 text-lg'>*</span></p>
              <input
                type="text"
                placeholder="India/USA/UK"
                name="country"
                onChange={handleChange("country")}
                value={userInput.country}
                className="field rounded-xl"
              />
            </div>
            <div className="input-field w-full mt-4 space-y-2">
              <p className="font-medium text-sm text-zinc-600">City <span className='text-red-500 text-lg'>*</span></p>
              <input
                type="text"
                placeholder="Bangalore/Mumbai/Delhi"
                name="city"
                onChange={(e) => handleChange("city")(e.target.value.toLowerCase())}
                value={userInput.city}
                className="field rounded-xl"
              />
            </div>
            <div className="input-field w-full mt-4 space-y-3">
              <p className="font-medium text-sm text-zinc-600">Social Media Handels</p>
              <input
                type="text"
                placeholder="linkedinProfile"
                name="linkedinProfile"
                onChange={handleChange("linkedinProfile")}
                value={userInput.linkedinProfile}
                className="field rounded-xl"
              />
              <input
                type="text"
                placeholder="youtube"
                name="youtube"
                onChange={handleChange("youtube")}
                value={userInput.youtube}
                className="field rounded-xl"
              />
              <input
                type="text"
                placeholder="instagram"
                name="instagram"
                onChange={handleChange("instagram")}
                value={userInput.instagram}
                className="field rounded-xl"
              />
              <input
                type="text"
                placeholder="twitter"
                name="twitter"
                onChange={handleChange("twitter")}
                value={userInput.twitter}
                className="field rounded-xl"
              />
            </div>
          </div>
        </Step>
        <Step>
          <h2 className='text-center font-semibold text-2xl'>Business & Professional Details</h2>
          <div className="w-full flex flex-col items-start justify-between">
            <div className="w-full space-y-2">
              <p className="font-medium text-sm mt-3 text-zinc-600">Are you a Startup Founder, Business Owner, or Investor? <span className='text-red-500 text-lg'>*</span></p>
              <div className="flex flex-wrap gap-4">
                {/* Founder */}
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="userType"
                    value="Founder"
                    checked={userInput.userType === "Founder"}
                    onChange={handleChange("userType")}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-gray-800">Founder</span>
                </label>

                {/* Business Owner */}
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="userType"
                    value="Business Owner"
                    checked={userInput.userType === "Business Owner"}
                    onChange={handleChange("userType")}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-gray-800">Business Owner</span>
                </label>

                {/* Investor */}
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="userType"
                    value="Investor"
                    checked={userInput.userType === "Investor"}
                    onChange={handleChange("userType")}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-gray-800">Investor</span>
                </label>

                {/* others */}
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="userType"
                    value="others"
                    checked={userInput.userType === "others"}
                    onChange={handleChange("userType")}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-gray-800">others</span>
                </label>
              </div>
            </div>
            <div className="input-field w-full mt-4 space-y-2">
              <p className="font-medium text-sm text-zinc-600">Company Name & Business Registration Details (If applicable):</p>
              <input
                type="text"
                name="companyName"
                placeholder='Enter your company name'
                value={userInput.companyName}
                onChange={handleChange("companyName")}
                className="field rounded-xl"
              />
            </div>
            <div className="input-field w-full mt-4 space-y-2">
              <p className="font-medium text-sm text-zinc-600">Industry / Sector:(Agriculture, Tech, Finance, Healthcare, etc.)</p>
              <input
                type="text"
                name="sector"
                placeholder='Enter your sector'
                value={userInput.sector}
                onChange={handleChange("sector")}
                className="field rounded-xl"
              />
            </div>
            <div className="input-field w-full mt-4 space-y-2">
              <p className="font-medium text-sm text-zinc-600">Business Type: (Product-based, Service-based, B2B, B2C, SaaS, etc.)</p>
              <input
                type="text"
                placeholder='Enter your business type'
                name="businessType"
                onChange={handleChange("businessType")}
                value={userInput.businessType}
                className="field rounded-xl"
              />
            </div>
            <div className="input-field w-full mt-4 space-y-3">
              <p className="font-medium text-sm text-zinc-600">Business Stage: (Idea, Early-Stage, Growth, Scaling, Established)</p>
              <input
                type="text"
                placeholder='stage'
                name="stage"
                onChange={handleChange("stage")}
                value={userInput.stage}
                className="field rounded-xl"
              />
              <p className="font-medium text-sm text-zinc-600">Annual Turnover (Optional):</p>
              <input
                type="text"
                placeholder="turnover"
                name="turnover"
                onChange={handleChange("turnover")}
                value={userInput.turnover}
                className="field rounded-xl"
              />
              <p className="font-medium text-sm text-zinc-600">GST Number (If applicable):</p>
              <input
                type="text"
                placeholder="GST Number"
                name="GST_Number"
                onChange={handleChange("GST_Number")}
                value={userInput.GST_Number}
                className="field rounded-xl"
              />
              <p className="font-medium text-sm text-zinc-600">Company Website (If available):</p>
              <input
                type="text"
                placeholder="Website"
                name="Website"
                onChange={handleChange("Website")}
                value={userInput.Website}
                className="field rounded-xl"
              />
            </div>
          </div>
        </Step>
        <Step>
          <h2 className='text-center font-semibold text-2xl'>Collaboration & Networking Data</h2>
          <div className="w-full flex flex-col items-start justify-between">
            <div className="input-field w-full mt-4 space-y-2">
              <p className="font-medium text-sm text-zinc-600">What kind of support do you need from FWC? (Funding,Networking, Tech, Marketing, Legal, Hiring, etc.)</p>
              <input
                type="text"
                name="requirements"
                placeholder='Enter your requirements'
                value={userInput.requirements}
                onChange={handleChange("requirements")}
                className="field rounded-xl"
              />
            </div>
          </div>
          <div className="w-full max-w-lg p-4 bg-gray-100 rounded-lg shadow mt-4">
            {/* Question 1 */}
            <p className="font-medium text-sm text-gray-600 mb-2">
              Are you looking for business collaborations or co-founders? <span className='text-red-500 text-lg'>*</span>
            </p>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="lookingForCollaboration"
                  value="Yes"
                  checked={userInput.lookingForCollaboration === "Yes"}
                  onChange={handleChange("lookingForCollaboration")}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-gray-800">Yes</span>
              </label>

              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="lookingForCollaboration"
                  value="No"
                  checked={userInput.lookingForCollaboration === "No"}
                  onChange={handleChange("lookingForCollaboration")}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-gray-800">No</span>
              </label>
            </div>

            {/* Question 2 */}
            <p className="font-medium text-sm text-gray-600 mt-4 mb-2 ">
              Would you like FWC to help and connect you with relevant members? <span className='text-red-500 text-lg'>*</span>
            </p>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="needFWCConnection"
                  value="Yes"
                  checked={userInput.needFWCConnection === "Yes"}
                  onChange={handleChange("needFWCConnection")}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-gray-800">Yes</span>
              </label>

              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="needFWCConnection"
                  value="No"
                  checked={userInput.needFWCConnection === "No"}
                  onChange={handleChange("needFWCConnection")}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-gray-800">No</span>
              </label>
            </div>

            {/* Question 3 */}
            <p className="font-medium text-sm text-gray-600 mt-4 mb-2 ">
              Can you offer services, mentorship, or discounts to FWC members?<span className='text-red-500 text-lg'>*</span>
            </p>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="offerServices"
                  value="Yes"
                  checked={userInput.offerServices === "Yes"}
                  onChange={handleChange("offerServices")}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-gray-800">Yes</span>
              </label>

              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="offerServices"
                  value="No"
                  checked={userInput.offerServices === "No"}
                  onChange={handleChange("offerServices")}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-gray-800">No</span>
              </label>
            </div>

            {/* Conditional Input for Details */}
            {userInput.offerServices === "Yes" && (
              <div className="mt-3">
                <label className="block text-sm font-medium text-gray-700">
                  Please provide details:
                </label>
                <textarea
                  value={userInput.offerDetails}
                  onChange={handleChange("offerDetails")}
                  placeholder="Describe your offerings..."
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none "
                />
              </div>
            )}
          </div>
        </Step>
        <Step>
          <h2 className='text-center font-semibold text-2xl'>Tech & Digital Support</h2>
          <div className="w-full max-w-lg p-4 bg-gray-100 rounded-lg shadow mt-4">
            {/* Question 1 */}
            <p className="font-medium text-sm text-gray-600 mb-2">
              Do you have a website or app for your business? <span className='text-red-500 text-lg'>*</span>
            </p>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="platform"
                  value="Yes"
                  checked={userInput.platform === "Yes"}
                  onChange={handleChange("platform")}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-gray-800">Yes</span>
              </label>

              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="platform"
                  value="No"
                  checked={userInput.platform === "No"}
                  onChange={handleChange("platform")}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-gray-800">No</span>
              </label>
            </div>

            {/* Question 2 */}
            <p className="font-medium text-sm text-gray-600 mt-4 mb-2">
              Do you need tech support (Website, App, AI solutions)? <span className='text-red-500 text-lg'>*</span>
            </p>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="needTechSupport"
                  value="Yes"
                  checked={userInput.needTechSupport === "Yes"}
                  onChange={handleChange("needTechSupport")}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-gray-800">Yes</span>
              </label>

              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="needTechSupport"
                  value="No"
                  checked={userInput.needTechSupport === "No"}
                  onChange={handleChange("needTechSupport")}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-gray-800">No</span>
              </label>
            </div>

            {/* Question 3 */}
            <p className="font-medium text-sm text-gray-600 mt-4 mb-2">
              Would you like help with branding, digital marketing, or social media growth? <span className='text-red-500 text-lg'>*</span>
            </p>
            <div className="flex space-x-4">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="helpInBranding"
                  value="Yes"
                  checked={userInput.helpInBranding === "Yes"}
                  onChange={handleChange("helpInBranding")}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-gray-800">Yes</span>
              </label>

              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="helpInBranding"
                  value="No"
                  checked={userInput.helpInBranding === "No"}
                  onChange={handleChange("helpInBranding")}
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="text-gray-800">No</span>
              </label>
            </div>
          </div>
        </Step>
        <Step>
          <h2 className='text-center font-semibold text-2xl mb-2'>Future Goals & Vision</h2>
          {/* Future Goals & Vision */}
          <p className="font-medium text-sm text-gray-600 mb-2">
            What are your short-term (1-2 years) and long-term (5+ years) goals?
          </p>
          <textarea
            name="shortTermGoals"
            value={userInput.shortTermGoals}
            onChange={handleChange("shortTermGoals")}
            placeholder="Enter your short-term goals..."
            className="w-full p-2 border rounded-md focus:ring-blue-400 focus:outline-none"
          />
          <textarea
            name="longTermGoals"
            value={userInput.longTermGoals}
            onChange={handleChange("longTermGoals")}
            placeholder="Enter your long-term goals..."
            className="w-full mt-2 p-2 border rounded-md focus:ring-blue-400 focus:outline-none"
          />

          {/* Expand Internationally */}
          <p className="font-medium text-sm text-gray-600 mt-2 mb-2">
            Would you like to expand your business internationally? <span className='text-red-500 text-lg'>*</span>
          </p>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="expandInternationally"
                value="Yes"
                checked={userInput.expandInternationally === "Yes"}
                onChange={handleChange("expandInternationally")}
                className="w-4 h-4 text-blue-600"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="expandInternationally"
                value="No"
                checked={userInput.expandInternationally === "No"}
                onChange={handleChange("expandInternationally")}
                className="w-4 h-4 text-blue-600"
              />
              <span>No</span>
            </label>
          </div>

          {/* Investment Support */}
          <p className="font-medium text-sm text-gray-600 mt-4 mb-2">
            Are you looking for investment or funding support? <span className='text-red-500 text-lg'>*</span>
          </p>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="investmentSupport"
                value="Yes"
                checked={userInput.investmentSupport === "Yes"}
                onChange={handleChange("investmentSupport")}
                className="w-4 h-4 text-blue-600"
              />
              <span>Yes</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="investmentSupport"
                value="No"
                checked={userInput.investmentSupport === "No"}
                onChange={handleChange("investmentSupport")}
                className="w-4 h-4 text-blue-600"
              />
              <span>No</span>
            </label>
          </div>

          {/* Conditional Investment Details */}
          {userInput.investmentSupport === "Yes" && (
            <div className="mt-3">
              <label className="block text-sm font-medium text-gray-700">
                Investment Amount:
              </label>
              <input
                type="text"
                value={userInput.investmentAmount}
                onChange={handleChange("investmentAmount")}
                placeholder="Enter amount..."
                className="w-full p-2 border rounded-md focus:ring-blue-400 focus:outline-none"
              />
              <label className="block text-sm font-medium text-gray-700 mt-2">
                Purpose of Investment:
              </label>
              <textarea
                value={userInput.investmentPurpose}
                onChange={handleChange("investmentPurpose")}
                placeholder="Describe the purpose..."
                className="w-full mt-1 p-2 border rounded-md focus:ring-blue-400 focus:outline-none"
              />
            </div>
          )}
        </Step>
        <Step>
          {/* Code of Ethics & Terms Acceptance */}
          <h2 className='text-center font-semibold text-2xl mt-4'>Final Confirmation</h2>
          <p className="font-medium text-sm text-gray-600 mt-2 mb-2">
            Membership Category: <span className='text-red-500 text-lg'>*</span>
          </p>
          <select
            value={userInput.membershipCategory}
            defaultValue={userInput.membershipCategory}
            onChange={handleChange("membershipCategory")}
            className="w-full p-2 border rounded-md focus:ring-blue-400 focus:outline-none"
          >
            <option value="Student">Student</option>
            <option value="Startup/Business">Startup/Business</option>
            <option value="Investor">Investor</option>
            <option value="coreteammember">Core Team Member</option>
            <option value="nariShakti">Nari Shakti</option>
          </select>

          {/* Referred By */}
          <p className="font-medium text-sm text-gray-600 mt-4 mb-2">
            Referred by (If any existing member):
          </p>
          <input
            type="text"
            name="referredBy"
            value={userInput.referredBy}
            onChange={handleChange("referredBy")}
            placeholder="Enter name of the referrer"
            className="w-full p-2 border rounded-md focus:ring-blue-400 focus:outline-none"
          />

          <h2 className='text-center font-semibold text-2xl mt-4'>Code of Ethics & Terms Acceptance</h2>
          <div className="mt-6 p-4 bg-white border rounded-md">
            <p className="text-sm text-gray-600 mt-2">
              Upon acceptance into FWC, I agree to abide by the following Code of Ethics:
            </p>
            <div className="">
              <ul className="list-disc pl-5 text-sm text-gray-700 mt-2">
                <li>✅ Provide high-quality services and be truthful in all business dealings.</li>
                <li>✅ Build goodwill, trust, and strong relationships within the FWC network.</li>
                <li>✅ Follow up on referrals, maintain professionalism, and engage positively.</li>
                <li>✅ Uphold the ethical standards of my profession and community.</li>
              </ul>

              {isExpanded && (
                <>
                  <p className="text-sm text-gray-600 mt-4">
                    <strong>Terms & Conditions:</strong>
                  </p>
                  <ul className="list-disc pl-5 text-sm text-gray-700 mt-2">
                    <li>By submitting this application, I agree to receive communications from FWC.</li>
                    <li>FWC may share my information within its network to connect with other members.</li>
                    <li>All disputes shall be resolved through arbitration as per Indian Arbitration Rules.</li>
                    <li>Membership fees are non-refundable and valid for one year from the date of acceptance.</li>
                    <li>Any false information may result in immediate termination without reimbursement.</li>
                  </ul>
                </>
              )}

              <button
                onClick={toggleExpand}
                className="mt-4 text-blue-500 underline text-sm cursor-pointer"
              >
                {isExpanded ? 'View Less' : 'View More'}
              </button>
            </div>

            {/* Checkbox for Accepting Terms & Conditions */}
            <label className="flex items-center mt-4">
              <input
                type="checkbox"
                checked={userInput.termsAccepted}
                onChange={handleChange("termsAccepted")}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-800 font-medium">
                I accept all Terms & Conditions. <span className='text-red-500 text-lg'>*</span>
              </span>
            </label>
            {!showFinancialAid && (
              <div className="text-center w-full flex items-center justify-end h-fit ">
                <div className=" h-fit w-fit">
                  <div className="flex gap-5 items-center text-sm font-medium text-gray-600 justify-between">
                    <p>Amount :</p>
                    <p>₹{userInput.categoryprice}</p>
                  </div>
                  <div className="flex gap-5 items-center text-sm font-medium text-gray-600 justify-between">
                    <p>GST (18%):</p>
                    <p>₹{gstAmount.toFixed(2)}</p>
                  </div>
                  <div className="flex gap-5 items-center text-sm font-medium text-gray-600 justify-between">
                    <p>Grand Total:</p>
                    <p>₹{grandTotal.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          {showFinancialAid && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow">
              <h3 className="text-lg font-semibold">🚀 FWC Financial Aid Request Form</h3>
              <p className="text-sm text-gray-600 mt-2">
                FWC is a not-for-profit organization committed to empowering startups and entrepreneurs. The ₹2,000 membership fee directly supports mentorship, funding access, networking, and business growth opportunities. If you genuinely cannot afford this fee, you may apply for financial aid.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                📌 Note: This aid is for those who truly need it. If you can afford the fee, please do not apply.
              </p>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  🔹 Why do you need financial aid for FWC membership? (Brief explanation – max 100 words)
                  <span className='text-red-500 text-lg'>*</span>
                </label>
                <textarea
                  value={userInput.financialAidReason}
                  onChange={handleChange("financialAidReason")}
                  placeholder="Enter your reason..."
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none "
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  🔹 How will FWC membership benefit you? (Brief explanation – max 100 words)
                  <span className='text-red-500 text-lg'>*</span>
                </label>
                <textarea
                  value={userInput.financialAidBenefit}
                  onChange={handleChange("financialAidBenefit")}
                  placeholder="Enter the benefits..."
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none "
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  🔹 Can you commit to actively participating in FWC activities and contributing to the community? (Yes/No)
                  <span className='text-red-500 text-lg'>*</span>
                </label>
                <div className="flex space-x-4 mt-1">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="financialAidCommitment"
                      value="Yes"
                      checked={userInput.financialAidCommitment === "Yes"}
                      onChange={handleChange("financialAidCommitment")}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-800">Yes</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="financialAidCommitment"
                      value="No"
                      checked={userInput.financialAidCommitment === "No"}
                      onChange={handleChange("financialAidCommitment")}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-800">No</span>
                  </label>
                </div>
              </div>
            </div>
          )}


          {showFinancialAid == true ? (
            <div className="w-full  h-20  flex items-center justify-evenly ">
              <button onClick={() => setShowFinancialAid(false)} className='border-2 cursor-pointer rounded-lg px-4 py-2 '>Go Without Financial Ad</button>
              {formLoading ? <div className=' bg-green-500 gap-2 rounded-lg px-4 py-2 text-white center '>
                <div className="loader scale-75 "></div>
                <p className=' font-semibold'>Loading . . . </p>
              </div> : <button onClick={submitForm} className='bg-green-500 cursor-pointer rounded-lg px-4 py-2 text-white'>Submit Form</button>}
            </div>
          ) : (

            <div className="w-full  h-20  flex items-center justify-evenly ">

              <button onClick={() => setShowFinancialAid(true)} className='border-2 cursor-pointer rounded-lg px-4 py-2 '>Go With Financial Ad</button>

              {formLoading ? <div className=' bg-green-500 gap-2 rounded-lg px-4 py-2 text-white center '>
                <div className="loader scale-75 "></div>
                <p className=' font-semibold'>Loading . . . </p>
              </div> :
                <button onClick={submitHandler} className='bg-green-500 cursor-pointer rounded-lg px-4 py-2 text-white'>Pay ₹{grandTotal.toFixed(2)}</button>
              }
            </div>
          )}


        </Step>
      </Stepper>
    </>
  )
}

export default PartnerForm