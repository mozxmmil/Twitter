import fs from "fs";

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dglehx5ma",
  api_key: "465713885654674",
  api_secret: "e94LTvMMF05yzI_B45JKfQxKmQE",
});

// Function to upload file to Cloudinary and delete local file
export const cloudinaryUpload = async (filePath) => {
  try {
    if (!filePath) return "no file";

    // Upload file to Cloudinary
    const response = await cloudinary.uploader.upload(filePath, {
      resource_type: "auto",
    });

    if (filePath) fs.unlinkSync(filePath);

    return response.url;
  } catch (error) {
    console.error("Error uploading file to Cloudinary:", error);
    // Delete local file if upload fails
    fs.unlinkSync(filePath);
    return null;
  }
};

// Usage example:
