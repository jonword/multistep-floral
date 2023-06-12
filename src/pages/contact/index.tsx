import React from "react";
import { Quattrocento } from "next/font/google";

const font = Quattrocento({
  subsets: ["latin"],
  weight: "400",
});

const Contact = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center p-4">
      <h1
        className={`${font.className} pb-2 text-center text-3xl text-gray-200`}
      >
        Contact
      </h1>
      <p className={`${font.className} text-gray-200`}>
        If you are interested... Lets connect!
      </p>
      <form
        name="Contact"
        method="POST"
        data-netlify="true"
        className="flex gap-2 w-full max-w-[600px] flex-col"
      >
        <div className="">
          <p className="pb-8 text-white"></p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="p-2 rounded-md"
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="p-2 rounded-md"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="p-2 rounded-md"
          rows={10}
        />
        <button
          type="submit"
          className=" mx-auto mt-2 flex items-center border-2 border-email bg-navhover px-4 py-3 text-white hover:bg-green-700 rounded-md"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
