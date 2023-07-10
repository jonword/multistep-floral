import React, { useState } from "react";
import { Quattrocento, Barlow } from "next/font/google";
import WeddingForm from "@/components/weddingForm";
import GeneralForm from "@/components/generalForm";

const quattrocento = Quattrocento({
  subsets: ["latin"],
  weight: "400",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: "400",
});

const Contact = () => {
  const [form, setForm] = useState("general");

  const handleForm = (formName: string) => setForm(formName);

  return (
    <>
      <h1 className={`${quattrocento.className} pb-2 text-center text-4xl`}>
        Contact
      </h1>
      <div
        className={`${barlow.className} flex min-h-screen w-full flex-col items-center p-8 mb-32`}
      >
        <div className="flex gap-8">
          <button
            className="hover:bg-emerald-800 duration-200 bg-teal-900 p-4 text-gray-100"
            onClick={() => handleForm("general")}
          >
            <p>General Inquiry</p>
          </button>
          <button
            className="hover:bg-emerald-800 duration-200 bg-teal-900 p-4 text-gray-100"
            onClick={() => handleForm("wedding")}
          >
            <p>Wedding Inquiry</p>
          </button>
        </div>
        {form === "wedding" ? <WeddingForm /> : <GeneralForm />}
      </div>
    </>
  );
};

export default Contact;
