import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PartnerHome } from '../components/Partners/PartnerHome'
import PartnerForm from './../components/Partners/PartnerForm';
import PaymentSuccess from '../components/Partners/PaymentSuccess';

export const PartnerRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PartnerHome />} />
        <Route path="/submit-details" element={<PartnerForm />} />
        <Route path="/paymentsuccess/:id" element={<PaymentSuccess />} />
    </Routes>
    </div>
  )
}
