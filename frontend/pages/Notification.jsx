import React, { useEffect, useState } from "react";
import { LoadingUi } from "../components/common/ui";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaHeart, FaUser } from "react-icons/fa";
import axios from "axios";

const Notification = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [notifications, setnotificat] = useState([]);
  const [refresh, setrefresh] = useState(false);

  const apicall = async () => {
    const res = await axios.get("http://localhost:8000/api/v1/notification", {
      withCredentials: true,
    });

    setnotificat(res.data.notification);
    setIsLoading(false);
  };
  useEffect(() => {
    apicall();
  }, [refresh]);

  const deleteNotifications = async () => {
    // Implement deleteNotifications logic here

    try {
      await axios.delete("http://localhost:8000/api/v1/DeleteNotification", {
        withCredentials: true,
      });
      console.log("Notifications deleted successfully");
      setrefresh(true);
    } catch (error) {
      console.error("Error deleting notifications:", error);
    }
  };

  return (
    <div className="md:w-[60%] w-full border-l-2 border-gray-300 border-r-2 ">
      <div className="flex-[4_4_0] border-l border-r border-gray-700 min-h-screen">
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <p className="font-bold">Notifications</p>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="m-1">
              <IoSettingsOutline className="w-4" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={deleteNotifications}>
                  Delete all notifications
                </button>
              </li>
            </ul>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center h-full items-center">
            <LoadingUi size="lg" />
          </div>
        ) : (
          <>
            {notifications.length === 0 && (
              <div className="text-center p-4 font-bold">
                No notifications 🤔
              </div>
            )}

            {notifications.map((notification) => (
              <div className="border-b border-gray-700" key={notification._id}>
                <div className="flex gap-2 p-4">
                  {notification.type === "follow" && (
                    <FaUser className="w-7 h-7 text-primary" />
                  )}
                  {notification.type === "like" && (
                    <FaHeart className="w-7 h-7 text-red-500" />
                  )}

                  <Link to={`/profile/${notification?.sender?._id}`}>
                    <div className="avatar">
                      <div className="w-8 rounded-full">
                        <img
                          src={
                            notification?.sender?.profilePicture ||
                            "/avatar-placeholder.png"
                          }
                          alt="Profile"
                        />
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <span className="font-bold">
                        @{notification?.sender?.username}
                      </span>{" "}
                      {notification.type === "follow"
                        ? "followed you"
                        : "liked your post"}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Notification;
