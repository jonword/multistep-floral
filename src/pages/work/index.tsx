import PhotoCard from "@/components/photocard";
import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import prisma from "@/util/prisma";
import { Barlow } from "next/font/google";
import type { Photos } from "@prisma/client";

interface Props {
  data: Photos[];
}

const font = Barlow({
  subsets: ["latin"],
  weight: "400",
});

const Work = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps> & Props) => {
  return (
    <>
      <main className="min-h-screen w-full p-16">
        <div className="flex flex-col md:flex-row h-full w-full items-center justify-center gap-8 flex-wrap">
          {data.map((x) => (
            <PhotoCard key={x.id} photos={x} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Work;

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await prisma.photos.findMany();

  return {
    props: {
      data,
    },
  };
};
