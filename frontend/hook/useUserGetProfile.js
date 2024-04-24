import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setprofile } from "../redux/slice/userData/userData";
import { useSelector } from "react-redux";

const useUserrGetProfile = (id) => {
  const { ProfileDataRefresh } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  try {
    useEffect(() => {
      const callingapi = async () => {
        const { data } = await axios.get(
          `${import.meta.env.VITE_USER_API_REQ}/user/profile/${id}`,
          {
            withCredentials: true,
          }
        );
        dispatch(setprofile(data.data));
      };
      callingapi();
    }, [id, ProfileDataRefresh]);
  } catch (error) {
    console.log(error);
  }
};

export default useUserrGetProfile;
