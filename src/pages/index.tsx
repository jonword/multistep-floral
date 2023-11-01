import React from "react";
import { Barlow, Quattrocento } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import floral from "../../public/assets/images/about/IMG_0009.jpg";
import { TypeAnimation } from "react-type-animation";

const barlow = Barlow({
  subsets: ["latin"],
  weight: "400",
});

const fancy = Quattrocento({
  subsets: ["latin"],
  weight: "400",
});

const Home = () => {
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
      <main className="flex min-h-screen w-full flex-col pt-4">
        <div className="flex justify-center">
          <h1
            className={`${fancy.className} text-2xl md:text-5xl font-bold text-teal-800`}
          >
            Wedding & Events Floral Designer
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row h-screen w-full items-center lg:justify-center p-8 gap-6 lg:gap-16">
          <div>
            <Image
              src={floral}
              height={300}
              width={300}
              alt="Florals by Renee"
              className="rounded-md"
            />
          </div>
          <div className="md:max-w-[500px]">
            <p className={`${barlow.className} text-base md:text-lg`}>
              Lilium Flowers is a wedding and event floral company based in
              Opelika, AL specializing in whimsical, modern, & detailed design.
              The team is headed up by Floral Designer Renee Word, who is
              devoted to working with our clients to curate a visual story and
              whimsical experience that is unique to each couple, and reflects
              both their lifestyle and love story. We are passionate about
              intentionality and strive to listen to your vision and make every
              detail of your day beautiful and unique, while giving you a
              seamless and stress free experience.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
