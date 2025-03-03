import React from 'react'
import Magnet from './../../UI/Magnet';

const Nav = () => {
    return (
        <div className='fixed z-50 w-full px-14 py-3 bg-zinc-900 flex justify-between items-center'>
            <div className="logo w-40">
                <img className='w-full h-full object-cover' src="/images/Home/logo.png" alt="" />
            </div>
            <div className="nav-links">
                <ul className='flex gap-10 text-white text-base font-medium'>
                    <li>Benefits</li>
                    <li>Events</li>
                    <li>FWC Stories</li>
                    <li>Vertices</li>
                    <li>About FWC</li>
                </ul>
            </div>
            <div className="login-signup-btn space-x-4">
                <Magnet padding={50} disabled={false} magnetStrength={5}>
                    <button className="bg-white border-2 border-white text-black py-0.5 px-5 text-lg font-semibold rounded-full cursor-pointer">Get Start</button>
                </Magnet>
                <button className="bg-black border-2 border-white text-white py-0.5 px-5 text-lg font-semibold rounded-full cursor-pointer">Login</button>
            </div>
        </div>
    )
}

export default Nav