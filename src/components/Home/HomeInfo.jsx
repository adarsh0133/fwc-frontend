import React from 'react'
import { Link } from 'react-router-dom'

const HomeInfo = () => {
 const social = [
        {
            icon: "/images/infoHeader/linkedin.png",
            link: "/events"
        },
        {
            icon: "/images/infoHeader/youtube.png",
            link: ""
        },
        {
            icon: "/images/infoHeader/facebook.png",
            link: ""
        },
        {
            icon: "/images/infoHeader/insta.png",
            link: ""
        },
    ]
    return (
        <div className='w-full h-16 bg-[#010E37] hidden lg:flex'>
            <div className="lft-container w-[80%] h-full flex gap-10 pl-20">
                <div className="flex items-center justify-center gap-2">
                    <div className="icon size-5">
                        <img className='size-full object-cover' src="/images/infoHeader/phone.png" alt="" />
                    </div>
                    <h1 className='text-white text-sm font-normal'>(+91)  98100-27737</h1>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <div className="icon size-5">
                        <img className='size-full object-cover' src="/images/infoHeader/mail.png" alt="" />
                    </div>
                    <h1 className='text-white text-sm font-normal'>info@firstworldcommunity.org</h1>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <div className="icon size-5">
                        <img className='size-full object-cover' src="/images/infoHeader/location.png" alt="" />
                    </div>
                    <h1 className='text-white text-sm font-normal'>4th floor, New No. 20, Old No. 3, Avenue Road, Nungambakkam, Chennai 600034</h1>
                </div>

            </div>
            <div className="rgt-container w-[20%] h-full bg-[url('/images/infoHeader/rectangle.png')] bg-contain bg-no-repeat bg-right center gap-4 pl-10">
                {
                    social.map((item, index) => (
                        <Link to={item.link} key={index}>
                            <div className="social-circle size-8 bg-white rounded-full overflow-hidden p-2">
                                <img className='size-full object-cover' src={item.icon} alt="" />
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default HomeInfo