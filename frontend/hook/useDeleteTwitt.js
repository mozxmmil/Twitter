import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { setRefresh } from "../redux/slice/twitt/twitt";
import toast from "react-hot-toast";
export const useDeleteTwitt = () => {
  const dispatch = useDispatch();
  const deleteTwitt = async (id) => {
    const { data } = await axios.delete(
      `${import.meta.env.VITE_USER_API_REQ}/twitt/delete/${id}`,
      {
        withCredentials: true,
      }
    );

    if (data.succsess) {
      dispatch(setRefresh());
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  };
  return deleteTwitt;
};
