import React, { useEffect, useState } from "react";
import AdminLeftSlide from "./AdminLeftSlide";
import { useDispatch, useSelector } from "react-redux";
import { RiArrowRightLine, RiCloseLine } from "@remixicon/react";
import { currentUser } from "../../store/Actions/userAction";
import AllMembers from "./AllMembers";
import MembersForm from "./MembersForm";
import AllUsers from "./AllUsers";
import AllEvents from "./AllEvents";
import WeeklyMeetup from "./WeeklyMeetup";
import MasterClass from "./MasterClass";
import Allatithi from "./Allatithi";
import AllInvestmentSeekingForm from "./AllInvestmentSeekingForm";
import AllYuvaShakti from "./AllYuvaShakti.jsx";
import AllSpotlightBoost from "./AllSpotlightBoost.jsx";
import AllZoomPremium from "./AllZoomPremium.jsx";
// Ensure this import is correct

const componentMap = {
  AllUsers: AllUsers,
  AllMembers: AllMembers,
  MembersForm: MembersForm,
  AllEvents: AllEvents,
  WeeklyMeetup: WeeklyMeetup,
  MasterClass: MasterClass,
  Allatithi: Allatithi,
  AllInvestmentSeekingForm: AllInvestmentSeekingForm,
  AllYuvaShakti: AllYuvaShakti,
  AllSpotlightBoost: AllSpotlightBoost,
  AllZoomPremium: AllZoomPremium,
};

export default function AdminHome() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [selectedComponent, setSelectedComponent] = useState(() => {
    return localStorage.getItem("selectedComponent") || "AllMembers";
  });

  useEffect(() => {
    localStorage.setItem("selectedComponent", selectedComponent);
  }, [selectedComponent]);

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  if (!user)
    return (
      <div className='h-screen gap-5 w-full center '>
        <div className="loader scale-125"></div>
        <p className='text-2xl font-semibold'>Loading . . . </p>
      </div>
    )

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const closeSidebar = () => {
    setIsSidebarVisible(false);
  };

  const SelectedComponent = componentMap[selectedComponent];

  return (
    <>
      <div className="h-[100vh] w-full overflow-hidden relative max-[600px]:hidden">
        <div className="flex w-full h-[88vh] items-center justify-between">
          <div className="w-[18%] h-full border-r-2">
            <AdminLeftSlide
              selectedComponent={selectedComponent}
              setSelectedComponent={setSelectedComponent}
              closeSidebar={closeSidebar}
            />
          </div>
          <div className="w-[82%] h-[89vh]">
            {SelectedComponent ? <SelectedComponent /> : <div>Component not found</div>}
          </div>
        </div>
      </div>

      <div className="h-[100vh] z-[99999] w-full overflow-hidden relative min-[600px]:hidden">
        <div className="w-full top-0 fixed z-40">
        </div>
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isSidebarVisible ? "opacity-50" : "opacity-0 pointer-events-none"
            }`}
          onClick={closeSidebar}
        ></div>
        <div className="flex pt-20 w-full h-[100vh] items-center justify-between relative">
          <div
            className={`w-[18%] max-[600px]:w-[60%] bg-white z-50 max-[600px]:absolute relative max-[600px]:top-0 max-[600px]:left-0 max-[600px]:z-[99] h-full border-r-2 transition-transform duration-300 ${isSidebarVisible
              ? "max-[600px]:translate-x-0"
              : "max-[600px]:-translate-x-full"
              }`}
          >
            <RiCloseLine
              size={40}
              onClick={toggleSidebar}
              className="mr-5 mt-5 hidden max-[600px]:block absolute right-0 cursor-pointer"
            />
            <AdminLeftSlide
              selectedComponent={selectedComponent}
              setSelectedComponent={setSelectedComponent}
              closeSidebar={closeSidebar}
            />
          </div>
          <div className="w-[82%] max-[600px]:w-full h-[89vh] relative">
            <RiArrowRightLine
              onClick={toggleSidebar}
              className="mt-3 ml-5 hidden max-[600px]:block cursor-pointer"
            />
            {SelectedComponent ? <SelectedComponent /> : <div>Component not found</div>}
          </div>
        </div>
      </div>
    </>
  );
}