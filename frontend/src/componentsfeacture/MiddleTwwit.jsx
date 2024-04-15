import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { useLilke } from "../../hook/useLilke";
import React, { useState } from "react";
import { useTwitterTimeUpdate } from "../../hook/useTwitterTimeUpdate";
import { MdDelete } from "react-icons/md";
import { useDeleteTwitt } from "../../hook/useDeleteTwitt";
import { useSelector } from "react-redux";

const MiddleTwwit = ({
  likes,
  description,
  createdAt,
  userDetail,
  _id,
  userid,
}) => {
  const { user } = useSelector((state) => state.user);
  const TwittDelete = useDeleteTwitt();
  const time = useTwitterTimeUpdate(createdAt);
  const hadleclick = useLilke();
  const handleLike = () => {
    hadleclick(_id);
  };
  const handleDelete = () => {
    TwittDelete(_id);
  };
  return (
    <div>
      <div className="px-3 py-4 border-b-2 border-gray-300">
        <div className="flex items-start gap-3  ">
          <div className="avtar">
            <Avatar
              src="https://images.unsplash.com/photo-1711075781376-bc5107736730?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              size="50"
              round={true}
            />
          </div>
          <div className="w-full">
            <div className="flex  items-center gap-3">
              <h1 className="text-[16px] font-bold capitalize leading-4 font ">
                {userDetail && userDetail.length > 0 && userDetail[0].name}
              </h1>
              <h1 className=" font-semibold text-gray-500  ">
                {`${
                  userDetail && userDetail.length > 0 && userDetail[0].username
                }  .${time}`}
              </h1>
            </div>
            <div className="twit py-2 w-full ">
              <h1 className="leading-5 font-normal">{description}</h1>
            </div>
            <div className="footersection flex justify-between py-1 pr-10">
              <div className="flex items-center  hover:text-green-500 hover:cursor-pointer ">
                <div className=" px-2">
                  <FaRegComment />
                </div>
                <div>
                  <span>2</span>
                </div>
              </div>
              <div
                onClick={handleLike}
                className={`flex items-center  hover:text-red-500 hover:cursor-pointer`}
              >
                <div className=" px-2">
                  <FaHeart
                    className={`text-xl font-semibold ${
                      likes.length === 0 ? "text-black" : "text-pink-500"
                    } `}
                  />
                </div>
                <div>
                  <span>{likes.length}</span>
                </div>
              </div>
              <div className="flex items-center  hover:text-blue-500 hover:cursor-pointer ">
                <div className=" px-2">
                  <CiBookmark className="text-xl font-semibold" />
                </div>
                <div>
                  <span>2</span>
                </div>
              </div>
              {user?._id === userid[0] && (
                <div
                  onClick={handleDelete}
                  className="flex items-center hover:text-red-700 hover:cursor-pointer"
                >
                  <div className="px-2">
                    <MdDelete className="text-xl font-semibold" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleTwwit;
