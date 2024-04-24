import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";
import useUserrGetProfile from "../hook/useUserGetProfile";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setRefreshFollowing } from "../redux/slice/userData/userData";
import toast from "react-hot-toast";
import ProfileImage from "../src/componentsfeacture/ProfileImage";
const Profile = () => {
  const [ProfileImageUploadSecction, setProfileImageUploadSecction] =
    useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { profile, user } = useSelector((state) => state.user);
  const dateString = profile?.createdAt;
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
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
  const monthName = monthNames[month - 1];

  const joinedString = `Joined ${monthName} ${year}`;
  const handlFollowUnfollow = async () => {
    if (user?.following.includes(id)) {
      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_USER_API_REQ}/user/unfollow/${id}`,
          {},
          {
            withCredentials: true,
          }
        );
        console.log(data);
        dispatch(setRefreshFollowing(id));
        toast.success(data.message);
        dispatch(setRefresh());
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_USER_API_REQ}/user/follow/${id}`,
          {},
          {
            withCredentials: true,
          }
        );
        console.log(data);
        dispatch(setRefreshFollowing(id));
        toast.success(data.message);
        dispatch(setRefresh());
      } catch (error) {
        console.log(error);
      }
    }
  };
  useUserrGetProfile(id);
  return (
    <div className="w-[60%] border-l-2 border-gray-300 border-r-2 ">
      <div className="flex  items-center pt-1  ">
        <Link to={"/"} className="px-2 py-2 rounded-full hover:bg-gray-300">
          <FaArrowLeft />
        </Link>
        <div className="px-3">
          <div className="capitalize text-2xl font-bold leading-4">
            {profile?.name.length > 8
              ? profile?.name.slice(0, 8) + "..."
              : profile?.name}
          </div>
          <div className="pt-2">3 post</div>
        </div>
      </div>
      <div>
        <div className="bg-red-400 w-full h-60   relative">
          <div className="overflow-hidden w-full h-full">
            <img
              className="w-full h-full object-cover"
              src={
                profile?.coverImage
                  ? profile.coverImage
                  : "https://images.unsplash.com/photo-1596727147705-61a532a659bd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt=""
            />
          </div>

          <div className="absolute  justify-center hover:cursor-pointer bg-red-500 h-40 w-40 rounded-full -bottom-16 z-50 left-4 border-4 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={
                profile?.profilePicture
                  ? profile.profilePicture
                  : "https://images.unsplash.com/photo-1596727147705-61a532a659bd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full  flex justify-end pr-10 py-3">
        <div className="px-3 p-2 rounded-full hover:bg-gray-300 bg-gray-200 border-2 border-black">
          {user?._id === id ? (
            <button
              onClick={() => setProfileImageUploadSecction(true)}
              className="font-bold"
            >
              Edit Profile
            </button>
          ) : (
            <button
              onClick={handlFollowUnfollow}
              className="font-bold border-none"
            >
              {user?.following.includes(id) ? "following" : "follow"}
            </button>
          )}
        </div>
        <div
          className={`${
            ProfileImageUploadSecction ? "block" : "hidden"
          } absolute  bg-[#00000059] z-[9999] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md w-full h-full flex justify-center items-center `}
        >
          <div className="bg-zinc-800 h-[40%] w-[30%] rounded-md overflow-hidden">
            <ProfileImage
              setProfileImageUploadSecction={setProfileImageUploadSecction}
            />
          </div>
        </div>
      </div>
      <div className=" px-5 py-3">
        <div>
          <h1 className="text-2xl font-bold capitalize leading-4 font ">
            {profile?.name.length > 8
              ? profile?.name.slice(0, 8) + "..."
              : profile?.name}
          </h1>
          <h1 className="font-semibold text-gray-500 pt-1 ">{`@${
            profile?.name.length > 8
              ? profile?.name.slice(0, 8) + "..."
              : profile?.name
          }`}</h1>
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
                {profile?.followers?.length === 0
                  ? 0
                  : profile?.followers.length}
              </h1>
            </div>
            <div>
              <h1 className="capitalize">Followers</h1>
            </div>
          </div>
          <div className="flex gap-1 ">
            <div>
              <h1 className="font-bold ">
                {profile?.following?.length === 0
                  ? 0
                  : profile?.following.length}
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
