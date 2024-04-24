import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoNotificationsSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { TiMessages } from "react-icons/ti";
import { CiCircleMore } from "react-icons/ci";

import { RiLogoutCircleRLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Bottom = () => {
  return (
    <div className="fixed left-0 bottom-0 w-full block md:hidden backdrop-blur-md bg-[#0202021b] ">
      <div className="px-6 py-2 flex justify-between text-4xl cursor-pointer ">
        <Link to="/">
          <IoMdHome />
        </Link>
        <Link to={"/search"}>
          <FaSearch />
        </Link>
        <Link to={"notification"}>
          <IoNotificationsSharp />
        </Link>
        <Link to={""}>
          <TiMessages />
        </Link>
      </div>
    </div>
  );
};

export default Bottom;
