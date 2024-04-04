import React, { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import FlowtingLogin from "../components/loginAndsigup/FlowtingLogin";

const Login = () => {
  
  const [loginflowting, setLoginflowting] = useState(false);

  const openflowtinglogin = () => {
    setLoginflowting(!loginflowting);
  };
  const handlegooglelogin = () => {
    window.location.href = "http://localhost:8000/auth/google";
  };

  return (
    <div className="w-screen h-screen bg-black text-white relative ">
      <div className="flex w-full h-full flex-col md:flex-row ">
        <div className="md:w-[55%] pl-6 py-3  md:flex md:items-center md:justify-center">
          <div className="image">
            <BsTwitterX className="md:text-[22rem] text-[3rem]" />
            
          </div>
        </div>
        <div className="md:w-[45%] lg:pt-32 pt-20 pl-6 py-3  md:flex md:pt-20  md:flex-col">
          <div>
            <h1 className="text-[64px] font-bold tracking-tight leading-[50px]">
              Happening now 
            </h1>
          </div>
          <div className="pt-10">
            <h1  className="  text-3xl font-bold md:pt-14">Join today.</h1>
          </div>
          <div className="constiner pr-9 lg:pr-0 pt-3">
            <div onClick={handlegooglelogin} className="flex w-full  bg-white items-center mt-10 py-2 gap-3 border-2 md:w-[40%] rounded-full justify-center">
              <FaGoogle className="text-black" />
              <button className="font-semibold text-black">
                sign up with google
              </button>
            </div>

            <div  className="flex w-full bg-white items-center my-2  py-2 gap-3 border-2 md:w-[40%] rounded-full justify-center">
              <FaApple className="text-black" />
              <button className="font-semibold text-black">
                sign up with Apple
              </button>
            </div>
            <div className="flex w-full items-center justify-center md:w-[40%] mt-1">
              or
            </div>
            <div
              onClick={openflowtinglogin}
              className="flex hover:cursor-pointer w-full bg-blue-400 border-none text-white hover:bg-blue-500 items-center my-2  py-2 gap-3 border-2 md:w-[40%] rounded-full justify-center"
            >
              <button className="font-semibold">Create account</button>
            </div>
            <div className="mt-5 lg:mt-16">
              <div>
                <h1 className="text-2xl font-bold">
                  Already have an account ?
                </h1>
                <div
                  onClick={() => setLoginflowting(!loginflowting)}
                  className="flex w-full bg-transparent cursor-pointer text-blue-500 boritems-center my-4 hover:text-blue-600  py-2 gap-3  md:w-[40%] rounded-full border-2 justify-center"
                >
                  <button className="">sign in</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FlowtingLogin
        loginflowting={loginflowting}
        setLoginflowting={setLoginflowting}
      />
    </div>
  );
};

export default Login;
