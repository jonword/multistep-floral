import React from "react";

const DeliveryForm = () => {
  return (
    <form className="flex flex-col gap-2">
      <select className="border p-2">
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
      <select className="border p-2">
        <option>New York</option>
      </select>
      <label>ZIP Code:</label>
      <input className="border p-1" />
      <label>Country:</label>
      <select className="border p-2">
        <option>United States</option>
      </select>
      <div className="border border-gray-300 m-4" />
    </form>
  );
};

export default DeliveryForm;
