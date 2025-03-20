import React from 'react'
import Nav from '../Home/Nav'
import HomeFooter from '../Home/HomeFooter'

const Thofa = () => {
    const thofaImg = [
        { img: "/images/vertices/thofa/1.png" },
        { img: "/images/vertices/thofa/2.png" },
        { img: "/images/vertices/thofa/3.png" },
        { img: "/images/vertices/thofa/4.png" },
        { img: "/images/vertices/thofa/5.png" },
        { img: "/images/vertices/thofa/6.png" },
    ]
    return (
        <>
            <Nav />
            <div className="w-full h-fit">
                <div className="hero_section flex flex-col items-center justify-center h-screen bg-[url('/images/vertices/thofa/thofaHero.png')] bg-cover bg-center text-zinc-50 text-center max-[600px]:p-5">
                    <img src="/images/vertices/thofa/heroLogo.png" className='w-52 max-[600px]:w-28 max-[600px]:bg-white max-[600px]:rounded-md max-[600px]:mb-2' alt="" />
                    <h1 className="text-4xl max-[600px]:text-xl font-bold w-1/2 max-[600px]:w-full">Sustainable Agriculture & Farmer Empowerment FWC’s Mission for a Resilient Future </h1>
                    <p className="mt-4 w-1/2 max-[600px]:w-full text-sm">FWC empowers farmers by encouraging organic farming, fostering group farming models, and helping smallholders become agripreneurs. Through collective efforts, farmers gain better market access, financial security, and long-term sustainability. Additionally, FWC integrates modern technology like drones, robotics, and sensors to enhance productivity and reduce costs.</p>
                </div>
                <div className="second-page w-full h-fit py-10 max-[600px]:py-5 flex max-[600px]:flex-col-reverse ">
                    <div className="second-page-left w-1/2 max-[600px]:w-full h-full flex flex-col items-center justify-center p-20 max-[600px]:p-5">
                        <div className="img-container">
                            <img src="/images/vertices/thofa/page2-img.png" alt="" />
                        </div>
                    </div>
                    <div className="second-page-right w-1/2 max-[600px]:w-full h-full flex flex-col items-center justify-center p-20 max-[600px]:p-5">
                        <h1 className="text-3xl max-[600px]:text-2xl font-bold">Sustainable Agriculture & Farmer Empowerment FWC’s Mission for a Resilient Future </h1>
                        <ul className='list-decimal text-left mt-5 ml-5 space-y-5 font-semibold'>
                            <li className='mt-2'>Tribal farmers ke unique challenges ko samajhkar customized farming solutions provide karna.</li>
                            <li>Chemical-free organic farming ko promote karna jo soil health aur environment ke liye beneficial ho.</li>
                            <li>Farming me drones, robotics, sensors, aur modern techniques ka upyog productivity badhane aur cost kam karne ke liye.</li>
                            <li>Vetiver (khus) farming ko promote karke rural farmers ke liye naye economic opportunities banana.</li>
                            <li>Small farmers ko collective farming me encourage karna taki wo milkar zyada munafa kama sakein.</li>
                        </ul>
                    </div>
                </div>
                <div className="third-page w-full h-fit flex max-[600px]:flex-col text-white bg-radial-[at_50%_75%] from-[#00113B] via-[#000d2d] to-[#00040e] to-90% py-5 pb-16 max-[600px]:pb-10">
                    <div className="third-page-left w-[45%] max-[600px]:w-full h-full p-10 max-[600px]:p-5 max-[600px]:flex max-[600px]:flex-col-reverse">
                        <div className="img-container-page3 w-full px-5 max-[600px]:mt-7">
                            <img src="/images/vertices/thofa/third-thofa.png" alt="" />
                        </div>
                        <div className="text-container mt-7 max-[600px]:mt-0">
                            <h1 className="text-2xl font-bold">Thamizh Organic Farmers Association (THOFA) </h1>
                            <p className="mt-4  text-sm text-zinc-400">Thamizh Organic Farmers Association (THOFA) is a dedicated initiative focused on promoting sustainable and organic farming practices among small and marginalized farmers. It operates as a key vertical of FWC, working towards ensuring the financial stability and well-being of farmers while preserving environmental sustainability.</p>
                            <p className="mt-4  text-sm text-zinc-400">THOFA aims to educate farmers about the benefits of organic farming, reducing dependence on chemical fertilizers and pesticides. By encouraging eco-friendly agricultural methods, the organization ensures the production of healthy, non-toxic food while protecting soil fertility and biodiversity.</p>
                            <p className="text-sm text-zinc-400">One of THOFA’s primary objectives is to foster group farming, helping small-scale farmers come together and form collectives for better resource management, higher productivity, and improved market access. This approach not only strengthens farmers’ financial independence but also transforms them into successful agripreneurs.</p>
                        </div>
                    </div>
                    <div className="third-page-right w-[55%] max-[600px]:w-full h-full px-10 max-[600px]:px-5">
                        <div className="text-container mt-7">
                            <h1 className="text-2xl font-bold">Smart Tribal Farming & Vetiver Cultivation Transforming Rural Livelihoods for a Sustainable Tomorrow </h1>
                            <p className="mt-4  text-sm text-zinc-400">The organization also focuses on tribal communities through the Smart Tribal Farming initiative, addressing unique agricultural challenges in remote areas. Another key effort is the promotion of vetiver cultivation (Vettipreneurs), creating new economic opportunities for rural farmers.</p>
                            <p className="text-sm text-zinc-400">Through these initiatives, FWC is building a resilient and sustainable agricultural ecosystem, ensuring food security, economic stability, and environmental well-being for future generations.</p>
                            <p className="text-sm mt-4 text-zinc-400">Agriculture is the backbone of India’s economy, providing livelihoods to over 55% of the population. Despite its importance, farmers face numerous challenges, including financial instability, declining yields, and growing threats to food security. To address these issues, the Thamizh Organic Farmers Association (THOFA), a key initiative of FWC, is dedicated to supporting small-scale farmers and promoting sustainable agricultural practices.</p>
                        </div>
                        <div className="img-container-page3 w-full mt-5 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {
                                thofaImg.map((img, index) => (
                                    <div key={index} className="img-container w-full h-[20vh]">
                                        <img
                                            className="w-full h-full object-contain"
                                            src={img.img}
                                            alt=""
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            <HomeFooter />
        </>
    )
}

export default Thofa