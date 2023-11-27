import React from "react";

const WeddingForm = () => {
  return (
    <>
      <form
        name="Wedding"
        method="POST"
        className="flex w-full max-w-[600px] flex-col gap-2"
      >
        <input type="hidden" name="form-name" value="Contact" />

        <p className="">Name:</p>
        <input type="text" name="name" className="p-2" />
        <p className="">Email:</p>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="abc@email.com"
          className=" p-2"
        />
        <p className="">Phone:</p>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Phone"
          className="p-2"
        />
        <p className="">Event Date:</p>
        <input
          type="text"
          name="date"
          id="date"
          placeholder="mm/dd/yyyy"
          className=" p-2"
        />
        <p className="">Estimated Floral Budget:</p>
        <select className="p-2">
          <option>Select One</option>
          <option>$750 - $1,200</option>
          <option>$1,200 - $3,000</option>
          <option>$3,000 - $5,000</option>
          <option>$5,000 - $8,000</option>
          <option>$8,000 - $12,000</option>
          <option>$12,000 - $15,000</option>
          <option>$15,000+</option>
        </select>
        <p>Venue:</p>
        <input type="text" name="venue" id="venue" className=" p-2" />
        <p>Estimated Guest Count:</p>
        <input
          type="text"
          name="guest count"
          id="guest count"
          className=" p-2"
        />
        <p>Number of Groomsmen/Bridesmaids:</p>
        <input type="text" name="bridal" id="bridal" className=" p-2" />
        <p>Brief Description of Ideas:</p>
        <textarea name="message" placeholder="..." className="p-2" rows={7} />
        <p>Link to Pinterest Board:</p>
        <input type="text" name="pinterest" id="pinterest" className="p-2" />
        <button className="mx-auto mt-2 flex items-center px-12 py-4 text-lg font-bold text-white bg-gray-800 hover:bg-green-800 duration-200">
          Send
        </button>
      </form>
    </>
  );
};

export default WeddingForm;
