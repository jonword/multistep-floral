import Image from "next/image";
import React from "react";
import type { Photos } from "@prisma/client";

interface Props {
  photos: Photos;
}

const PhotoCard = ({ photos }: Props) => {
  return (
    <>
      <div className="">
        <Image
          src={photos.image}
          alt={photos.alt}
          width={500}
          height={500}
          className="w-auto h-auto"
        />
      </div>
    </>
  );
};

export default PhotoCard;
