import { useGoogleLogin } from "@react-oauth/google";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { googleAuth } from "../store/Actions/googleAction";
import { useNavigate } from "react-router-dom";

export default function Googlelogin() {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false)
  const navigate = useNavigate();
  const googleresponse = async (response) => {
    try {
      if (response["code"]) {
        setloading(true)
        await dispatch(googleAuth(response["code"]));
        setloading(false)
      }
    } catch (error) {
      console.error("Failed to fetch google login:", error);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: googleresponse,
    onError: googleresponse,
    flow: "auth-code",
  });
  return (
    <>
      {loading ? (
        <div className="flex items-center gap-2 justify-center">
          <div className="loader"></div>
          <p className="text-base">Loading...</p>
        </div>
      ) : (

        <div onClick={googleLogin} className="flex items-center justify-center">
          <img
            className="w-[8%]"
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
            alt=""
          />
          <p className=" text-base">Continue with Google</p>
        </div>

      )}
    </>

  );
}
