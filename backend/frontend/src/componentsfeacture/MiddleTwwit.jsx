import React from "react";
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";

const MiddleTwwit = () => {
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
          <div>
            <div className="flex  items-center gap-3">
              <h1 className="text-[16px] font-bold capitalize leading-4 font ">
                mozammil
              </h1>
              <h1 className=" font-semibold text-gray-500  ">
                @mozammil.07 . 1m
              </h1>
            </div>
            <div className="twit py-2">
              <h1 className="leading-5 font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                quisquam accusamus facere nemo dicta consequatur veritatis est
                eveniet enim sapiente!
              </h1>
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
              <div className="flex items-center  hover:text-red-500 hover:cursor-pointer ">
                <div className=" px-2">
                  <FaRegHeart className="text-xl font-semibold" />
                </div>
                <div>
                  <span>2</span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleTwwit;
