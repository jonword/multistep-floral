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
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
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
      <input
        type="text"
        id="name"
        {...register("name", { required: true })}
        className="p-2 border border-black rounded-sm"
      />
      <label htmlFor="email">Email:</label>

      <input
        type="email"
        id="email"
        {...register("email", { required: true })}
        className="p-2 border border-black rounded-sm"
      />
      <label htmlFor="message">Message:</label>

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
