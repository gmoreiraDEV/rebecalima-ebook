"use client";

import { CldImage, CldImageProps } from "next-cloudinary";

const CloudImage = (props: CldImageProps) => {
  return <CldImage {...props} />;
};

export default CloudImage;
