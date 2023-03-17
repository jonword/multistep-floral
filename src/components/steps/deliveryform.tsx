import React from "react";

const DeliveryForm = () => {
  return (
    <form className="flex flex-col gap-2">
      <select className="border p-1">
        <option>Delivery Order</option>
      </select>
      <div className="border border-gray-300 m-4" />
      <label>Recipient First Name:</label>
      <input className="border p-1" />
      <label>Recipient Last Name:</label>
      <input className="border p-1" />
      <label>Recipient Phone:</label>
      <input className="border p-1" />
      <label>Recipient Company:</label>
      <input className="border p-1" />
      <label>Address 1:</label>
      <input className="border p-1" />
      <label>Address 2:</label>
      <input placeholder="Apartment, Suite, Unit" className="border p-1" />
      <label>City:</label>
      <input className="border p-1" />
      <label>State:</label>
      <select className="border p-1">
        <option>New York</option>
      </select>
      <label>ZIP Code:</label>
      <input className="border p-1" />
      <label>Country:</label>
      <select className="border p-1">
        <option>United States</option>
      </select>
      <div className="border border-gray-300 m-4" />
      <label>Delivery Date:</label>
      <select className="border p-1">
        <option></option>
      </select>
      <div className="border border-gray-300 m-4" />
      <label>Delivery Instructions (optional):</label>
      <textarea
        className="border p-2 h-32"
        placeholder="Example: Deliver to the door on the side of the house."
      ></textarea>
    </form>
  );
};

export default DeliveryForm;
