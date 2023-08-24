import React from "react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex h-12 bg-gray-200 w-full justify-center px-4 gap-6 items-center mt-[100px]">
      <button className="text-[#4267B2] text-3xl">
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=61550353658031&mibextid=2JQ9oc"
        >
          <FaFacebookSquare />
        </a>
      </button>
      <button className="text-3xl text-gray-200 bg-gradient-to-tr from-[#8A3AB9] to-[#BC2A8D] rounded-md">
        <a target="_blank" href="https://www.instagram.com/liliumflorals/">
          <FaInstagram />
        </a>
      </button>
    </footer>
  );
};

export default Footer;
