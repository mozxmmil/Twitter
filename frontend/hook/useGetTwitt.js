import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTwitt } from "../redux/slice/twitt/twitt";
import { useSelector } from "react-redux";

export const useGetTwitt = () => {
  const { refresh } = useSelector((state) => state.twitt);
  const { isActive } = useSelector((state) => state.twitt);
  const dispatch = useDispatch();
  try {
    const callingapi = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_USER_API_REQ}/user/getalltwitt`,
        {
          withCredentials: true,
        }
      );

      if (data.succsess) {
        dispatch(setTwitt(data));
      }
    };
    const FollowingTwitt = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_USER_API_REQ}/user/getOnlyFollowerTwitt`,
        {
          withCredentials: true,
        }
      );
      
      if (data.succsess) {
        dispatch(setTwitt(data));
      }
    };
    useEffect(() => {
      if (isActive) {
        callingapi();
      } else {
        FollowingTwitt();
      }
    }, [refresh, isActive]);
  } catch (error) {
    console.log(error);
  }
};
