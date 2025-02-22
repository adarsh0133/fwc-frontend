import React from 'react'
import TextPressure from './TextPressure'
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <div className="center h-screen gap-10 flex-col w-full">
        <div className=''>
          <TextPressure
            text="Page- Under - Construction"
            flex={true}
            alpha={false}
            stroke={true}
            width={true}
            weight={true}
            italic={true}
            textColor="#000000"
            strokeColor="#3498DB"
            minFontSize={100}
          />
        </div>
        <Link to={'/login'} className='text-center font-bold  text-2xl'>
          Login Now
        </Link>
      </div>
    </div>
  )
}
