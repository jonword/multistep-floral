import React from "react";
import Image from "next/image";
import floral from "../../public/assets/images/carousel/308A0113.jpg";
import { Barlow, Nothing_You_Could_Do } from "next/font/google";
import { MdLocalFlorist } from "react-icons/md";
import Head from "next/head";
import { TypeAnimation } from "react-type-animation";

const barlow = Barlow({
  subsets: ["latin"],
  weight: "400",
});

const fancy = Nothing_You_Could_Do({
  subsets: ["latin"],
  weight: "400",
});

const Home = () => {
  return (
    <>
      <Head>
        <title>Lilium - Florals by Renee</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen w-full flex-col pt-24 gap-12">
        <div className="flex justify-center md:justify-start md:pl-36">
          <TypeAnimation
            sequence={[`Lilium Florals`]}
            cursor={false}
            wrapper={"h1"}
            speed={1}
            className={`${fancy.className} text-5xl md:text-8xl font-bold text-teal-800`}
          />
        </div>
        <div className=" flex justify-center items-center p-4">
          <Image
            src={floral}
            height={400}
            width={700}
            alt=""
            className="bg-gray-100 rounded-lg"
          />
        </div>
        <div className="flex justify-center md:justify-end md:pr-36">
          <h2 className={`${barlow.className} text-2xl`}>
            Hero description here
          </h2>
        </div>
      </main>
    </>
  );
};

export default Home;
