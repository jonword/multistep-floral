import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Barlow, Quattrocento } from "next/font/google";
import Head from "next/head";
import { TypeAnimation } from "react-type-animation";
import { Photos } from "@prisma/client";
import prisma from "@/util/prisma";
import Marquee from "react-fast-marquee";
import HomePhoto from "@/components/homePhoto";

interface Props {
  data: Photos[];
}

const barlow = Barlow({
  subsets: ["latin"],
  weight: "400",
});

const fancy = Quattrocento({
  subsets: ["latin"],
  weight: "400",
});

const Home = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps> & Props) => {
  return (
    <>
      <Head>
        <title>Lilium - Florals by Renee</title>
        <meta
          name="description"
          content="Floral Design Page for Lilium Florals"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen w-full flex-col pt-24">
        <div className="flex justify-center">
          <h1
            className={`${fancy.className} text-2xl md:text-3xl font-bold text-teal-800`}
          >
            Wedding & Events Floral Designer
          </h1>
        </div>
        <div className="pb-12" />
        <Marquee className=" flex justify-center items-center" speed={10}>
          {data.map((x) => (
            <HomePhoto key={x.id} photos={x} />
          ))}
        </Marquee>
      </main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await prisma.photos.findMany();

  return {
    props: {
      data,
    },
  };
};
