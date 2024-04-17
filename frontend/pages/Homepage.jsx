import React, { useEffect } from "react";
import Left from "../components/homepage/Left";
import Middle from "../components/homepage/Middle";
import Right from "../components/homepage/Right";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import { Outlet } from "react-router-dom";
import Bottom from "../components/homepage/Bottom";
import useUserrGetProfile from "../hook/useUserGetProfile";
import { useGetOtherUserProfile } from "../hook/useGetOtherUserProfile";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

 const Homepage = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

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

export default Homepage