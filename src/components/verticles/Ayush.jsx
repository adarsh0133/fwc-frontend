import React from 'react'
import HomeFooter from '../Home/HomeFooter'
import Nav from '../Home/Nav'

const Ayush = () => {
    const systum = [
        {
            name: 'Ayurveda',
            description: 'Ancient science of life',
            image: '/images/vertices/ayush/ayurveda.webp'
        },
        {
            name: 'Unani',
            description: 'Greek healing wisdom',
            image: '/images/vertices/ayush/unani.webp'
        },
        {
            name: 'Siddha',
            description: 'Tamil medical tradition',
            image: '/images/vertices/ayush/siddha.webp'
        },
        {
            name: 'Yoga',
            description: 'Mind-body harmony',
            image: '/images/vertices/ayush/yoga.webp'
        },
        {
            name: 'Homeopathy',
            description: 'Natural healing system',
            image: '/images/vertices/ayush/homeopathy.webp'
        }
    ]
    return (
        <div className="bg-gray-50 text-gray-800">
            <Nav />
            {/* Hero Section */}
            <header className="flex flex-col justify-center items-center bg-cover h-screen" style={{ backgroundImage: 'url(/images/vertices/ayush/heropage.webp)' }}>
                <h1 className="text-xl md:text-4xl font-bold text-white">Balance Your Life with AYUSH</h1>
                <p className="mt-4 text-xs text-white text-center">Discover the ancient wisdom of holistic healing combined with modern wellness practices</p>
            </header>

            {/* Integrated AYUSH Systems Section */}
            <section className="py-16 px-10">
                <h2 className="text-3xl font-bold text-center">Integrated AYUSH Systems</h2>
                <p className='text-sm font-normal text-center my-4'>Experience the synergy of traditional healing systems working together for your complete wellness</p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-8 lg:mt-28 text-center">
                    {
                        systum.map((item, index) => (
                            <div key={index} className="flex flex-col items-center gap-2">
                                <div className="img-wrapper rounded-full size-28 bg-[#D9D9D9] p-5 overflow-hidden">
                                    <img className='size-full object-contain' src={item.image} alt={item.name} />
                                </div>
                                <h3 className="font-bold">{item.name}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </section>

            {/* Meet Dr. CK Ashok Kumar Section */}
            <section className="py-16 px-12 bg-white">
                <div className="md:flex w-full lg:gap-10 lg:justify-center">
                    <div className="img-container-ashokasir w-full md:w-1/2 lg:w-1/4">
                        <img src="/images/vertices/ayush/samrathAshoka.webp" alt="" />
                    </div>
                    <div className="text-container md:w-1/2 md:ml-10 mt-5 md:mt-0">
                        <h2 className="text-xl md:text-3xl font-bold mt-5">Meet Dr. C.K. Ashok Kumar</h2>
                        <p className="mt-4 text-sm">Dr. CK Ashok Kumar believes aligning business with a deeper purpose fosters creativity and positive societal impact. His approach encourages ethical leadership and innovation through spiritual wisdom.
                            Interested in integrating spirituality into business? Connect with Dr. CK Ashok Kumar for mentorship and guidance.</p>
                        <p className="mt-4 text-sm">Dr. CK Ashok Kumar is a revered spiritual leader, entrepreneur, and community builder who integrates spirituality with modern business leadership. He advocates for a spiritual foundation in management, fostering conscious leadership, ethical growth, and innovation.</p>
                    </div>
                </div>
            </section>

            {/* About AYUSH Section */}
            <section className="py-16 px-10 w-full text-white bg-radial-[at_50%_75%] from-[#00113B] via-[#000d2d] to-[#00040e] to-90%">
                <div className="md:flex w-full lg:items-center lg:flex-row-reverse">
                    <div className="md:w-1/2">
                        <div className="img-container-ashokasir w-full lg:p-20">
                            <img src="/images/vertices/ayush/ayush.webp" alt="" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:pl-20">
                        <h2 className="text-xl font-bold ">About AYUSH</h2>
                        <div className="mt-4 font-light leading-tight">
                            <p>AYUSH represents the integration of Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy - traditional systems of medicine native to India. Our mission is to promote holistic health and well-being through these time-tested practices.</p>
                        </div>
                        <ul className="mt-4 text-zinc-100 space-y-4 font-light leading-tight">
                            <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1 before:w-5 before:h-5 before:bg-[url('/images/vertices/ayush/CheckMark.webp')] before:bg-contain before:bg-no-repeat">
                                AYUSH represents Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy, which are India's traditional systems of medicine.
                            </li>
                            <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1 before:w-5 before:h-5 before:bg-[url('/images/vertices/ayush/CheckMark.webp')] before:bg-contain before:bg-no-repeat">
                                AYUSH promotes holistic health and well-being through time-tested practices focusing on natural healing and preventive healthcare.
                            </li>
                            <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1 before:w-5 before:h-5 before:bg-[url('/images/vertices/ayush/CheckMark.webp')] before:bg-contain before:bg-no-repeat">
                                The AYUSH industry is worth $4 trillion and is growing due to increased awareness of natural and preventive healthcare.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <HomeFooter />
        </div>

    )
}

export default Ayush