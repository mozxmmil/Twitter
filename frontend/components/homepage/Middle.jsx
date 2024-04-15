import React from "react";
import MiddleCrearePost from "../../src/componentsfeacture/MiddleCrearePost";
import MiddleTwwit from "../../src/componentsfeacture/MiddleTwwit";
import { useGetTwitt } from "../../hook/useGetTwitt";
import { useSelector } from "react-redux";

const Middle = () => {
  const { twitt } = useSelector((state) => state.twitt);
  

  useGetTwitt();
  return (
    <div className="w-full md:w-[60%]  border-l-2 border-gray-300 border-r-2 ">
      <MiddleCrearePost />
      {twitt
        ?.slice()
        .reverse()
        .map((item) => {
          return <MiddleTwwit key={item?._id} {...item} />;
        })}
    </div>
  );
};

export default Middle;
