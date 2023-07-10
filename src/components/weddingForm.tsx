import React from "react";

const WeddingForm = () => {
  return (
    <form
      name="Wedding Inquiry"
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
      <label>Wedding Date:</label>
      <input
        type="text"
        name="wedding date"
        placeholder="mm/dd/yyyy"
        className="p-2 border border-black rounded-md"
      />
      <label>Estimated Floral Budget:</label>
      <select name="budget" className="p-2 border border-black rounded-md">
        <option></option>
        <option></option>
        <option></option>
        <option></option>
      </select>
      <label>Venue:</label>
      <input
        type="text"
        name="venue"
        className="p-2 border border-black rounded-md"
      />
      <label>Estimated Guest Count:</label>
      <input
        type="text"
        name="guest count"
        className="p-2 border border-black rounded-md"
      />
      <label>How many bridesmaids/groomsmen do you have?</label>
      <input
        type="text"
        name="bridesmaids and groomsmen"
        className="p-2 border border-black rounded-md"
      />
      <label>
        Brief Description of Ideas (alter piece, table centerpieces, etc.):
      </label>
      <textarea
        name="description"
        className="p-2 border border-black rounded-md"
        rows={10}
      />
      <label>Pinterest Link (if applicable):</label>
      <input
        type="text"
        name="pinterest"
        placeholder="https://"
        className="p-2 border border-black rounded-md"
      />
      <button
        type="submit"
        className=" mx-auto mt-2 flex items-center border-2 border-email bg-gray-800 px-8 py-3 duration-150 text-white hover:bg-emerald-700 rounded-md text-lg"
      >
        Send
      </button>
    </form>
  );
};

export default WeddingForm;
