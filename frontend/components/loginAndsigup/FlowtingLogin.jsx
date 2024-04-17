import React, { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { user, otheruser } from "../../redux/slice/userData/userData";
const FlowtingLogin = ({ loginflowting, setLoginflowting }) => {
  const userDispatch = useDispatch();
  const navigate = useNavigate();
  const [loginsecctionshow, setLoginsecctionshow] = useState(true);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (loginsecctionshow) {
      try {
        const {data} = await axios.post(
          `${import.meta.env.VITE_USER_API_REQ}/login`,
          {
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        console.log(data)
        if (data?.succsess) {
          toast.success(data.message);
          navigate("/");
          
          userDispatch(user(data.data.user));
        }
        else {
          toast.error("Something Went Wrong");
        }
      } catch (error) {
        toast.error("something went wrong")
      }
    } else {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_USER_API_REQ}/ragister`,
          {
            name,
            email,
            username,
            password,
          },
          {
            withCredentials: true,
          }
        );
        console.log(res);
        const { data } = res.data;
        console.log(data);
        if (res.data) {
          toast.success("please login");
        }
        else {
          toast("Something Went Wrong");
        }
      } catch (error) {
        console.log(error.response.data);
      }
    }
  };

  return (
    <div
      className={` ${
        !loginflowting ? "hidden" : "block"
      }  backdrop-blur-sm h-full w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white`}
    >
      <div className=" w-full h-full relative  ">
        <div className="absolute w-full h-full  bg-black  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:h-[70%] md:w-[40%] border-2 rounded-md">
          <div className="relative w-full h-full">
            <div
              onClick={() => setLoginflowting(!loginflowting)}
              className="exitbutton absolute left-3 top-3  "
            >
              <RxCross1 className="text-2xl hover:cursor-pointer hover:text-red-400" />
            </div>
            <div className="w-full h-full  flex justify-center  md:pt-4 pt-20 ">
              <div className="h-full md:w-[60%] w-full flex items-center  flex-col px-3">
                <FaXTwitter className="my-4 text-4xl" />
                <form onSubmit={handlesubmit}>
                  <div className="inputsection pt-6  w-full px-3 text-2xl flex flex-col gap-8 text-black">
                    {!loginsecctionshow && (
                      <>
                        <input
                          value={name}
                          onChange={(e) => setname(e.target.value)}
                          className="px-4 rounded-md w-full outline-none font-bold "
                          type="text"
                          placeholder="Name"
                        />
                        <input
                          value={username}
                          onChange={(e) => setusername(e.target.value)}
                          className="px-4 rounded-md w-full outline-none font-bold "
                          type="text"
                          placeholder="username"
                        />
                      </>
                    )}

                    <input
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                      className="px-4 rounded-md w-full outline-none font-bold "
                      type="email"
                      placeholder="email"
                    />
                    <input
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                      className="px-4 rounded-md w-full outline-none font-bold "
                      type="password"
                      placeholder="password"
                    />
                  </div>
                  <div className="flex w-full bg-transparent cursor-pointer mt-6 text-blue-500 boritems-center my-4 hover:text-blue-600  py-2 gap-3  md:w-[40%] rounded-full border-2 justify-center">
                    <button className="">
                      {!loginsecctionshow ? "Sign Up" : "Log In"}
                    </button>
                  </div>
                </form>
                <div>
                  <div className="flex gap-2">
                    <h1>
                      {loginsecctionshow
                        ? "Do not have an account"
                        : "Already have an account"}
                    </h1>
                    <span
                      onClick={() => setLoginsecctionshow(!loginsecctionshow)}
                      className="text-blue-300 hover:text-blue-500 hover:cursor-pointer"
                    >
                      {loginsecctionshow ? "Register" : "Login"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowtingLogin;
