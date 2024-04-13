import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTwitt } from "../redux/slice/twitt/twitt";
import { useSelector } from "react-redux";

export const useGetTwitt = (id) => {
  const { refresh } = useSelector((state) => state.twitt);

  const dispatch = useDispatch();
  try {
    useEffect(() => {
      const callingapi = async () => {
        const { data } = await axios.get(
          `${import.meta.env.VITE_USER_API_REQ}/user/getalltwitt/${id}`,
          {
            withCredentials: true,
          }
        );
        if (data.succsess) {
          dispatch(setTwitt(data.data));
        }
      };
      callingapi();
    }, [refresh]);
  } catch (error) {
    console.log(error);
  }
};
