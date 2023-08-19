import React from "react";
import Image from "next/image";
import floral from "../../../public/assets/images/about/IMG_9834.png";
import { Barlow } from "next/font/google";

const font = Barlow({
  subsets: ["latin"],
  weight: "400",
});

const About = () => {
  return (
    <div>
      <div className="flex mx-auto flex-col md:flex-row h-full w-full items-center justify-center p-4 gap-6">
        <div>
          <Image
            src={floral}
            height={300}
            width={300}
            alt=""
            className=" rounded-lg"
          />
        </div>
        <div className="md:max-w-[500px]">
          <p className={`${font.className} text-lg`}>
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
    </div>
  );
};

export default About;
