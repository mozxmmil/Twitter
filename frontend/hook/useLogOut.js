import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { setUserDataNull } from "../redux/slice/userData/userData";
import { setTwittNull } from "../redux/slice/twitt/twitt";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useLogOut = () => {
    const navigate = useNavigate()
    
  const dispatch = useDispatch();
  const Logout = async () => {
    
    try {
      await axios.get(`${import.meta.env.REACT_APP_API_URL}/logout`),
      dispatch(setUserDataNull(null));
      dispatch(setTwittNull());
      navigate("/login");
      toast.success("Logout successful");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed");
    }
  };

  return Logout;
};
