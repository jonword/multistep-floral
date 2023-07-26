import Image from "next/image";
import React from "react";
import type { Photos } from "@prisma/client";

interface Props {
  photos: Photos;
}

const PhotoCard = ({ photos }: Props) => {
  return (
    <>
      <div>
        <Image src={photos.image} alt={photos.alt} height={300} width={300} />
      </div>
    </>
  );
};

export default PhotoCard;
