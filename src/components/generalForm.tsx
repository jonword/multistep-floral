import React from "react";

const GeneralForm = () => {
  return (
    <form
      name="General Inquiry"
      method="POST"
      className="flex gap-2 w-full max-w-[600px] flex-col"
    >
      <label>Name:</label>
      <input
        type="text"
        placeholder="Name"
        name="name"
        className="p-2 border border-black rounded-md"
      />
      <label>Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        className="p-2 border border-black rounded-md"
      />
      <label>Message:</label>
      <textarea
        name="description"
        className="p-2 border border-black rounded-md"
        rows={10}
      />
      <button
        type="submit"
        className=" mx-auto mt-2 flex items-center border-2 border-email bg-gray-800 px-8 py-3 duration-150 text-white hover:bg-emerald-700 rounded-sm text-lg"
      >
        Send
      </button>
    </form>
  );
};

export default GeneralForm;
