import React, { useState } from "react";
import Link from "next/link";
import { Nothing_You_Could_Do, Quattrocento, Barlow } from "next/font/google";
import { MdLocalFlorist } from "react-icons/md";

const headerFont = Nothing_You_Could_Do({
  subsets: ["latin"],
  weight: "400",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  const [currNav, setCurrNav] = useState("");

  const handleNav = (buttonName: string) => {
    setCurrNav(buttonName);
  };

  return (
    <>
      <header className="flex h-32 w-full items-center justify-center  p-8">
        <div className="flex items-center justify-start">
          <h1
            className={`${barlow.className} text-6xl font-bold text-teal-800 `}
          >
            Lilium
          </h1>
          <MdLocalFlorist size={25} className="text-pink-400" />
        </div>
      </header>
      <nav
        className={`${barlow.className} flex gap-3 pb-2 px-12 justify-center items-center`}
      >
        <Link href="/">
          <button
            className={
              currNav === "home"
                ? `text-xl text-emerald-800 overline decoration-1`
                : `text-xl hover:overline decoration-1 duration-150`
            }
            onClick={() => handleNav("home")}
          >
            <p>Home</p>
          </button>
        </Link>
        <Link href="/about">
          <button
            className={
              currNav === "about"
                ? `text-xl text-emerald-800 overline decoration-1`
                : `text-xl hover:overline decoration-1 duration-150`
            }
            onClick={() => handleNav("about")}
          >
            <p>About</p>
          </button>
        </Link>
        <Link href="/contact">
          <button
            className={
              currNav === "contact"
                ? `text-xl text-emerald-800 overline decoration-1`
                : `text-xl hover:overline decoration-1 duration-150`
            }
            onClick={() => handleNav("contact")}
          >
            <p>Contact</p>
          </button>
        </Link>
      </nav>
      <div className="border-b border-gray-300 mx-32 mb-6" />
    </>
  );
};

export default Header;
