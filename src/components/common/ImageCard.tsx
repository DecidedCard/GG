import React from "react";

import Image, { StaticImageData } from "next/image";

const ImageCard = ({ image, alt }: { image: StaticImageData; alt: string }) => {
  return (
    <div className="w-72">
      <Image src={image} alt={alt} />
    </div>
  );
};

export default ImageCard;
