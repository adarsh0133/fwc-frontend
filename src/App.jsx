import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home/Home';
import Login from './components/Login/Signup/Login';
import { PartnerRoutes } from './Routes/PartnerRoutes';
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Signup } from './components/Login/Signup/Signup';

import { PartnerForm } from './components/Partners/PartnerForm'

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
        <Route path="/Signup" element={<GoogleAuthWrapper isLogin={false} />} />
        <Route path="/login" element={<GoogleAuthWrapper isLogin={true} />} />
        <Route path="/partner/*" element={<PartnerRoutes />} />
      </Routes>
    </div>
  )
}

export default App

