import React, { useState } from "react";
import { Quattrocento, Barlow } from "next/font/google";
import Link from "next/link";
import WeddingForm from "@/components/weddingForm";

const quattrocento = Quattrocento({
  subsets: ["latin"],
  weight: "400",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: "400",
});

const Contact = () => {
  return (
    <>
      <h1
        className={`${quattrocento.className} pb-16 text-center text-4xl text-teal-900`}
      >
        Contact
      </h1>
      <p className={`${barlow.className} text-center text-lg pb-2`}>
        For wedding inquiries, please fill out the form below. For all other
        inquiries, you can email me at{" "}
        <span className=" text-gray-800">reneerumfelt@gmail.com</span>! :)
      </p>
      <div
        className={`${barlow.className} flex min-h-screen w-full flex-col items-center p-8 mb-32`}
      >
        <div className="flex gap-8 mb-8">
          <Link href="https://forms.gle/9wB3Chh2BpGFujug6" target="_blank">
            <button className="hover:bg-emerald-800 duration-200 bg-teal-900 p-4 text-gray-100">
              <p>Wedding Inquiry</p>
            </button>
          </Link>
        </div>
      </div>
      <WeddingForm />
    </>
  );
};

export default Contact;
