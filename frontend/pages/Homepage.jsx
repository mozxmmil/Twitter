import React, { useEffect } from "react";
import Left from "../components/homepage/Left";
import Middle from "../components/homepage/Middle";
import Right from "../components/homepage/Right";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Profile from "./Profile";
import { Outlet } from "react-router-dom";
import Bottom from "../components/homepage/Bottom";
import useUserrGetProfile from "../hook/useUserGetProfile";
import { useGetOtherUserProfile } from "../hook/useGetOtherUserProfile";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Homepage = () => {
  const { id } = useParams();
  console.log(id)
  const navigate = useNavigate();

  const { token } = useSelector((state) => state.auth);
  const {user} = useSelector((state) => state.user);
 console.log(user._id)
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);
  useUserrGetProfile(id? id : user._id);
  useGetOtherUserProfile();
  return (
    <div className="main-content flex  justify-between w-[95%] lg:w-[80%] mx-auto ">
      <Left />
      <Outlet />
      <Right />
      <Bottom />
    </div>
  );
};

export default Homepage;
