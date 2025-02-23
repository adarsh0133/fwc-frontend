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
        <div className="mt-10 text-center">
          <Link to="/login" className="bg-black text-white py-3 px-6 roundg text-lg font-bold rounded-lg">Login Now</Link>

        </div>
      </div>
    </div>
  )
}
