import React, { useRef, useState, useEffect } from "react";
import Avatar from "react-avatar";
import EmojiPicker from "emoji-picker-react";
import { MdEmojiEmotions } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setRefresh } from "../../redux/slice/twitt/twitt";
import { setIsActive } from "../../redux/slice/twitt/twitt";
import { useSelector } from "react-redux";

const MiddleCrearePost = () => {
  const { isActive } = useSelector((state) => state.twitt);
  const { profile,ProfileDataRefresh } = useSelector((state) => state.user);
  console.log(ProfileDataRefresh)
  console.log(profile?.profilePicture);
  const dispatch = useDispatch();
  const emojiimage = useRef(null);
  const [emoji, setemoji] = useState(false);

  const [inputdata, setinputdata] = useState("");

  const handleEmoji = (e) => {
    setinputdata(inputdata + e.emoji);
  };

  const handleinputchange = () => {
    setinputdata(emojiimage.current.value);
  };
  const handleinput = () => {
    const inputvalue = document.getElementById("fileinput");
    inputvalue.style.display = "none";
  };

  const hadleTwittCreate = async (e) => {
    e.preventDefault();
    try {
    
      
      await axios
        .post(
          `${import.meta.env.VITE_USER_API_REQ}/twitt`,
          {
            description: inputdata,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.succsess) toast.success(res.data.message);
          dispatch(setRefresh(true));
          setinputdata("");
        });
    } catch (error) {
      console.log(error.response.data);
      toast.error("plase fill twitt");
      
    }
  };

  const followingHandle = () => {
    dispatch(setIsActive(false));
  };
  const forYouHandle = () => {
    dispatch(setIsActive(true));
  };

  return (
    <div>
      <div className="container   ">
        <div className="headersecion  flex w-[100%] justify-evenly border-b-2 border-gray-300">
          <div
            onClick={forYouHandle}
            className={`w-[50%] hover:bg-zinc-300 py-5 ${
              isActive && "border-b-2 border-blue-500"
            } `}
          >
            <h1 className="text-xl font-bold text-center ">For You</h1>
          </div>
          <div
            onClick={followingHandle}
            className={`w-[50%] hover:bg-zinc-300 py-5 ${
              !isActive && "border-b-2 border-blue-500"
            }`}
          >
            <h1 className="text-xl font-bold text-center">Following</h1>
          </div>
        </div>
        <div className="inputsection border-b-2 pb-5 border-gray-300  ">
          <form onSubmit={hadleTwittCreate}>
            <div className=" px-3 py-4 flex items-center gap-3">
              <div className="avtar">
                <Avatar
                  size="50"
                  className=""
                  src={profile?.profilePicture}
                  round={true}
                />
              </div>
              <div className="inputtext">
                <input
                  value={inputdata}
                  onChange={handleinputchange}
                  ref={emojiimage}
                  className="border-none  outline-none  text-2xl font-semibold"
                  type="text"
                  placeholder="What's happening?"
                />
              </div>
            </div>

            <div className="flex items-center justify-between  px-10">
              <div className="flex items-center gap-2 hover:cursor-pointer">
                <div className="relative">
                  <MdEmojiEmotions
                    onClick={() => setemoji(!emoji)}
                    className="text-2xl"
                  />
                  <div className="absolute">
                    <EmojiPicker open={emoji} onEmojiClick={handleEmoji} />
                  </div>
                </div>
                <div>
                  <CiImageOn onClick={handleinput} className="text-2xl" />
                  <input
                    type="file"
                    name="file"
                    id="fileinput"
                    style={{ display: "none" }}
                  />
                </div>
              </div>

              <div>
                <button className="bg-[#1fa5ff] px-4 py-2 rounded-full hover:bg-[#1d9ef4]">
                  Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MiddleCrearePost;
