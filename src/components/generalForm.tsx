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
  name: z.string({ required_error: "Name is Required" }),
  email: z.string().email(),
  message: z.string({ required_error: "Message is Required" }),
});

const GeneralForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(generalSchema) });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form
      name="General Inquiry"
      onSubmit={onSubmit}
      method="POST"
      className="flex gap-2 w-full max-w-[600px] flex-col"
    >
      <label>Name:</label>
      <input
        {...register("name")}
        type="text"
        name="name"
        className="p-2 border border-black rounded-sm"
      />
      <label>Email:</label>

      <input
        {...register("email")}
        type="email"
        name="email"
        className="p-2 border border-black rounded-sm"
      />
      <label htmlFor="message">Message:</label>

      <textarea
        {...register("message")}
        id="message"
        name="description"
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
