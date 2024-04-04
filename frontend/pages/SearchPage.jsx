import React from "react";
import { IoMdSearch } from "react-icons/io";

const SearchPage = () => {
  return (
    <div className=" md:w-[60%]  border-l-2 border-gray-300 border-r-2">
      <form class="max-w-md mx-auto">
      <div className=" flex items-center justify-center bg-white rounded-full">
          
          <IoMdSearch className="text-3xl" />
        
        <div className="bg-red-400">
          <input
            type="text"
            placeholder="Search"
            className=" outline-none  px-3 py-2 bg-none"
          />
        </div>
      </div>
      </form>
    </div>
  );
};

export default SearchPage;
