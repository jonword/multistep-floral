import Head from "next/head";
import Image from "next/image";
import floral from "../assets/images/florals/IMG_9834.png";
import { Barlow } from "next/font/google";

const font = Barlow({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Lilium - Florals by Renee</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full w-full p-16">
        <div className="flex mx-auto flex-col md:flex-row h-full w-full items-center justify-center p-4 gap-6">
          <div>
            <Image
              src={floral}
              height={400}
              width={400}
              alt=""
              className=" rounded-lg"
            />
          </div>
          <div className="md:max-w-[500px]">
            <p className={`${font.className} text-lg`}>
              My name is Renee and I am a floral designer! From arrangements,
              bouquets, to centerpieces, I am passionate about bringing your
              vision to life! I specialize in:
            </p>
            <ul className={`${font.className} text-lg list-disc pl-8`}>
              <li>Weddings</li>
              <li>Events</li>
              <li>Special Ocassions</li>
              <li>Personal Arrangements</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
