import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";

import { CgProfile } from "react-icons/cg";
import { TiMessages } from "react-icons/ti";
import { CiCircleMore } from "react-icons/ci";
import { Link } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";

import { BsTwitterX } from "react-icons/bs";
const Left = () => {
  return (
    <div className="pt-1  w-[20%] hidden md:block lg:block ">
      <div className="fixed">
        <Link to={"/"} className="logo pt-3 px-3  ">
          <BsTwitterX className="text-3xl hover:cursor-pointer" />
        </Link>
        <div className="text-2xl font-bold pt-2 ">
          <div className="flex items-center gap-4 hover:bg-zinc-300 hover:cursor-pointer rounded-full py-2 px-3">
            <IoMdHome className="text-3xl" />
            <Link to={"/"}>Home</Link>
          </div>
        </div>
        <div className="text-2xl font-bold pt-2">
          <div className="flex items-center gap-4 hover:bg-zinc-300 hover:cursor-pointer rounded-full py-2 px-3">
            <FaSearch className="text-3xl" />
            <h1>Search</h1>
          </div>
        </div>
        <div className="text-2xl font-bold pt-2">
          <div className="flex items-center gap-4 hover:bg-zinc-300 hover:cursor-pointer rounded-full py-2 px-3">
            <IoNotificationsSharp className="text-3xl" />
            <h1>Notification</h1>
          </div>
        </div>
        <div className="text-2xl font-bold pt-2">
          <div className="flex items-center gap-4 hover:bg-zinc-300 hover:cursor-pointer rounded-full py-2 px-3">
            <TiMessages className="text-3xl" />
            <h1>Message</h1>
          </div>
        </div>
        <div className="text-2xl font-bold pt-2">
          <div className="flex items-center gap-4 hover:bg-zinc-300 hover:cursor-pointer rounded-full py-2 px-3">
            <CgProfile className="text-3xl" />
            <Link to={"/profile"}>Profile</Link>
          </div>
        </div>
        <div className="text-2xl font-bold pt-2">
          <div className="flex items-center gap-4 hover:bg-zinc-300 hover:cursor-pointer rounded-full py-2 px-3">
            <CiCircleMore className="text-3xl" />
            <h1>More</h1>
          </div>
        </div>
        <div className="text-2xl font-bold pt-2">
          <div className="flex items-center gap-4 hover:bg-zinc-300 hover:cursor-pointer rounded-full py-2 px-3">
            <RiLogoutCircleRLine className="text-3xl" />
            <h1>Log Out</h1>
          </div>
        </div>
        <div className="text-2xl font-bold pt-2">
          <div className="flex items-center gap-4 ">
            <button className="bg-blue-500 px-10 py-3 rounded-full hover:bg-blue-600 hover:cursor-pointer">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
