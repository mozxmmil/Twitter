import React from "react";
import Avatar from "react-avatar";
import { IoMdSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { hiddenShow } from "../../redux/slice/searchboxHiddenShow/searchbox";

const Right = () => {
  const searchHideen = useSelector((state)=>state.seachHiddenShow)
  
  return (
    <div className=" lg:w-[30%] hidden md:block lg:block  ">
      <div className="pt-3 px-4">
        <div className={`${searchHideen?"hidden" : "block"} flex items-center justify-center bg-white rounded-full `}>
          
            <IoMdSearch className="text-3xl" />
          
          <div className="bg-red-400">
            <input
              type="text"
              placeholder="Search"
              className=" outline-none  px-3 py-2 bg-none"
            />
          </div>
        </div>
        <div className="  bg-gray-200 px-0 py-0 lg:px-2 lg:py-2 mt-6 rounded-lg">
          <div>
            <h1 className="font-bold text-xl">who to follow</h1>
          </div>
          <div className="flex items-center justify-between py-1 px-2 mt-2 hover:bg-zinc-400 ">
            <div className="flex flex-col xl:flex-row justify-between  gap-3 lg:gap-0 w-full items-center">
              <div className=" flex flex-col md:flex-row gap-2 items-center">
                <Avatar
                  size="50"
                  className=""
                  src="https://images.unsplash.com/photo-1711075781376-bc5107736730?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  round={true}
                />
                <div className="">
                  <div>
                    <h1 className="text-[16px] font-bold capitalize leading-4 font ">
                      mozammil
                    </h1>
                  </div>
                  <div>
                    <h1 className="font-semibold text-gray-500  ">@mozammil</h1>
                  </div>
                </div>
              </div>
            <div className="w-full lg:w-auto ">
              <button className="bg-blue-300 hover:bg-blue-400 px-3 py-2 rounded-full w-full lg:w-auto">
                follow
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
