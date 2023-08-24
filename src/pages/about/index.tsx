import React from "react";
import Image from "next/image";
import floral from "../../../public/assets/images/about/IMG_0009.jpg";
import { Barlow, Quattrocento } from "next/font/google";

const barlow = Barlow({
  subsets: ["latin"],
  weight: "400",
});
const quattrocento = Quattrocento({
  subsets: ["latin"],
  weight: "400",
});

const About = () => {
  return (
    <main>
      <h1
        className={`${quattrocento.className} text-center text-4xl text-teal-900 pb-16`}
      >
        About
      </h1>
      <div className="flex mx-auto flex-col md:flex-row h-screen w-full items-center justify-center p-12 gap-6 md:gap-16">
        <div>
          <Image
            src={floral}
            height={500}
            width={500}
            alt="Florals by Renee"
            className=" rounded-lg"
          />
        </div>
        <div className="md:max-w-[500px]">
          <p className={`${barlow.className} text-lg`}>
            Lilium Flowers is a wedding and event floral company based in
            Opelika, AL specializing in whimsical, modern, & detailed design.
            The team is headed up by Floral Designer Renee Word, who is devoted
            to working with our clients to curate a visual story and whimsical
            experience that is unique to each couple, and reflects both their
            lifestyle and love story. We are passionate about intentionality and
            strive to listen to your vision and make every detail of your day
            beautiful and unique, while giving you a seamless and stress free
            experience.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
