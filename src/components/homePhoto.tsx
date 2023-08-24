import React from "react";
import { Photos } from "@prisma/client";
import Image from "next/image";

interface Props {
  photos: Photos;
}

const HomePhoto = ({ photos }: Props) => {
  return (
    <>
      <div className="">
        <Image
          src={photos.image}
          alt={photos.alt}
          width={200}
          height={200}
          className="w-auto h-auto rounded-md"
        />
      </div>
    </>
  );
};

export default HomePhoto;
