import Head from "next/head";
import Image from "next/image";
import { Barlow } from "next/font/google";
import type { Photos } from "@prisma/client";
import PhotoCard from "@/components/photocard";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import prisma from "@/util/prisma";

interface Props {
  data: Photos[];
}

const font = Barlow({
  subsets: ["latin"],
  weight: "400",
});

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps> & Props) {
  return (
    <>
      <Head>
        <title>Lilium - Florals by Renee</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full w-full min-h-screen">
        <div>HomePage</div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await prisma.photos.findMany();

  return {
    props: {
      data,
    },
  };
};
