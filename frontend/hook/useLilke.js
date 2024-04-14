import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { setRefresh } from "../redux/slice/twitt/twitt";
import toast from "react-hot-toast";
export const useLilke = () => {
    const dispatch = useDispatch();
  const apicall = async (id) => {
    const {data} = await axios.post(
      `${import.meta.env.VITE_USER_API_REQ}/twitt/like/${id}`,
      {},
      {
        withCredentials: true,
      }
    );
   
    dispatch(setRefresh(true));
    if(data.succsess){
        toast.success(data.message);
    }else{
        toast.error(data.message);
    }
    
  };
  return apicall;
};
