import { useGoogleLogin } from "@react-oauth/google";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { googleAuth } from "../store/Actions/googleAction";
import { useNavigate } from "react-router-dom";

export default function Googlelogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const googleresponse = async (response) => {
    try {
      if (response["code"]) {
        const result = dispatch(googleAuth(response["code"]));
        if (result) {
          navigate("/partner");
      }
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

      <div onClick={googleLogin} className="flex items-center justify-center">
        <img
          className="w-[8%]"
          src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
          alt=""
        />
        <p className=" text-base">Continue with Google</p>
      </div>

    </>

  );
}
