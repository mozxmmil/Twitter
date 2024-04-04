import React from "react";
import Left from "../components/homepage/Left";
import Middle from "../components/homepage/Middle";
import Right from "../components/homepage/Right";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import { Outlet } from "react-router-dom";

export const Homepage = () => {
  return (
    <div className="flex justify-between w-[80%] mx-auto ">
      <Left />
      <Outlet/>
      <Right />
    </div>
  );
};
