import axios from "axios";
import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET } from "../app/config";

export async function cloudinaryUpload(image) {
  if (!image) return "";

  try {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
    const response = await axios({
      url: `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
      method: "POST",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    return response.data.secure_url;
  } catch (error) {
    return false;
  }
}

export async function cloudinaryUploads(images) {
  if (!images.length) return "";

  try {
    const urlImages = await Promise.all(
      images.map(async (image) => {
        if (typeof image === "string") return image;
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
        const response = await axios({
          url: `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`,
          method: "POST",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });
        return response.data.secure_url;
      })
    );
    return urlImages;
  } catch (error) {
    return false;
  }
}
