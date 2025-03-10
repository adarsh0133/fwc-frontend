import React, { useEffect, useState } from 'react'
import Nav from './../Home/Nav';
import Footer from './../Home/HomeFooter';
import { getallevents, getallmasterClass, getallmeetup } from '../../store/Actions/adminActions';
import { useDispatch } from 'react-redux';
import { currentUser } from '../../store/Actions/userAction';
import { Link } from 'react-router-dom';

const Events = () => {
	const dispatch = useDispatch();
	const [weeklyMeetup, setweeklyMeetup] = useState([]);
	const [showUpcomingweeklyMeetup, setShowUpcomingweeklyMeetup] = useState(true);
	const [filteredweeklyMeetup, setFilteredweeklyMeetup] = useState([]);

	const [masterClass, setmasterClass] = useState([]);
	const [showUpcomingmasterClass, setShowUpcomingmasterClass] = useState(true);
	const [filteredmasterClass, setFilteredmasterClass] = useState([]);

	const [allevents, setallevents] = useState([]);

	const filterweeklyMeetup = () => {
		const now = new Date();
		if (showUpcomingweeklyMeetup) {
			return weeklyMeetup.filter((event) => new Date(event.date) > now);
		} else {
			return weeklyMeetup.filter((event) => new Date(event.date) <= now);
		}
	};

	const filtermasterClass = () => {
		const now = new Date();
		if (showUpcomingmasterClass) {
			return masterClass.filter((event) => new Date(event.date) > now);
		} else {
			return masterClass.filter((event) => new Date(event.date) <= now);
		}
	};

	useEffect(() => {
		dispatch(currentUser());
		try {
			dispatch(getallevents()).then((response) => {
				setallevents(response);
			});
			dispatch(getallmeetup()).then((response) => {
				setweeklyMeetup(response);
			});
			dispatch(getallmasterClass()).then((response) => {
				setmasterClass(response);
			});
		} catch (error) {
			console.error("Failed to fetch events:", error);
		}
	}, [dispatch]);


	useEffect(() => {
		setFilteredweeklyMeetup(filterweeklyMeetup());
		setFilteredmasterClass(filtermasterClass());
	}, [weeklyMeetup, showUpcomingweeklyMeetup, masterClass, showUpcomingmasterClass]);

	const handleToggleweeklyMeetup = (isUpcoming) => {
		setShowUpcomingweeklyMeetup(isUpcoming);
	};

	const handleTogglemasterClass = (isUpcoming) => {
		setShowUpcomingmasterClass(isUpcoming);
	};

	return (
		<>
			<Nav />
			<div className="bg-[#FBFBFB] w-full h-screen px-16 pt-32 flex max-[600px]:flex-col max-[600px]:h-fit max-[600px]:px-8 max-[600px]:pt-20">
				<div className="hero-text w-1/2 max-[600px]:w-full font-semibold">
					<h1 className='text-7xl max-[600px]:text-3xl max-[600px]:font-bold'><span className='text-[#E74C3C]'>Weakley</span> Meetups</h1>
					<h2 className='text-3xl max-[600px]:text-xl my-6 max-[600px]:my-3 font-bold'>Your Weekly Dose of Inspiration</h2>
					<p className='w-[65%] max-[600px]:w-full text-zinc-700 max-[600px]:leading-tight'>Join us every week for dynamic meetups designed to spark ideas and connections. Expect networking, guest speakers, and workshops—available both in-person and virtually</p>

					<div className="key-highlights mt-10">
						<h3 className='text-2xl font-bold'>Key Highlights</h3>
						<ul className="mt-4 ml-4 text-zinc-700">
							<li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1 before:w-5 before:h-5 before:bg-[url('/images/events/eventsArrow.png')] before:bg-contain before:bg-no-repeat">
								Network with peers and innovators.
							</li>
							<li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1 before:w-5 before:h-5 before:bg-[url('/images/events/eventsArrow.png')] before:bg-contain before:bg-no-repeat">
								Learn from expert-led talks.
							</li>
							<li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1 before:w-5 before:h-5 before:bg-[url('/images/events/eventsArrow.png')] before:bg-contain before:bg-no-repeat">
								Networking opportunities.
							</li>
							<li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1 before:w-5 before:h-5 before:bg-[url('/images/events/eventsArrow.png')] before:bg-contain before:bg-no-repeat">
								Collaborate in interactive sessions.
							</li>
						</ul>

					</div>
				</div>
				<div className="hero-img w-1/2 max-[600px]:w-full h-full pb-20 max-[600px]:p-10 max-[600px]:pb-10">
					<img className='w-full h-full object-contain' src="/images/events/heroimg.png" alt="" />
				</div>
			</div>
			<div className="w-full h-fit pb-10">
				<div className="weeklyMeetup w-full max-[600px]:px-5">
					<div className="w-full flex gap-5 px-20 max-[600px]:px-5">
						<div className="">
							<button
								className={`px-3 py-2 mt-5 rounded-md ${showUpcomingweeklyMeetup
									? "bg-zinc-700 text-white"
									: "text-zinc-800"
									} cursor-pointer`}
								onClick={() => handleToggleweeklyMeetup(true)}
							>
								Upcoming
							</button>
						</div>
						<div className="">
							<button
								className={`px-3 py-2 mt-5 rounded-md ${!showUpcomingweeklyMeetup
									? "bg-zinc-700 text-white"
									: "text-zinc-800"
									} cursor-pointer`}
								onClick={() => handleToggleweeklyMeetup(false)}
							>
								Past
							</button>
						</div>
					</div>
					<div className="w-full class-cards-wrapper flex flex-col items-center justify-center gap-10 mt-5 max-[600px]:pb-5 max-[600px]:space-y-7">
						{filteredweeklyMeetup.length === 0 ? (
							<div className="class-cards w-[45vw] max-[600px]:w-full h-[35vh] flex justify-between">
								<p className="text-nowrap mr-5 max-[600px]:hidden"></p>
								<div className="class-cards-dets w-[40vw] max-[600px]:w-full h-full flex bg-white rounded-md p-8 hover:bg-[#F3F3F3] border-2 border-[#B5B5B5]">
									<div className="class-dets w-1/2 h-full flex flex-col justify-between">
										<h1 className="text-xl font-medium leading-tight">
											Coming Soon
										</h1>
										<div className="flex flex-col gap-2">
											<div className="flex gap-2 items-center">
												<div className="size-4 rounded-full overflow-hidden">
													<img
														className="size-full object-contain"
														src="/images/events/clock.png"
														alt=""
													/>
												</div>
												<p className="text-zinc-600 text-xs">Any IST</p>
											</div>
											<div className="flex gap-2">
												<div className="size-4 rounded-full overflow-hidden">
													<img
														className="size-full object-contain"
														src="/images/events/mode.png"
														alt=""
													/>
												</div>
												<p className="text-zinc-600 text-xs">Hello</p>
											</div>
											<div className="flex gap-2">
												<div className="size-4 rounded-full overflow-hidden">
													<img
														className="size-full object-cover"
														// src=""
														alt=""
													/>
												</div>
												<p className="text-zinc-600 text-xs">from admin</p>
											</div>
										</div>
									</div>
									<div className="w-1/2 h-full rounded-md overflow-hidden">
										<img
											className="w-full h-full object-contain max-[600px]:object-contain"
											src={"/images/events/comingsoon.gif"}
											alt=""
										/>
									</div>
								</div>
							</div>
						) : (
							filteredweeklyMeetup.map((event, index) => (
								<div
									key={index}
									className="class-cards w-[45vw] max-[600px]:w-full h-[30vh] max-[600px]:h-[50vh] flex max-[600px]:flex-col justify-between"
								>
									<p className="text-nowrap mr-5 max-[600px]:mb-2">
										{new Date(event.date).toLocaleDateString()}
									</p>
									<div className="class-cards-dets w-[40vw] max-[600px]:w-full h-full flex bg-white rounded-md p-8 max-[600px]:p-4 border-[2px] border-zinc-400 hover:bg-[#F3F3F3]">
										<div className="class-dets w-1/2 max-[600px]:w-full h-full flex flex-col justify-between">
											<h1 className="text-xl font-medium leading-tight">
												{event.title}
											</h1>
											<div className="w-full h-full my-2 rounded-md overflow-hidden border-zinc-200 border-2 min-[600px]:hidden">
												<img
													className="w-full h-full object-contain"
													src={event.thumbnail.url}
													alt=""
												/>
											</div>
											<div className="flex flex-col gap-2 max-[600px]:mt-2">
												<div className="flex gap-2 items-center">
													<div className="size-4 rounded-full overflow-hidden">
														<img
															className="size-full object-contain"
															src="/images/events/link.png"
															alt=""
														/>
													</div>
													<Link
														to={event.link}
														target="#"
														className="text-xs text-red-500 font-bold"
													>
														Registration Link
													</Link>
												</div>
												<div className="flex gap-2 items-center">
													<div className="size-4 rounded-full overflow-hidden">
														<img
															className="size-full object-contain"
															src="/images/events/clock.png"
															alt=""
														/>
													</div>
													<p className="text-zinc-600 text-xs">
														{event.time} IST
													</p>
												</div>
												<div className="flex gap-2">
													<div className="size-4 rounded-full overflow-hidden">
														<img
															className="size-full object-contain"
															src="/images/events/mode.png"
															alt=""
														/>
													</div>
													<p className="text-zinc-600 text-xs">{event.mode}</p>
												</div>
												<div className="flex gap-2">
													<p className="text-zinc-600 text-xs">
														<span className='text-black font-semibold'>Organised By :</span> {event.organisedBy}
													</p>
												</div>
											</div>
										</div>
										<div className="w-1/2 h-full rounded-md overflow-hidden border-zinc-200 border-2 max-[600px]:hidden">
											<img
												className="w-full h-full object-contain"
												src={event.thumbnail.url}
												alt=""
											/>
										</div>
									</div>
								</div>
							))
						)}
					</div>
				</div>
			</div>

			<div className="exclusive-events w-full h-fit bg-radial-[at_50%_75%] from-[#00113B] via-[#000d2d] to-[#00040e] to-90% px-16 py-16 max-[600px]:px-8 max-[600px]:py-8">
				<div className="flex max-[600px]:flex-col ">
					<div className="exclusive-events-text w-1/2 max-[600px]:w-full font-semibold text-white">
						<h1 className='text-7xl max-[600px]:text-3xl'>Exclusive Events</h1>
						<h2 className='text-3xl max-[600px]:text-xl my-6 max-[600px]:my-3 font-bold'>Where Vision Meets Opportunity</h2>
						<p className='w-[65%] max-[600px]:w-full text-zinc-400'>Our Exclusive Events—conferences, seminars, and retreats—bring together top thought leaders and industry pioneers. Gain insights, form partnerships, and elevate your entrepreneurial journey.</p>

						<div className="key-highlights mt-10">
							<h3 className='text-2xl font-bold'>Key Highlights</h3>
							<ul className="mt-4 ml-4 text-zinc-400">
								<li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1 before:w-5 before:h-5 before:bg-[url('/images/events/eventsArrow.png')] before:bg-contain before:bg-no-repeat">
									Hear from globally recognized speakers
								</li>
								<li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1 before:w-5 before:h-5 before:bg-[url('/images/events/eventsArrow.png')] before:bg-contain before:bg-no-repeat">
									Access cutting-edge industry trends
								</li>
								<li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1 before:w-5 before:h-5 before:bg-[url('/images/events/eventsArrow.png')] before:bg-contain before:bg-no-repeat">
									Build strategic alliances
								</li>
							</ul>

						</div>
					</div>
					<div className="exclusive-events-img w-1/2 max-[600px]:w-full">
						<img className='w-full h-[50vh] object-contain' src="/images/events/ee.png" alt="" />
					</div>
				</div>
				<div className="exclusive-events-cards-wrapper w-full pt-32 max-[600px]:pt-5 grid grid-cols-3 max-[820px]:grid-cols-1 max-[1150px]:grid-cols-2 place-items-center gap-20 max-[600px]:space-y-10">
					{
						allevents.map((event, index) => (
							<div key={index} className="exclusive-events-cards w-[45vh] h-[55vh] border-[2px] border-[#B5B5B5] flex  flex-col gap-2 p-6 text-white">
								<h1 className='text-xl font-semibold'>{event.title}</h1>
								<div className="img-container w-full h-[50%] my-5 bg-gray-200 overflow-hidden rounded-md">
									<img className='w-full h-full object-cover' src={event.thumbnail.url} alt="" />
								</div>
								<div className="flex items-center gap-2">
									<div className="size-5 overflow-hidden rounded-full">
										<img className='size-full object-contain' src={'/images/events/clock.png'} alt="" />
									</div>
									<p className='timing-exclusive-event text-xs'>{event.time} IST</p>
								</div>
								<div className="flex items-center gap-2">
									<div className="size-5 overflow-hidden rounded-full">
										<img className='size-full object-contain' src={'/images/events/mode.png'} alt="" />
									</div>
									<p className='timing-exclusive-event uppercase text-xs'>{event.location}</p>
								</div>
								<a href={event.register_link} target='#' className='bg-gradient-to-b from-[#00247F] to-[#020F2F] font-semibold text-white px-3 py-1 rounded-md my-2 text-center'>Register</a>
							</div>
						))
					}
				</div>
			</div>
			<div className="">
				<div className="bg-[#FBFBFB] w-full h-fit px-16 pt-32 max-[600px]:pt-8 max-[600px]:px-8 flex max-[600px]:flex-col">
					<div className="hero-text w-1/2 max-[600px]:w-full font-semibold ">
						<h1 className='text-7xl max-[600px]:text-3xl max-[600px]:font-bold'>Masterclasses</h1>
						<h2 className='text-2xl max-[600px]:text-xl my-6 max-[600px]:my-3 font-bold'>Master Skills, Master Success</h2>
						<p className='w-[65%] max-[600px]:w-full text-zinc-700'>Learn from the best in our expert-led Masterclasses. Covering key business topics, these sessions offer practical skills and certifications to help you thrive—available live or on-demand.</p>

						<div className="key-highlights mt-10">
							<h3 className='text-2xl font-bold'>Key Highlights</h3>
							<ul className="mt-4 ml-4 text-zinc-700">
								<li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1 before:w-5 before:h-5 before:bg-[url('/images/events/eventsArrow.png')] before:bg-contain before:bg-no-repeat">
									Hands-on learning with industry pros
								</li>
								<li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1 before:w-5 before:h-5 before:bg-[url('/images/events/eventsArrow.png')] before:bg-contain before:bg-no-repeat">
									Topics from marketing to funding.
								</li>
								<li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1 before:w-5 before:h-5 before:bg-[url('/images/events/eventsArrow.png')] before:bg-contain before:bg-no-repeat">
									Earn credentials for your expertise.
								</li>
							</ul>
						</div>
					</div>
					<div className="hero-img w-1/2 max-[600px]:w-full h-[70vh] max-[600px]:h-[40vh] pb-20 max-[600px]:pb-5">
						<img className='w-full h-full object-contain' src="/images/events/msc.png" alt="" />
					</div>
				</div>
				<div className="w-full h-fit pb-10">
					<div className="weeklyMeetup w-full max-[600px]:px-5">
						<div className="w-full flex gap-5 px-20 max-[600px]:px-5">
							<div className="">
								<button
									className={`px-3 py-2 mt-5 rounded-md ${showUpcomingmasterClass
										? "bg-zinc-700 text-white"
										: "text-zinc-800"
										} cursor-pointer`}
									onClick={() => handleTogglemasterClass(true)}
								>
									Upcoming
								</button>
							</div>
							<div className="">
								<button
									className={`px-3 py-2 mt-5 rounded-md ${!showUpcomingmasterClass
										? "bg-zinc-700 text-white"
										: "text-zinc-800"
										} cursor-pointer`}
									onClick={() => handleTogglemasterClass(false)}
								>
									Past
								</button>
							</div>
						</div>
						<div className="w-full class-cards-wrapper flex flex-col items-center justify-center gap-10 mt-5 max-[600px]:space-y-10">
							{filteredmasterClass.length === 0 ? (
								<div className="class-cards w-[45vw] max-[600px]:w-full h-[35vh] flex justify-between">
									<p className="text-nowrap mr-5 max-[600px]:hidden"></p>
									<div className="class-cards-dets w-[40vw] max-[600px]:w-full h-full flex bg-white rounded-md p-8 hover:bg-[#F3F3F3] border-2 border-[#B5B5B5]">
										<div className="class-dets w-1/2 h-full flex flex-col justify-between">
											<h1 className="text-xl font-medium leading-tight">
												Coming Soon
											</h1>
											<div className="flex flex-col gap-2">
												<div className="flex gap-2 items-center">
													<div className="size-4 rounded-full overflow-hidden">
														<img
															className="size-full object-contain"
															src="/Images/ivyAcceleratorProgram/clock.png"
															alt=""
														/>
													</div>
													<p className="text-zinc-600 text-xs">Any IST</p>
												</div>
												<div className="flex gap-2">
													<div className="size-4 rounded-full overflow-hidden">
														<img
															className="size-full object-contain"
															src="/Images/ivyAcceleratorProgram/mode.png"
															alt=""
														/>
													</div>
													<p className="text-zinc-600 text-xs">Hello</p>
												</div>
												<div className="flex gap-2">
													<div className="size-4 rounded-full overflow-hidden">
														<img
															className="size-full object-cover"
															// src=""
															alt=""
														/>
													</div>
													<p className="text-zinc-600 text-xs">from admin</p>
												</div>
											</div>
										</div>
										<div className="w-1/2 h-full rounded-md overflow-hidden">
											<img
												className="w-full h-full object-cover max-[600px]:object-contain"
												src={"/Images/comingsoon.gif"}
												alt=""
											/>
										</div>
									</div>
								</div>
							) : (
								filteredmasterClass.map((event, index) => (
									<div
										key={index}
										className="class-cards w-[45vw] max-[600px]:w-full h-[30vh] max-[600px]:h-[50vh] flex max-[600px]:flex-col justify-between"
									>
										<p className="text-nowrap mr-5 max-[600px]:mb-2">
											{new Date(event.date).toLocaleDateString()}
										</p>
										<div className="class-cards-dets w-[40vw] max-[600px]:w-full h-full flex bg-white rounded-md p-8 max-[600px]:p-4 border-[2px] border-zinc-400 hover:bg-[#F3F3F3]">
											<div className="class-dets w-1/2 max-[600px]:w-full h-full flex flex-col justify-between">
												<h1 className="text-xl max-[600px]:text-lg font-medium leading-tight break-words overflow-wrap anywhere">
													{event.title}
												</h1>
												<div className="w-full h-full my-2 rounded-md overflow-hidden border-zinc-200 border-2 min-[600px]:hidden">
													<img
														className="w-full h-full object-contain"
														src={event.thumbnail.url}
														alt=""
													/>
												</div>
												<div className="flex flex-col gap-2 max-[600px]:mt-2">
													<div className="flex gap-2 items-center">
														<div className="size-4 rounded-full overflow-hidden">
															<img
																className="size-full object-contain"
																src="/images/events/link.png"
																alt=""
															/>
														</div>
														<Link
															to={event.link}
															target="#"
															className="text-xs text-red-500 font-bold"
														>
															Registration Link
														</Link>
													</div>
													<div className="flex gap-2 items-center">
														<p className="text-zinc-600 text-xs">
															<span className='text-black font-semibold'>Time :</span> {event.time} IST
														</p>
													</div>
													<div className="flex gap-2">
														<p className="text-zinc-600 text-xs">
															<span className='text-black font-semibold'>Mode :</span> {event.mode}
														</p>
													</div>
													<div className="flex gap-2">
														<p className="text-zinc-600 text-xs">
															<span className='text-black font-semibold'>Organised By :</span> {event.organisedBy}
														</p>
													</div>
												</div>
											</div>
											<div className="w-1/2 h-full rounded-md overflow-hidden border-zinc-200 border-2 max-[600px]:hidden">
												<img
													className="w-full h-full object-contain"
													src={event.thumbnail.url}
													alt=""
												/>
											</div>
										</div>
									</div>
								))
							)}
						</div>
					</div>
				</div>

			</div>
			<Footer />
		</>
	)
}

export default Events
