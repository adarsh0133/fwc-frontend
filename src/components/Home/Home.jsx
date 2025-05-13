import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Nav from './Nav';
import RotatingText from '../../UI/RotatingText';
import Magnet from '../../UI/Magnet';
import HomeFooter from './HomeFooter';
import { useDispatch, useSelector } from 'react-redux';
import { currentUser } from '../../store/Actions/userAction';
import HomePageSpotlight from '../spotlightBoost/HomePageSpotlight';
import Info from './HomeInfo';
import Marquee from "react-fast-marquee";

export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { isAuth, error } = useSelector((state) => state.user);
  const { user } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(currentUser());
  }, [])

  const cards = [
    {
      title: "Providing Connections",
      desc: "Connect with industry leaders, peers, and collaborators to grow your network, exchange ideas, build partnerships, and unlock new opportunities that can elevate your professional journey and spark meaningful innovation.",
      bgimg: "/images/Home/whatwe/pc.png"
    },
    {
      title: "Funding Support",
      desc: "Secure the funding you need through our exclusive Investor Circle. We connect you with the right investors and provide personalized support to help you scale your ideas, accelerate growth, and turn your vision into reality.",
      bgimg: "/images/Home/whatwe/fc.png"
    },
    {
      title: "Mentoring",
      desc: "Gain valuable insights and guidance from experienced mentors who understand your journey. Our mentoring support helps you overcome challenges, make smarter decisions, and accelerate your business growth with clarity, confidence, and real-world expertise.",
      bgimg: "/images/Home/whatwe/men.png"
    },
    {
      title: "Community Support",
      desc: "Actively participate in meetups, events, and community-driven initiatives like FWC Aditi to connect, collaborate, and grow. These platforms offer valuable opportunities to share ideas, build relationships, and contribute meaningfully to a collective vision.",
      bgimg: "/images/Home/whatwe/cs.png"
    },
    {
      title: "Visibility & Promotion",
      desc: "Showcase your journey and achievements by getting featured on our platform through Spotlight Boost. Share your success story with a wider audience, gain recognition, and inspire others while building your personal and professional brand.",
      bgimg: "/images/Home/whatwe/vp.png"
    },
  ]

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

  const sponserCards = [
    {
      title: "VIT  A Global Hub for Quality Education, Research, and International Partnerships",
      desc: "Dr. G. Viswanathan is the founder and Chancellor of the Vellore Institute of Technology (VIT)",
      img: "/images/Home/sponsers/vit.png"
    },
    {
      title: "B-Accuracy Business ERP Software Soultion was founded and developed by Dr.K.S.Kamaludeen",
      desc: "Meet, Dr.K.S. Kamaludeen, CEO of B-Accuracy ",
      img: "/images/Home/sponsers/b-acc.png"
    },
    {
      title: "He is also referred to as Dr. R. Rajendran in some contexts.A post on Facebook highlights his role as the founder.",
      desc: "The founder of Assist World Records is Mr. R. Rajendran.",
      img: "/images/Home/sponsers/assist.png"
    },
    {
      title: "The Global Organization of People of Indian Origin (GOPIO) is excited to announce its 2024 International Conference",
      desc: "Brisbane, November 27 (Australia India News Newsdesk)",
      img: "/images/Home/sponsers/gopio.png"
    },
    {
      title: "Bairisons Agro India manufactures and markets local products, aiming to reach and grow in global markets.",
      desc: "Bairisons Agro India Pvt Ltd BAIPL is into the business of manufacturing and marketing",
      img: "/images/Home/sponsers/barision.png"
    },
    {
      title: "The essential meaning of the word Nandavanam literally and figuratively describes the work we do.",
      desc: "Nandavanam is an independent registered trust supported by CorroHealth company,",
      img: "/images/Home/sponsers/nanda.png"
    },
  ]

  const sponserCards2 = [
    {
      title: "The founder of Cape Institute of Technology",
      desc: "Founder of the  institution.Cape Institute of Technology, established in 2001, ",
      img: "/images/Home/sponsers/cape.png"
    },
    {
      title: "AICRA is a global non-profit advancing robotics and automation for 3,500+ professionals.",
      desc: "Works for AICRA-All India Council for Robotics & Automation",
      img: "/images/Home/sponsers/aicra.png"
    },
    {
      title: "Achariya Bala Siksha Mandir Shastri Nagar Adyar | Shastri Nagar Adyar, Chennai",
      desc: "A group of educational institutions with multiple branches in Chennai.",
      img: "/images/Home/sponsers/achariya.png"
    },
    {
      title: "KRISHI JAGRAN, India’s largest circulated rural agricultural magazine,",
      desc: "The founder of Krishi Jagran is MC Dominic.He is also the Editor-in-Chief of the publication.",
      img: "/images/Home/sponsers/kj.png"
    },
    {
      title: "Terre des hommes CORE Trust (Children’s Organization for Relief",
      desc: "Simple human beings working for other human beings​",
      img: "/images/Home/sponsers/core.png"
    },
    {
      title: "They started the salon chain in 2000. CK Kumaravel is the CEO and K. Veena is the co-founder.",
      desc: "The co-founders of Naturals Salon & Spa are CK Kumaravel and K. Veena.",
      img: "/images/Home/sponsers/natural.png"
    },
  ]

  // const calculateTimeLeft = () => {
  //   const now = new Date();
  //   const targetDate = new Date(2025, 2, 23); // January 5, 2025
  //   const difference = targetDate - now;

  //   let timeLeft = {};

  //   if (difference > 0) {
  //     timeLeft = {
  //       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
  //       minutes: Math.floor((difference / 1000 / 60) % 60),
  //       seconds: Math.floor((difference / 1000) % 60),
  //     };
  //   }

  //   return timeLeft;
  // };

  const checkLoginHandler = () => {
    if (!isAuth) {
      window.alert("Please login first");
      navigate("/login", { state: { from: `/partner` } });
      return;
    }
  };

  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);



  return (
    <div>
      <Info />
      <Nav />
      <div className="w-full h-fit md:h-[90vh] md:flex justify-center items-center bg-gradient-to-l from-[#181E51] to-[#333650] text-white px-6 md:px-16">
        <div className="lft-text w-full lg:w-1/2 h-full pt-32">
          <div className="h-fit space-y-2 lg:space-y-5">
            <div className="flex items-center gap-2">
              <div className="dast size-5 lg:size-10 ">
                <img className='size-full object-cover' src="/images/Home/herodast.png" alt="" />
              </div>
              <h2 className='font-medium text-lg lg:text-2xl'>Experience the best FWC Solution</h2>
            </div>
            <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl lg:leading-14 leading-tight'>Building Smarter <span className='text-[#2965FF]'>Businesses</span> with <span className='text-[#2965FF]'>Global Networks</span> and Unlimited Potential</h1>
            <p className='font-light text-sm lg:text-md lg:w-[80%] text-zinc-300'>At FWC First World Company, we empower businesses to grow smarter, scale faster, and connect globally. Whether you're a startup or an established enterprise, our innovative strategies and vast network help you</p>
            <Magnet padding={50} disabled={false} magnetStrength={10}>
              {isAuth ? (
                <Link to={'/partner'} className="bg-[#2965FF] py-3  max-[600px]:mt-7 px-5 text-sm md:text-lg rounded-full cursor-pointer">Become a member</Link>
              ) : (
                <button
                  onClick={checkLoginHandler}
                  className="bg-[#2965FF] py-3 max-[600px]:mt-7 px-5 text-sm md:text-lg rounded-full cursor-pointer">Become a member</button>
              )}

            </Magnet>
          </div>
        </div>
        <div className="rgt-text w-full lg:w-1/2 h-full overflow-hidden mt-5 lg:mt-0 center bg-[url('/images/Home/ellips.png')] bg-cover bg-center">
          <div className="w-full h-[55vh] overflow-hidden rounded-md">
            <img className='w-full h-full lg:-mt-20 lg:h-[110vh] object-contain object-top scale-[1.4]' src="/images/Home/landing.JPG" alt="" />
          </div>
          {/* <img className='w-full h-full lg:-mt-20 lg:h-[110vh] object-cover' src="/images/Home/homepage.webp" alt="" /> */}
        </div>
      </div>

      <Marquee className=" h-full shrink-0 flex items-center gap-5 bg-[#2965FF] py-6">
        <div className="flex items-center gap-4 lg:px-10 px-5 ">
          <h1 className='lg:text-2xl text-xl font-semibold text-white'>Empowered to Create</h1>
          <div className="icon-img size-7">
            <img className='size-full object-cover' src="/images/infoHeader/icon-1.png" alt="" />
          </div>
        </div>
        <div className="flex items-center gap-4 lg:px-10 px-5 ">
          <h1 className='lg:text-2xl text-xl font-semibold text-white'>Growing as One</h1>
          <div className="icon-img size-7">
            <img className='size-full object-cover' src="/images/infoHeader/icon-1.png" alt="" />
          </div>
        </div>
        <div className="flex items-center gap-4 lg:px-10 px-5 ">
          <h1 className='lg:text-2xl text-xl font-semibold text-white'>Connected by Dreams</h1>
          <div className="icon-img size-7">
            <img className='size-full object-cover' src="/images/infoHeader/icon-1.png" alt="" />
          </div>
        </div>
        <div className="flex items-center gap-4 lg:px-10 px-5 ">
          <h1 className='lg:text-2xl text-xl font-semibold text-white'>Empowered Together</h1>
          <div className="icon-img size-7">
            <img className='size-full object-cover' src="/images/infoHeader/icon-1.png" alt="" />
          </div>
        </div>
        <div className="flex items-center gap-4 lg:px-10 px-5 ">
          <h1 className='lg:text-2xl text-xl font-semibold text-white'>Inspired to Lead</h1>
          <div className="icon-img size-7">
            <img className='size-full object-cover' src="/images/infoHeader/icon-1.png" alt="" />
          </div>
        </div>
        <div className="flex items-center gap-4 lg:px-10 px-5 ">
          <h1 className='lg:text-2xl text-xl font-semibold text-white'>Creating Impact</h1>
          <div className="icon-img size-7">
            <img className='size-full object-cover' src="/images/infoHeader/icon-1.png" alt="" />
          </div>
        </div>
      </Marquee>

      <HomePageSpotlight />
      {/* <div className="delhi-launch w-full h-screen center flex-col items-center justify-center gap-5 p-5 max-[600px]:h-fit">
        <div className="del-img w-[100vh] h-[60vh] max-[600px]:w-full max-[600px]:h-[40vh] rounded-lg overflow-hidden">
          <img className='w-full h-full object-cover object-center' src="/images/Home/delhi.webp" alt="" />
        </div>
        <Link to={'https://nas.io/first-world-community/events/delhi-launch'} target='#' className='p-2 px-6 bg-gradient-to-b from-[#002A92] to-[#000719] text-white rounded-lg font-semibold text-xl'>Register</Link>
        <div className="timer flex items-center justify-evenly bg-white">
          <div className="days-wrapper center flex-col gap-2">
            <div className="days size-12 center rounded-md"><h1 className='text-3xl text-zinc-700 font-semibold'>{timeLeft.days}</h1></div>
            <p className='text-[10px] text-[#E74C3C] uppercase'>Days</p>
          </div>
          <div className="mb-6 text-zinc-950">:</div>
          <div className="days-wrapper center flex-col gap-2">
            <div className="days size-12 center rounded-md"><h1 className='text-3xl text-zinc-700 font-semibold'>{timeLeft.hours}</h1></div>
            <p className='text-[10px] text-[#E74C3C] uppercase'>hours</p>
          </div>
          <div className="mb-6 text-zinc-950">:</div>
          <div className="days-wrapper center flex-col gap-2">
            <div className="days size-12 center rounded-md"><h1 className='text-3xl text-zinc-700 font-semibold'>{timeLeft.minutes}</h1></div>
            <p className='text-[10px] text-[#E74C3C] uppercase'>minutes</p>
          </div>
          <div className="mb-6 text-zinc-950">:</div>
          <div className="days-wrapper center flex-col gap-2">
            <div className="days size-12 center rounded-md"><h1 className='text-3xl text-zinc-700 font-semibold'>{timeLeft.seconds}</h1></div>
            <p className='text-[10px] text-[#E74C3C] uppercase'>seconds</p>
          </div>
        </div>
      </div> */}

      <div className="about-us w-full h-fit px-5 py-5 md:h-screen md:flex md:px-10 lg:px-16 md:gap-5 lg:gap-0 md:flex-row-reverse">
        <div className="lft w-full md:w-1/2 md:h-full lg:flex lg:flex-col lg:justify-center lg:items-start lg:gap-3">
          <div className="relative pl-2">
            <h1 className="text-6xl uppercase stroke-text font-bold lg:text-8xl">about us</h1>
            <div className="flex items-center gap-1 absolute top-1 lg:top-[25%] left-0  -translate-y-[-50%]">
              <div className="dast size-5 lg:size-7">
                <img className='size-full object-cover' src="/images/Home/herodast.png" alt="" />
              </div>
              <h2 className='font-medium text-lg lg:text-2xl'>About Us</h2>
            </div>
          </div>
          <h1 className='text-4xl font-semibold mt-5 text-[#2965FF] lg:text-5xl'><span className='text-black'>Transforming</span> Ideas into Digital Reality</h1>
          <p className='text-zinc-500 text-sm mt-5'>First World Community (FWC) is a global platform uniting passionate individuals to collaborate, innovate, and grow. Focused on creativity, inclusion, and shared purpose, FWC empowers members to become change-makers shaping a more connected and inspired world.</p>
          <div className="w-full mt-10 flex items-center justify-between md:justify-around lg:justify-start lg:gap-10 lg:text-4xl">
            <div className="wrapper flex flex-col gap-1 border-r-1 border-zinc-400 w-fit pr-3">
              <div className="num text-3xl lg:text-4xl text-[#2965FF] font-bold">50+</div>
              <div className="sometext text-[10px] text-zinc-600">Team Members</div>
            </div>
            <div className="wrapper flex flex-col gap-1 border-r-1 border-zinc-400 w-fit pr-3">
              <div className="num text-3xl lg:text-4xl text-[#2965FF] font-bold">20000+</div>
              <div className="sometext text-[10px] text-zinc-600">Members</div>
            </div>
            <div className="wrapper flex flex-col gap-1 w-fit pr-3">
              <div className="num text-3xl lg:text-4xl text-[#2965FF] font-bold">99%</div>
              <div className="sometext text-[10px] text-zinc-600">Success Ratio</div>
            </div>
          </div>
          <div className="founder mt-10">
            <div className="img-container w-32">
              <img className='w-full h-full object-cover' src="/images/Home/FounderOfFWC.png" alt="" />
            </div>
            <p className='text text-zinc-800 flex items-center gap-2'>Dr. CK Ashok Kumar <span className='block size-2 bg-[#2965FF] rounded-full'></span> Chairman</p>
          </div>
        </div>
        <div className="rgt w-full pt-8 md:w-1/2 md:h-full lg:p-16">
          <img className='w-full object-cover' src="/images/Home/aboutus.png" alt="" />
        </div>
      </div>


      <div className="what-we-do w-full h-fit px-5 py-10 md:px-16">
        <div className="lft w-full">
          <div className="relative">
            <h1 className="text-6xl uppercase stroke-text font-bold lg:text-8xl">What We Do</h1>
            <div className="flex items-center gap-1 absolute top-1 lg:top-[25%] left-0  -translate-y-[-50%]">
              <div className="dast size-5 lg:size-7">
                <img className='size-full object-cover' src="/images/Home/herodast.png" alt="" />
              </div>
              <h2 className='font-medium text-lg lg:text-2xl'>What We Do</h2>
            </div>
          </div>
          <h1 className='text-4xl font-semibold mt-5 text-[#2965FF] lg:text-5xl'><span className='text-black'>Empowering Ideas </span>- Building Global Impact</h1>

          <div className="card-wrapper w-full grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-20 gap-5 mt-10">
            {
              cards.map((card, i) => (
                <div key={i} className="card w-full h-[45vh] shadow-md rounded-2xl hover:border-b-8 hover:border-[#2965FF] transition-all p-5 pt-7 space-y-4">
                  <div className="img-container size-16 bg-[#2965FF] p-2 rounded-xl">
                    <img className='size-full object-cover' src={card.bgimg} alt="" />
                  </div>
                  <h1 className='text-lg text-[#2D3859] font-semibold'>{card.title}</h1>
                  <p className='text-sm text-zinc-400'>{card.desc}</p>
                </div>
              ))
            }

          </div>
        </div>
      </div>

      <div className="w-full h-screen max-[600px]:h-fit max-[600px]:p-5 flex max-[600px]:flex-col items-center justify-center">
        <div className="h-full w-1/2 max-[600px]:w-full  p-20 max-[600px]:p-0">
          <div className="top-img w-96 max-[600px]:w-56 overflow-hidden">
            <img className='w-full h-full object-cover' src="/images/Home/fwccc.png" alt="" />
          </div>
          <div className="w-full h-full overflow-hidden py-10">
            <img className='w-full h-full object-cover brightness-90' src="/images/Home/ckashok sir.webp" alt="" />
          </div>
        </div>
        <div className="h-full w-1/2 max-[600px]:w-full max-[600px]:mt-5 flex flex-col items-start justify-center gap-5 px-20 max-[600px]:px-0 pt-22 max-[600px]:pt-0">
          <div className="w-40 h-1 rounded-2xl bg-[#2965FF]"></div>
          <p className='text-4xl max-[600px]:text-2xl font-bold text-[#2D3859]'>Dr. C K Ashok Kumar</p>
          <p className='text-xl max-[600px]:text-md font-bold text-[#2D3859]'> Founder & Chairman</p>
          <p className='leading-5 mt-3 opacity-90 font-light max-[600px]:w-full'>Dr. CK Ashok Kumar believes aligning business with a deeper purpose fosters creativity and positive societal impact. His approach encourages ethical leadership and innovation through spiritual wisdom.Interested in integrating spirituality into business? Connect with Dr. CK Ashok Kumar for mentorship and guidance.
          </p>
          <p className='leading-5 mt-3 opacity-90 font-light max-[600px]:w-full'>
            Dr. CK Ashok Kumar is a revered spiritual leader, entrepreneur, and community builder who integrates spirituality with modern business leadership. He advocates for a spiritual foundation in management, fostering conscious leadership, ethical growth, and innovation.
          </p>
          <div className="sign size-20 overflow-hidden">
            <img className='size-full object-contain' src="/images/Home/asign.png" alt="" />
          </div>
          <div className="rgt-container flex gap-1">
            {
              social.map((item, index) => (
                <Link to={item.link} key={index}>
                  <div className="social-circle size-10 rounded-full overflow-hidden p-2">
                    <img className='size-full object-cover' src={item.icon} alt="" />
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>


      <div className="w-full h-[70vh] max-[600px]:h-fit flex items-center justify-center bg-radial-[at_50%_75%] from-[#00113B] via-[#000d2d] to-[#00040e] to-90%">
        <div className="h-full w-[30%] max-[600px]:w-full max-[600px]:p-5 flex flex-col items-start text-white justify-center gap-10 max-[600px]:items-center">
          <div className="h-full w-full max-[600px]:flex items-center justify-center hidden">
            <img className='h-full object-contain' src="/images/Home/world.png" alt="" />
          </div>
          <p className='leading-5 mt-5 opacity-80 '>FWC has global chapters in different countries; we are the fastest-growing community, and you can call it a revolt to support and help businesses and startups.</p>
          <img className='w-[90%]' src="/images/Home/flags.png" alt="" />
        </div>
        <div className="h-full w-[50%] flex items-center justify-center max-[600px]:hidden">
          <img className='h-full object-contain' src="/images/Home/world.png" alt="" />
        </div>
      </div>
      <div className="our-sponsors w-full h-fit px-5 py-10 md:px-16">
        <div className="our-sponsor-top lg:flex">
          <div className="our-sponsor-top-left lg:w-1/2">
            <div className="relative">
              <h1 className="text-6xl uppercase stroke-text font-bold lg:text-8xl">Our Sponsor</h1>
              <div className="flex items-center gap-1 absolute top-1 lg:top-[25%] left-0  -translate-y-[-50%]">
                <div className="dast size-5 lg:size-7">
                  <img className='size-full object-cover' src="/images/Home/herodast.png" alt="" />
                </div>
                <h2 className='font-medium text-lg lg:text-2xl'>Our Sponsor</h2>
              </div>
            </div>
            <h1 className='text-4xl font-semibold mt-5 text-[#2965FF] lg:text-5xl'>A Vision by <span className='text-black'>First
              Worlds Community </span></h1>
          </div>
          <div className="our-sponsor-top-right lg:w-1/2">
            <p className='text-zinc-500 text-sm mt-5'>FWC Sponsor’s, a First Worlds Community initiative, is a vibrant space where creativity, unity, and innovation thrive. Through events, learning, and outreach, we empower individuals and build a collaborative, inclusive future.</p>
          </div>
        </div>
        <div className="our-sponsor-btm w-full py-2 md:mt-10">
          <div className="cards w-full flex">
            <Marquee pauseOnHover={true}>
              {
                sponserCards.map((card, i) => (
                  <div key={i} className="card shrink-0 w-[30vh] h-[30vh] ml-5 bg-[#2965FF] rounded-md bg-[url('/images/Home/card-world.png')] bg-contain bg-center bg-no-repeat p-2 flex flex-col items-center justify-between">
                    <p className='text-xs text-zinc-100'>{card.title}</p>

                    <div className="our-sponser-bottom w-full flex gap-2 items-center">
                      <div className="img-container size-16 bg-[#2965FF] p-2 rounded-xl overflow-hidden">
                        <img className='size-full object-cover' src={card.img} alt="" />
                      </div>
                      <p className='text-[10px] text-zinc-200 w-[60%] leading-tight'>{card.desc}</p>
                    </div>
                  </div>
                ))
              }
            </Marquee>
          </div>

          <div className="cards w-full flex mt-5">
            <Marquee direction='right' pauseOnHover={true}>
              {
                sponserCards2.map((card, i) => (
                  <div key={i} className="card shrink-0 w-[30vh] h-[30vh] ml-5 bg-[#2965FF] rounded-md bg-[url('/images/Home/card-world.png')] bg-contain bg-center bg-no-repeat p-2 flex flex-col items-center justify-between">
                    <p className='text-xs text-zinc-100'>{card.title}</p>

                    <div className="our-sponser-bottom w-full flex gap-2 items-center">
                      <div className="img-container size-16 bg-[#2965FF] p-2 rounded-xl overflow-hidden">
                        <img className='size-full object-cover' src={card.img} alt="" />
                      </div>
                      <p className='text-[10px] text-zinc-200 w-[60%] leading-tight'>{card.desc}</p>
                    </div>
                  </div>
                ))
              }
            </Marquee>
          </div>
        </div>
      </div>
      <HomeFooter />
    </div>
  )
}
