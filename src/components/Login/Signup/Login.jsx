import { RiEyeCloseLine, RiEyeLine } from "@remixicon/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../../store/Actions/userAction";
import Googlelogin from "../../../utils/Googlelogin";

export default function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { isAuth, error } = useSelector((state) => state.user);
    const [loading, setloading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [formDetails, setFormDetails] = useState({
        email: "",
        password: ""
    })
    const submitForm = (e) => {
        if (formDetails.email === "" || formDetails.password === "") {
            alert("Please fill in all fields")
            return
        }
        e.preventDefault()
        setloading(true)
        try {
            dispatch(loginUser(formDetails))
            setloading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (isAuth) {
            const from = location.state?.from || "/";
            navigate(from);
        }
    }, [isAuth, navigate, location.state]);

    return (
        <>
            <div className="w-full h-screen  center flex flex-col items-center justify-center bg-white rounded-l-[10vh] max-[600px]:w-full">
                <div className="  w-full h-full   flex flex-col gap-5 items-center justify-center   ">
                    <div className="w-[30%] shadow-2xl p-10   flex flex-col gap-5 items-center max-[600px]:w-[100vw]">
                        <p className="text-3xl font-semibold">Login To FWC </p>
                        <div className=" w-full  ">
                            <p className="text-zinc-500">Email</p>
                            <div className="flex w-full  gap-2 justify-between">
                                <input
                                    className="w-full h-12 flex items-center outline-none justify-center overflow-hidden p-2 rounded-lg border-2 focus:border-[#3498DB] border-[#00000033]"
                                    type="text"
                                    value={formDetails.email}
                                    onChange={(e) => setFormDetails({ ...formDetails, email: e.target.value })}
                                    autoComplete="off"
                                    autoCapitalize="off"
                                    placeholder="Enter Email Address"
                                    name="email"
                                    id=""
                                />
                            </div>
                        </div>
                        <div className=" w-full ">
                            <p className="text-zinc-500">Enter Password</p>
                            <div className="flex w-full gap-2 relative">
                                <input
                                    name="password"
                                    className="w-full h-12 flex items-center outline-none focus:border-[#3498DB] justify-center overflow-hidden p-2 rounded-lg border-2 border-[#00000033]"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="off"
                                    autoCapitalize="off"
                                    value={formDetails.password}
                                    onChange={(e) => setFormDetails({ ...formDetails, password: e.target.value })}
                                    placeholder="Enter Password"
                                />
                                <span
                                    className="cursor-pointer absolute right-4 top-3 text-[#0000006f]"
                                    onClick={() => setShowPassword(!showPassword)}

                                >
                                    {showPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
                                </span>
                            </div>
                            <div className="w-full  mt-2 flex items-center justify-end">
                                <Link
                                    to="/signup"
                                    className="text-[#3498DB] text-sm  max-[600px]:text-sm max-[600px]:mt-2"
                                >
                                    Create an account
                                </Link>
                            </div>
                        </div>
                        {
                            loading ? (
                                <div className="w-full h-12 flex gap-2 items-center justify-center overflow-hidden   rounded-lg    bg-[#3498DB]">
                                    <div className="loader"></div>
                                    <p className="font-semibold text-white ">Loading . . .</p>
                                </div>
                            ) : (
                                <div
                                    onClick={submitForm}
                                    className=" cursor-pointer  w-[100%]  text-white h-12 flex items-center justify-center overflow-hidden   rounded-lg    bg-[#3498DB]">
                                    <p className=" text-lg">Login</p>
                                </div>
                            )
                        }
                        <div className="w-full flex items-center justify-center">
                            <div className="w-[100%] flex items-center justify-between">
                                <div className="w-[45%] h-[2px] bg-zinc-400"></div>
                                <p className="font-normal text-zinc-500 text-lg">OR</p>
                                <div className="w-[45%] h-[2px] bg-zinc-400"></div>
                            </div>
                        </div>
                        <div className="cursor-pointer w-[100%] h-12 flex items-center justify-center overflow-hidden p-2  rounded-lg border-2 border-[#00000033]   bg-[white]">
                            <Googlelogin />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
