import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setprofile } from "../redux/slice/userData/userData";

const useUserrGetProfile = () => {
  const dispatch = useDispatch();
  try {
    useEffect(() => {
      const callingapi = async () => {
        const { data } = await axios.get(
          `${import.meta.env.VITE_USER_API_REQ}/user/profile`,
          {
            withCredentials: true,
          }
        );
        dispatch(setprofile(data.data));
      };
      callingapi();
    }, []);
  } catch (error) {
    console.log(error);
  }
};

export default useUserrGetProfile;
