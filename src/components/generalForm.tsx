import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodType, z } from "zod";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const generalSchema: ZodType<FormData> = z.object({
  name: z.string({ required_error: "Required" }).min(2),
  email: z.string({ required_error: "Required" }).email(),
  message: z.string({ required_error: "Required" }).min(5),
});

const GeneralForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(generalSchema) });

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <form
      name="General Inquiry"
      onSubmit={handleSubmit(onSubmit)}
      method="POST"
      className="flex gap-2 w-full max-w-[600px] flex-col"
    >
      <label htmlFor="name">Name:</label>
      <p className="text-red-500">{errors.name?.message}</p>
      <input
        type="text"
        id="name"
        {...register("name", { required: true })}
        className="p-2 border border-black rounded-sm"
      />
      <label htmlFor="email">Email:</label>
      <p className="text-red-500">{errors.email?.message}</p>
      <input
        type="email"
        id="email"
        {...register("email", { required: true })}
        className="p-2 border border-black rounded-sm"
      />
      <label htmlFor="message">Message:</label>
      <p className="text-red-500">{errors.message?.message}</p>
      <textarea
        id="message"
        {...register("message", { required: true })}
        className="p-2 border border-black rounded-sm"
        rows={10}
      />
      <button
        type="submit"
        className=" mx-auto mt-2 flex items-center bg-gray-800 px-8 py-3 duration-150 text-white hover:bg-emerald-900 rounded-sm text-lg"
      >
        Send
      </button>
    </form>
  );
};

export default GeneralForm;
