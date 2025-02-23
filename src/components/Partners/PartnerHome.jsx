import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currentUser } from '../../store/Actions/userAction'
import { Link } from 'react-router-dom'

export const PartnerHome = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(currentUser())
  }, [])

  if (!user)
    return (
      <div className='h-screen gap-5 w-full center '>
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
            <div className="bg-white p-6 border-2 border-gray-400 rounded-lg shadow">
              <div className="flex flex-col items-start">
                <img className='size-6 mb-4' src="/images/partners/icons/group.svg" alt="" />
                <h3 className=" text-lg font-bold text-gray-900">EXCLUSIVE WEEKLY MEETUPS</h3>
              </div>
              <p className=" text-gray-600">Connect with like-minded professionals in our weekly networking sessions</p>
            </div>
            <div className="bg-white p-6 border-2 border-gray-400 rounded-lg shadow">
              <div className="flex flex-col items-start">
                <img className='size-6 mb-4' src="/images/partners/icons/degree.svg" alt="" />
                <h3 className=" text-lg font-bold text-gray-900">SKILL-UP MASTERCLASSES</h3>
              </div>
              <p className=" text-gray-600">Access expert-led workshops to enhance your professional skills</p>
            </div>
            <div className="bg-white p-6 border-2 border-gray-400 rounded-lg shadow">
              <div className="flex flex-col items-start">
                <img className='size-6 mb-4' src="/images/partners/icons/fund.svg" alt="" />
                <h3 className=" text-lg font-bold text-gray-900">FWC FUNDING CIRCLE</h3>
              </div>
              <p className=" text-gray-600">Exclusive access to funding opportunities and investor networks</p>
            </div>
            <div className="bg-white p-6 border-2 border-gray-400 rounded-lg shadow">
              <div className="flex flex-col items-start">
                <img className='size-6 mb-4' src="/images/partners/icons/video.svg" alt="" />
                <h3 className=" text-lg font-bold text-gray-900">ZOOM PREMIUM ACCESS</h3>
              </div>
              <p className=" text-gray-600">Unlimited access to premium video conferencing features</p>
            </div>
            <div className="bg-white p-6 border-2 border-gray-400 rounded-lg shadow">
              <div className="flex flex-col items-start">
                <img className='size-6 mb-4' src="/images/partners/icons/library.svg" alt="" />
                <h3 className=" text-lg font-bold text-gray-900">RESOURCE LIBRARY</h3>
              </div>
              <p className=" text-gray-600">Comprehensive collection of learning materials and templates</p>
            </div>
            <div className="bg-white p-6 border-2 border-gray-400 rounded-lg shadow">
              <div className="flex flex-col items-start">
                <img className='size-6 mb-4' src="/images/partners/icons/handshake.svg" alt="" />
                <h3 className=" text-lg font-bold text-gray-900">PARTNER BENEFITS</h3>
              </div>
              <p className=" text-gray-600">Special discounts and offers from our partner organizations</p>
            </div>
            <div className="bg-white p-6 border-2 border-gray-400 rounded-lg shadow">
              <div className="flex flex-col items-start">
                <img className='size-6 mb-4' src="/images/partners/icons/star.svg" alt="" />
                <h3 className=" text-lg font-bold text-gray-900">SPOTLIGHT BOOST</h3>
              </div>
              <p className=" text-gray-600">Featured promotion of your work and achievements</p>
            </div>
            <div className="bg-white p-6 border-2 border-gray-400 rounded-lg shadow">
              <div className="flex flex-col items-start">
                <img className='size-6 mb-4' src="/images/partners/icons/people.svg" alt="" />
                <h3 className=" text-lg font-bold text-gray-900">FWC ATITHI</h3>
              </div>
              <p className=" text-gray-600">Special guest access to exclusive events and conferences</p>
            </div>
            <div className="bg-white p-6 border-2 border-gray-400 rounded-lg shadow">
              <div className="flex flex-col items-start">
                <img className='size-6 mb-4' src="/images/partners/icons/chat.svg" alt="" />
                <h3 className=" text-lg font-bold text-gray-900">EXPERT CONNECT</h3>
              </div>
              <p className=" text-gray-600">Direct access to industry experts for mentorship and guidance</p>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link to="/partner/submit-details" className="bg-black text-white py-3 px-6 roundg text-lg font-bold">Join Membership</Link>

        </div>
      </div>
    </div>
  )
}
