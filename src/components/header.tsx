import React, { useState } from "react";
import Link from "next/link";
import { Nothing_You_Could_Do, Barlow, Quattrocento } from "next/font/google";
import { MdLocalFlorist } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

const headerFont = Quattrocento({
  subsets: ["latin"],
  weight: "400",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <>
      <header className="flex h-20 w-full items-center justify-between px-8">
        <div className="flex items-center">
          <Link href="/">
            <h1
              className={`${headerFont.className} text-3xl font-bold text-emerald-900 tracking-wide`}
            >
              Lilium
            </h1>
          </Link>
          <MdLocalFlorist size={20} className="text-pink-400/75" />
        </div>
        <nav className={`${barlow.className} hidden md:flex gap-2`}>
          <Link href="/about">
            <button
              className={`text-lg hover:overline decoration-1 duration-150`}
            >
              <p>About</p>
            </button>
          </Link>
          <Link href="/work">
            <button
              className={`text-lg hover:overline decoration-1 duration-150`}
            >
              <p>Work</p>
            </button>
          </Link>

          <Link href="/contact">
            <button
              className={`text-lg hover:overline decoration-1 duration-150`}
            >
              <p>Contact</p>
            </button>
          </Link>
        </nav>
        {/* HAMBURGER */}
        <div
          onClick={handleClick}
          className="z-10 flex items-center justify-center pr-4 text-2xl text-gray-700 hover:cursor-pointer md:hidden"
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        {/* MOBILE */}
        <nav
          className={
            !nav
              ? `hidden`
              : `${barlow.className} absolute top-0 right-0 h-screen w-full flex-col items-center pt-20 bg-gray-100 flex gap-2`
          }
        >
          <Link href="/about">
            <button
              className={`text-lg hover:overline decoration-1 duration-150`}
              onClick={handleClick}
            >
              <p>About</p>
            </button>
          </Link>
          <Link href="/work">
            <button
              className={`text-lg hover:overline decoration-1 duration-150`}
              onClick={handleClick}
            >
              <p>Work</p>
            </button>
          </Link>

          <Link href="/contact">
            <button
              className={`text-lg hover:overline decoration-1 duration-150`}
              onClick={handleClick}
            >
              <p>Contact</p>
            </button>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
