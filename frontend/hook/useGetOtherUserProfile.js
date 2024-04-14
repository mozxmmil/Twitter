import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { otheruser } from "../redux/slice/userData/userData";


export const useGetOtherUserProfile = () => {
    
    const dispatch = useDispatch();
  useEffect(() => {
    const getuser = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_USER_API_REQ}/user/all`,
        {
          withCredentials: true,
        }
      );
      dispatch(otheruser(data.data));
    };
    getuser();
  }, []);
};
