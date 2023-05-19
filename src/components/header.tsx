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
    <header className="flex h-24 w-full items-center justify-between border-b p-8">
      <div className="flex items-center justify-start">
        <h1 className={`text-3xl text-zinc-200 ${headerFont.className}`}>
          Lilium
        </h1>
        <MdLocalFlorist size={25} className="text-pink-300" />
      </div>
      <nav className={`flex gap-2 ${navFont.className}`}>
        <Link href="/">
          <button
            className={
              currNav === "home"
                ? `text-xl text-pink-400 overline decoration-4`
                : `text-xl text-zinc-200 hover:text-emerald-300 hover:overline decoration-4 duration-300`
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
                ? `text-xl text-pink-400 overline decoration-4`
                : `text-xl text-zinc-200 hover:text-emerald-300 hover:overline decoration-4 duration-300`
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
                ? `text-xl text-pink-400 overline decoration-4`
                : `text-xl text-zinc-200 hover:text-emerald-300 hover:overline decoration-4 duration-300`
            }
            onClick={() => handleNav("contact")}
          >
            <p>Contact</p>
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
