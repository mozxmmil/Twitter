import { asyncHandler } from "../utils/asyncHandler.js";
import { Notification } from "../models/notification.js";
const GetNotification = asyncHandler(async (req, res) => {
  const userid = req.user;
  
  const notification = await Notification.find({ reciver: userid }).populate({
    path: "sender",
    select: "username profilePicture",
  });

  await Notification.updateMany({ sender: userid }, { $set: { seen: true } });
  res.status(200).json({
    success: true,
    notification,
  });
});

const DeleteNotification = asyncHandler(async (req, res) => {
  const userid = req.user;
  
  // notificaton id
  if (!userid)
    return res.status(400).json({
      success: false,
      message: "Please login first",
    });
  await Notification.deleteMany({ reciver: userid });
  res.status(200).json({
    success: true,
    message: "Notification deleted successfully",
  });
});
export { GetNotification,DeleteNotification };
