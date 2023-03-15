import React from "react";
import { Nothing_You_Could_Do } from "next/font/google";
import { MdLocalFlorist } from "react-icons/md";

const font = Nothing_You_Could_Do({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  return (
    <header className="sticky top-0 flex h-24 w-full items-center border-b p-8">
      <div className="flex items-center gap-2">
        <h1
          className={`text-5xl tracking-widest text-zinc-200 ${font.className}`}
        >
          Lilium
        </h1>
        <MdLocalFlorist size={25} className="text-pink-300" />
      </div>
    </header>
  );
};

export default Header;
