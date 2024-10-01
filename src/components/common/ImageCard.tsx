import React from "react";

import Image, { StaticImageData } from "next/image";

const ImageCard = ({ image, alt }: { image: StaticImageData; alt: string }) => {
  return (
    <div className="w-96 h-40 bg-gray-300">
      <Image src={image} alt={alt} />
    </div>
  );
};

export default ImageCard;
