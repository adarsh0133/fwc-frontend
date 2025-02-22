
import React, { useState } from 'react'
import Stepper, { Step } from '../../UI/Stepper';
import PhoneInputField from './../../UI/PhoneInputField';

export const PartnerForm = () => {
  const [userInput, setUserInput] = useState({
    // first step
    fullname: "",
    contact: "",
    email: "",
    city: "",
    Linkedin: "",
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
  });

  const handleChange = (name) => (eventOrValue) => {
    const value = typeof eventOrValue === "object" && eventOrValue.target
      ? eventOrValue.target.value // For regular inputs
      : eventOrValue; // For direct values like dropdowns

    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  return (
    <>
      <Stepper
        initialStep={1}
        onStepChange={(step) => {
          console.log(step);
        }}
        onFinalStepCompleted={() => console.log("All steps completed!")}
        backButtonText="Previous"
        nextButtonText="Next"
      >
        <Step>
          <h2 className='text-center font-semibold text-2xl'>Personal Information</h2>
          <div className="w-full flex flex-col items-start justify-between max-[600px]:flex-col">
            <div className="input-field w-full space-y-2">
              <p className="font-medium text-sm text-zinc-600">Name</p>
              <input
                type="text"
                placeholder="Enter your full name"
                name="fullname"
                onChange={handleChange("fullname")}
                value={userInput.fullname}
                className="field rounded-xl"
              />
            </div>
            <div className="input-field w-full mt-4 space-y-2">
              <p className="font-medium text-sm text-zinc-600">Contact or WhatsApp No.</p>
              <PhoneInputField
                value={userInput.contact}
                onChange={(value) => handleChange("contact")(value)}
              />
            </div>
            <div className="input-field w-full mt-4 space-y-2">
              <p className="font-medium text-sm text-zinc-600">Email</p>
              <input
                type="email"
                disabled
                name="email"
                value={userInput.email}
                className="field rounded-xl"
              />
            </div>
            <div className="input-field w-full mt-4 space-y-2">
              <p className="font-medium text-sm text-zinc-600">City</p>
              <input
                type="text"
                placeholder="Bangalore/Mumbai/Delhi"
                name="city"
                onChange={handleChange("city")}
                value={userInput.city}
                className="field rounded-xl"
              />
            </div>
            <div className="input-field w-full mt-4 space-y-3">
              <p className="font-medium text-sm text-zinc-600">Social Media Handels</p>
              <input
                type="text"
                placeholder="Linkedin"
                name="Linkedin"
                onChange={handleChange("Linkedin")}
                value={userInput.Linkedin}
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
              <p className="font-medium text-sm mt-3 text-zinc-600">Are you a Startup Founder, Business Owner, or Investor?</p>
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
              </div>
            </div>
            <div className="input-field w-full mt-4 space-y-2">
              <p className="font-medium text-sm text-zinc-600">Company Name & Business Registration Details (If applicable):</p>
              <input
                type="text"
                name="companyName"
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
                value={userInput.sector}
                onChange={handleChange("sector")}
                className="field rounded-xl"
              />
            </div>
            <div className="input-field w-full mt-4 space-y-2">
              <p className="font-medium text-sm text-zinc-600">Business Type: (Product-based, Service-based, B2B, B2C, SaaS, etc.)</p>
              <input
                type="text"
                placeholder="Bangalore/Mumbai/Delhi"
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
                placeholder="stage"
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
              <p className="font-medium text-sm text-zinc-600">What kind of support do you need from FWC? (Funding, Tech, Marketing, Legal, Hiring, etc.)</p>
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
              Are you looking for business collaborations or co-founders?
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
            <p className="font-medium text-sm text-gray-600 mt-4 mb-2">
              Would you like FWC to help connect you with relevant members?
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
            <p className="font-medium text-sm text-gray-600 mt-4 mb-2">
              Can you offer services, mentorship, or discounts to FWC members?
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
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            )}

            {/* Display Selected Values (for Debugging) */}
            <div className="mt-4 p-3 bg-white border rounded-md">
              <p className="text-sm text-gray-700">
                Looking for Collaboration: {userInput.lookingForCollaboration || "N/A"}
              </p>
              <p className="text-sm text-gray-700">
                Need FWC Connection: {userInput.needFWCConnection || "N/A"}
              </p>
              <p className="text-sm text-gray-700">
                Offer Services: {userInput.offerServices || "N/A"}
              </p>
              {userInput.offerServices === "Yes" && (
                <p className="text-sm text-gray-700">Details: {userInput.offerDetails || "N/A"}</p>
              )}
            </div>
          </div>
        </Step>
        <Step>
          <h2>Final Step</h2>
          <p>You made it!</p>
        </Step>
      </Stepper>
    </>
  )
}

export default PartnerForm