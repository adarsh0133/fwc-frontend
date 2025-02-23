import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { currentUser } from "../store/Actions/userAction";

export default function AdminProtectedRoute({ children }) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const isAdmin = user && user.role === "admin";
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

  if (!isAdmin) {
    return <Navigate to="/error" replace />;
  }

  return children;
}
