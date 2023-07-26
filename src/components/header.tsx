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
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  return (
    <>
      <header className="flex h-20 w-full items-center justify-between px-8">
        <div className="flex">
          <Link href="/">
            <h1
              className={`${barlow.className} text-3xl font-bold text-teal-800`}
            >
              Lilium
            </h1>
          </Link>
          <MdLocalFlorist size={20} className="text-pink-400/75" />
        </div>
        <nav className={`${barlow.className} flex gap-2`}>
          <Link href="/about">
            <button
              className={`text-xl hover:overline decoration-1 duration-150`}
            >
              <p>About</p>
            </button>
          </Link>
          <Link href="/contact">
            <button
              className={`text-xl hover:overline decoration-1 duration-150`}
            >
              <p>Contact</p>
            </button>
          </Link>
        </nav>
      </header>
      <div className="border-b border-gray-300 mx-8" />
    </>
  );
};

export default Header;
