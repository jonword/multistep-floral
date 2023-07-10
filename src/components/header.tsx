import React, { useState } from "react";
import Link from "next/link";
import { Nothing_You_Could_Do, Quattrocento } from "next/font/google";
import { MdLocalFlorist } from "react-icons/md";

const headerFont = Nothing_You_Could_Do({
  subsets: ["latin"],
  weight: "400",
});

const navFont = Quattrocento({
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
      <header className="flex h-32 w-full items-center justify-center border-b border-emerald-700/75 p-8">
        <div className="flex items-center justify-start">
          <h1 className={`${headerFont.className} text-5xl text-zinc-200 `}>
            Lilium
          </h1>
          <MdLocalFlorist size={25} className="text-pink-300" />
        </div>
      </header>
      <nav
        className={`${navFont.className} flex gap-3 py-4 px-6 justify-end items-center`}
      >
        <Link href="/">
          <button
            className={
              currNav === "home"
                ? `text-xl text-pink-300 decoration-1`
                : `text-xl text-zinc-200 hover:text-emerald-300 hover:overline decoration-1 duration-300`
            }
            onClick={() => handleNav("home")}
          >
            <p>Home</p>
          </button>
        </Link>
        <Link href="/work">
          <button
            className={
              currNav === "work"
                ? `text-xl text-pink-300 decoration-1`
                : `text-xl text-zinc-200 hover:text-emerald-300 hover:overline decoration-1 duration-300`
            }
            onClick={() => handleNav("work")}
          >
            <p>Work</p>
          </button>
        </Link>
        <Link href="/contact">
          <button
            className={
              currNav === "contact"
                ? `text-xl text-pink-300 decoration-1`
                : `text-xl text-zinc-200 hover:text-emerald-300 hover:overline decoration-1 duration-300`
            }
            onClick={() => handleNav("contact")}
          >
            <p>Contact</p>
          </button>
        </Link>
      </nav>
    </>
  );
};

export default Header;
