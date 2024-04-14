import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";
import useUserrGetProfile from "../hook/useUserGetProfile";
import { useSelector } from "react-redux";
const Profile = () => {
  const { id } = useParams();
  const { profile } = useSelector((state) => state.user);
  console.log(profile);
  const dateString = profile?.createdAt;
  const date = new Date(dateString);

  // Extract year and month from the date
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Month is zero-based, so we add 1

  // Convert month number to month name
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[month - 1]; // Adjusting index

  // Construct the desired string
  const joinedString = `Joined ${monthName} ${year}`; // Output: Joined April 2024

  useUserrGetProfile(id);
  return (
    <div className="w-[60%] border-l-2 border-gray-300 border-r-2 ">
      <div className="flex  items-center pt-1  ">
        <Link to={"/"} className="px-2 py-2 rounded-full hover:bg-gray-300">
          <FaArrowLeft />
        </Link>
        <div className="px-3">
          <div className="capitalize text-2xl font-bold leading-4">
            {profile?.name}
          </div>
          <div className="pt-2">3 post</div>
        </div>
      </div>
      <div>
        <div className="bg-red-400 w-full h-60   relative">
          <div className="overflow-hidden w-full h-full">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1647828150413-1717ace5bac2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>

          <div className="absolute  justify-center hover:cursor-pointer bg-red-500 h-40 w-40 rounded-full -bottom-16 z-50 left-4 border-4 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1711075781376-bc5107736730?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full  flex justify-end pr-10 py-3">
        <div className="px-3 p-2 rounded-full hover:bg-gray-300 bg-gray-200 border-2 border-black">
          <button className="font-bold ">Edit Profie</button>
        </div>
      </div>
      <div className=" px-5 py-3">
        <div>
          <h1 className="text-2xl font-bold capitalize leading-4 font ">
            {profile?.name}
          </h1>
          <h1 className="font-semibold text-gray-500 pt-1 ">{`@${profile?.username}`}</h1>
        </div>
        <div className="flex items-center gap-2 pt-2">
          <div>
            <CiCalendar />
          </div>
          <div>
            <h1 className="capitalize">{joinedString}</h1>
          </div>
        </div>
        <div className="flex gap-2 items-center pt-1">
          <div className="flex gap-1 ">
            <div>
              <h1 className="font-bold ">
                {profile?.followers?.length === 0 ? 0 : profile?.followers}
              </h1>
            </div>
            <div>
              <h1 className="capitalize">Followers</h1>
            </div>
          </div>
          <div className="flex gap-1 ">
            <div>
              <h1 className="font-bold ">
                {profile?.following?.length === 0 ? 0 : profile?.following}
              </h1>
            </div>
            <div>
              <h1 className="capitalize">following</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
