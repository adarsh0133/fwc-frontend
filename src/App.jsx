import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home/Home';
import Login from './components/Login/Signup/Login';
import { PartnerRoutes } from './Routes/PartnerRoutes';
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Signup } from './components/Login/Signup/Signup';

import { AdminRoutes } from './Routes/AdminRoutes';
import AdminProtectedRoute from './utils/AdminProtectedRoute';
import ErrorPage from './components/Home/ErrorPage';
import Events from './components/Events/Events';
import Terms from './components/Tndc';
import InvestorCircle from './components/investorCircle/InvestorCircle';
import Thofa from './components/verticles/Thofa';
import Ayush from './components/verticles/Ayush';
import YuvaSakti from './components/verticles/YuvaSakti';
import EduAstra from './components/verticles/EduAstra';
import LeadershipHome from './components/leadership/LeadershipHome';
import FwcAtithi from './components/fwc-atithi/FwcAtithi';
import FwcStories from './components/FWC Stories/FwcStories';
import Aboutus from './components/Aboutus/Aboutus';
import NariShakti from './components/verticles/NariShakti';
import SpotlightBoost from './components/spotlightBoost/SpotlightBoost';
import Zoom from './components/zoomPremium/Zoom';

const App = () => {

  const GoogleAuthWrapper = ({ isLogin }) => {
    return (
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        {isLogin ? <Login /> : <Signup />}
      </GoogleOAuthProvider>
    );
  };


  return (
    <div className="overflow-x-hidden  font-body">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/Signup" element={<GoogleAuthWrapper isLogin={false} />} />
        <Route path="/login" element={<GoogleAuthWrapper isLogin={true} />} />
        <Route path="/partner/*" element={<PartnerRoutes />} />
        <Route path="/events" element={<Events />} />
        <Route path="/admin/*" element={
          <AdminProtectedRoute>
            <AdminRoutes />
          </AdminProtectedRoute>
        } />
        <Route path='/privacy-policy' element={<Terms />} />
        <Route path='/investor-circle' element={<InvestorCircle />} />

        {/* verticles ROUTES */}
        <Route path='/verticles/thofa' element={<Thofa />} />
        <Route path='/verticles/integrated-ayush' element={<Ayush />} />
        <Route path='/verticles/yuva-shakti-international' element={<YuvaSakti />} />
        <Route path='/verticles/edu-astra' element={<EduAstra />} />
        {/* NARISHAKTI ROUTE */}
        <Route path='/verticles/nari-shakti' element={<NariShakti/> } />

        {/* LEADERSHIP ROUTES */}
        <Route path='/leadership' element={<LeadershipHome />} />

        {/* BENEFITS ROUTES */}
        <Route path='/fwc-atithi' element={<FwcAtithi />} />
        {/* <Route path='/fwc-stories' element={<FwcStories />} /> */}

        {/* ABOUTUS ROUTE */}
        <Route path='/about-us' element={<Aboutus />} />

        {/* Spotlight Boost */}
        <Route path='/spotlight-boost' element={<SpotlightBoost/>} />
        
        {/* Zoom Premium */}
        <Route path='/zoom-premium' element={<Zoom/>} />
      </Routes>
    </div>
  )
}

export default App

