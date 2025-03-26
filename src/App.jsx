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
import Thofa from './components/vertices/Thofa';
import Ayush from './components/vertices/Ayush';

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

        {/* VERTICES ROUTES */}
        <Route path='/vertices/thofa' element={<Thofa />} />
        <Route path='/vertices/integrated-ayush' element={<Ayush />} />

      </Routes>
    </div>
  )
}

export default App

