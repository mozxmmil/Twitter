import { asyncHandler } from "../utils/asyncHandler.js";
import multer from "multer";

// Set up multer to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images"); // Destination directory for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name
  },
});

export const upload = multer({ storage: storage });
