import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminHome from '../components/admin/AdminHome';

export const AdminRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<AdminHome />} />
            </Routes>
        </div>
    )
}
