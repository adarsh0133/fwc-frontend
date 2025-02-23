import React from 'react'
import TextPressure from './TextPressure'
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
        {/* Logo */}
        <img src="/images/Home/homepagelogo.JPG" alt="FWC Logo" className="w-1/2 mb-4 max-[600px]:w-full" />

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800">First World Community</h1>

        {/* Description */}
        <p className="text-gray-600 max-w-md mt-2">
          FWC is an Entrepreneurship Enabling Foundation dedicated to empowering
          emerging business leaders through expert mentoring, networking, and
          strategic business solutions.
        </p>

        <div className="mt-10 text-center">
          <Link to="/Signup" className="bg-black text-white py-3 px-6 roundg text-lg font-semibold rounded-lg">Join Now!</Link>
        </div>

      </div>

    </div>
  )
}
