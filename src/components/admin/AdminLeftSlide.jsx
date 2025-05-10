import { RiSearch2Line } from '@remixicon/react';
import React, { useState } from 'react';

export default function AdminLeftSlide({ selectedComponent, setSelectedComponent, closeSidebar }) {
  const [searchQuery, setSearchQuery] = useState('');

  const getButtonClass = (component) => {
    return selectedComponent === component
      ? "center font-semibold h-[90%] w-[80%] cursor-pointer border-2 border-[#2a2a2ab6] rounded-lg bg-[black] text-white"
      : "center font-semibold h-[90%] w-[80%] cursor-pointer border-2 border-[#2a2a2ab6] rounded-lg";
  };

  const buttons = [
    { label: 'All Users', component: 'AllUsers' },
    { label: 'All Members', component: 'AllMembers' },
    { label: 'Members Forms', component: 'MembersForm' },
    { label: 'All Events', component: 'AllEvents' },
    { label: 'Weekly Meetup', component: 'WeeklyMeetup' },
    { label: 'MasterClass', component: 'MasterClass' },
    { label: 'All Atithi', component: 'Allatithi' },
    { label: 'All Investment Seeking Form', component: 'AllInvestmentSeekingForm' },
    { label: 'All Yuva Shakti', component: 'AllYuvaShakti' },
    { label: 'All Spotlight Boost', component: 'AllSpotlightBoost' },
    { label: 'All Zoom Premium', component: 'AllZoomPremium' },
    { label: 'Expert Connect', component: 'ExpertConnect' },
  ];

  const filteredButtons = buttons.filter(button =>
    button.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='overflow-y-scroll h-[100vh] pb-20'>
      <div className="w-full flex gap-3 flex-col justify-center px-5 pb-10 pt-2">
        <div className="w-full h-10 rounded-lg border-2 overflow-hidden flex items-center justify-evenly">
          <input
            type="text"
            placeholder='search'
            className='flex h-full outline-none w-[70%] items-center px-2 pr-4'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <RiSearch2Line className='h-5 w-5 text-gray-400 ' />
        </div>
        <div className="flex flex-col gap-2">
          {filteredButtons.map(button => (
            <div key={button.component} className="w-full h-[6vh] flex items-center justify-center">
              <button
                className={getButtonClass(button.component)}
                onClick={() => {
                  setSelectedComponent(button.component);
                  closeSidebar();
                  setSearchQuery('');
                }}
              >
                <p className='text-sm'>{button.label}</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}