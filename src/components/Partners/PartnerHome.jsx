import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currentUser } from '../../store/Actions/userAction'
import { Link } from 'react-router-dom'
import Magnet from '../../UI/Magnet';

const benefits = [
  {
    imgSrc: "/images/partners/icons/group.svg",
    title: "EXCLUSIVE WEEKLY MEETUPS",
    description: "Connect with like-minded professionals in our weekly networking sessions"
  },
  {
    imgSrc: "/images/partners/icons/degree.svg",
    title: "SKILL-UP MASTERCLASSES",
    description: "Access expert-led workshops to enhance your professional skills"
  },
  {
    imgSrc: "/images/partners/icons/fund.svg",
    title: "FWC FUNDING CIRCLE",
    description: "Exclusive access to funding opportunities and investor networks"
  },
  {
    imgSrc: "/images/partners/icons/video.svg",
    title: "ZOOM PREMIUM ACCESS",
    description: "Unlimited access to premium video conferencing features"
  },
  {
    imgSrc: "/images/partners/icons/library.svg",
    title: "RESOURCE LIBRARY",
    description: "Comprehensive collection of learning materials and templates"
  },
  {
    imgSrc: "/images/partners/icons/handshake.svg",
    title: "PARTNER BENEFITS",
    description: "Special discounts and offers from our partner organizations"
  },
  {
    imgSrc: "/images/partners/icons/star.svg",
    title: "SPOTLIGHT BOOST",
    description: "Featured promotion of your work and achievements"
  },
  {
    imgSrc: "/images/partners/icons/people.svg",
    title: "FWC ATITHI",
    description: "Special guest access to exclusive events and conferences"
  },
  {
    imgSrc: "/images/partners/icons/chat.svg",
    title: "EXPERT CONNECT",
    description: "Direct access to industry experts for mentorship and guidance"
  }
];

export const PartnerHome = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(currentUser())
  }, [])

  if (!user)
    return (
      <div className='h-screen gap-5 w-full center flex-col '>
        <div className="loader scale-125"></div>
        <p className='text-2xl font-semibold'>Loading . . . </p>
      </div>
    )

  return (
    <div>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">FWC Membership</h1>
          <p className=" text-lg text-gray-600">Unlock exclusive benefits and join our thriving community of professionals</p>
        </div>
        <div className="mt-10">
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 border-2 border-gray-400 rounded-lg shadow">
                <div className="flex flex-col items-start">
                  <img className='size-6 mb-4' src={benefit.imgSrc} alt="" />
                  <h3 className=" text-lg font-bold text-gray-900">{benefit.title}</h3>
                </div>
                <p className=" text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center space-x-3">
          <Link to="/partner/submit-details" className="bg-black text-white py-3 px-6 roundg text-lg font-bold rounded-md">Join Membership</Link>
          <a href="/" className="bg-black text-white py-3 px-6 roundg text-lg font-bold rounded-md">Home</a>
        </div>
      </div>
    </div>
  )
}