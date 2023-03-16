import React from "react";

interface Props {
  FormTitles: string[];
  page: number;
}

const Stepper = ({ FormTitles, page }: Props) => {
  return (
    <>
      <div className="mx-4 flex items-center justify-between p-4">
        <div className="relative flex flex-col items-center text-zinc-900">
          <div className="rounded-full flex h-6 w-8 items-center justify-center border border-slate-500 py-3 transition duration-500 ease-in-out">
            1
          </div>
          <div className="font-med absolute -top-8 mt-16 w-32 text-center text-xs uppercase">
            Step
          </div>
        </div>
        <div className="flex-auto border-t-2 transition      duration-500 ease-in-out">
          {/*  Line  */}
        </div>
      </div>
    </>
  );
};

export default Stepper;
