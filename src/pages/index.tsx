import Form from "@/components/form";
import Stepper from "@/components/stepper";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-full mt-24 flex-col items-center justify-center mx-2 mb-16">
        <div className="flex flex-col w-full max-w-[600px] bg-gray-100 p-4 shadow-md gap-10 shadow-pink-200">
          <Form />
        </div>
      </main>
    </>
  );
}
