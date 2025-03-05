import React from 'react'

function ErrorPage() {
  return (
    <div>
        <div className="w-full h-screen text-white flex flex-col items-center bg-[#0E3047] justify-center">
           <img className='w-[40%] max-[600px]:w-full' src="/images/Home/building-webpage.gif" alt="" />
           <p className='text-4xl translate-y-[-12vh] max-[600px]:translate-y-[0vh]'>Coders At Work</p>
           <p className='text-2xl  translate-y-[-12vh] max-[600px]:translate-y-[0vh] max-[600px]:mb-5 '>- Coming Soon -</p>
           <a href="/">Go to Home</a>
        </div>
    </div>
  )
}

export default ErrorPage