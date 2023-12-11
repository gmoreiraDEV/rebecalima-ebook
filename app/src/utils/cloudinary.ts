import cloudinary from "cloudinary";

export const cloudnary = cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_API_KEY,
  api_secret: process.env.SECRET_KEY,
  secure: true,
});

cloudnary.api;
