import React from 'react'
import Nav from './../Home/Nav';
import HomeFooter from './../Home/HomeFooter';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const FwcStories = () => {
  const testimonials = [
    {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}
  ];

  const data = [
    {
      id: 0,
      name: "Vikas Bansal",
      img: "/images/fwcStories/1.jpg",
      desc: "FWC Member",
      readmore: "https://www.linkedin.com/in/vikasbansaledupreneur/",
      message: "Serial Entrepreneur | Franchisee Influencer | Climate Change Top Voice | VC | Al Ethics Architect",
      content: `When I joined the first world community, I felt immense gratitude to God for connecting me with the CK Ashok Sir. Thanks to FWC, I have reached new heights and secured numerous deals with organizations like Krishi Jagran and GOPIO. In FWC, we don’t just share connections; we share business opportunities. I highly recommend that any business looking to grow at an accelerated pace should join FWC.`,
    },
    {
      id: 1,
      name: "Name 2",
      desc: "Decrepitation",
      message: "Hello! Hope you're having a great day. Let me know if you need anything—I’m happy to help with anything!",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam vehicula, felis in cursus venenatis, est libero fermentum lacus, nec aliquam felis ligula nec libero.Pellentesque habitant morbi tristique senectus et netus.`,
    },
    {
      id: 2,
      name: "Name 3",
      desc: "Decrepitation",
      message: "Hello! Hope you're having a great day. Let me know if you need anything—I’m happy to help with anything!",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, felis in cursus venenatis, est libero fermentum lacus, nec aliquam felis ligula nec libero.Pellentesque habitant morbi tristique senectus et netus.`,
    },
    // ...continue similarly for items 4 to 9
  ];


  return (
    <div>
      <Nav />
      <div className="min-h-screen bg-gradient-to-b from-white to-purple-100 pb-10 px-4 md:px-10">
        <div className="max-w-full mx-auto">
          <div className="top-img-container w-full">
            <img
              src="/images/fwcStories/fwc-landing.png"
              alt="Top Image"
              className="w-full h-[60vh] object-cover "
            />
          </div>


          <div className="text-center">
            <span className="inline-block bg-gray-200 px-4 py-1 rounded-full mb-2 text-xl font-semibold">
              Testimonial
            </span>
            <h2 className="text-2xl md:text-5xl font-bold mb-2">
              Trusted by leaders
            </h2>
            <p className="text-gray-500 text-lg md:text-6xl font-semibold">
              from various industries
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-gray-500">
              "Trusted by leaders across industries, showcasing reliability, expertise,
              and a proven track record of excellence and innovation."
            </p>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 px-24 max-[600px]:px-5 py-10">
        <Swiper
          navigation={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="max-w-6xl w-full rounded-3xl"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="p-1 h-[90vh] max-[600px]:h-fit relative w-full  bg-[#C6C6EE] center rounded-4xl px-20 max-[600px]:px-2 py-5">
                <div className="bg-gradient-to-br from-[#A98DFD]/30 to-[#7B82F8]/30 backdrop-blur-md rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-start gap-8 text-white h-[70vh] max-[600px]:h-fit border-2 border-white ">
                  <div className="flex flex-col max-[600px]:flex-row items-center max-[600px]:items-start max-[600px]:justify-start justify-end p-10 pb-20 max-[600px]:pb-0 max-[600px]:p-0 text-center max-[600px]:text-start md:text-left md:items-start max-w-xs  md:w-[40%] w-full h-full max-[600px]:h-20">
                    <div className="img-container rounded-xl size-20 md:w-52 md:h-64 bg-green-200 md:absolute md:top-[15%] md:left-[17%] md:-translate-x-1/2 md:-translate-y-1/2 z-30 overflow-hidden">
                      <img
                        src={``}
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>


                    <div className="mt-4 max-[600px]:mt-0 max-[600px]:ml-4">
                      <h2 className="text-xl md:text-2xl font-semibold">{item.name}</h2>
                      <p className="text-sm md:text-lg opacity-80">{item.desc}</p>
                    </div>



                    <div className="mt-10 max-[600px]:hidden">
                      <h3 className="font-bold text-lg md:text-3xl">
                        MY <span className="text-blue-700">FWC</span> <br /> STORIES
                      </h3>
                    </div>
                  </div>
                  <div className="flex-1 text-left md:w-[60%]">
                    <h3 className="text-xl md:text-3xl font-bold mb-4">{item.message}</h3>
                    <p className="text-sm opacity-90 mb-6">{item.content.repeat(2)}</p>
                    <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-full font-semibold transition border-2 border-white">
                      <a href={item.readmore} target="_blank" rel="noopener noreferrer">
                        Read More
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <HomeFooter />
    </div>
  )
}

export default FwcStories