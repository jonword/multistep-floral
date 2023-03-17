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
        <option value="">Select a State</option>
        <option value="AL">Alabama</option>
        <option value="AK">Alaska</option>
        <option value="AZ">Arizona</option>
        <option value="AR">Arkansas</option>
        <option value="CA">California</option>
        <option value="CO">Colorado</option>
        <option value="CT">Connecticut</option>
        <option value="DE">Delaware</option>
        <option value="DC">District Of Columbia</option>
        <option value="FL">Florida</option>
        <option value="GA">Georgia</option>
        <option value="HI">Hawaii</option>
        <option value="ID">Idaho</option>
        <option value="IL">Illinois</option>
        <option value="IN">Indiana</option>
        <option value="IA">Iowa</option>
        <option value="KS">Kansas</option>
        <option value="KY">Kentucky</option>
        <option value="LA">Louisiana</option>
        <option value="ME">Maine</option>
        <option value="MD">Maryland</option>
        <option value="MA">Massachusetts</option>
        <option value="MI">Michigan</option>
        <option value="MN">Minnesota</option>
        <option value="MS">Mississippi</option>
        <option value="MO">Missouri</option>
        <option value="MT">Montana</option>
        <option value="NE">Nebraska</option>
        <option value="NV">Nevada</option>
        <option value="NH">New Hampshire</option>
        <option value="NJ">New Jersey</option>
        <option value="NM">New Mexico</option>
        <option value="NY">New York</option>
        <option value="NC">North Carolina</option>
        <option value="ND">North Dakota</option>
        <option value="OH">Ohio</option>
        <option value="OK">Oklahoma</option>
        <option value="OR">Oregon</option>
        <option value="PA">Pennsylvania</option>
        <option value="RI">Rhode Island</option>
        <option value="SC">South Carolina</option>
        <option value="SD">South Dakota</option>
        <option value="TN">Tennessee</option>
        <option value="TX">Texas</option>
        <option value="UT">Utah</option>
        <option value="VT">Vermont</option>
        <option value="VA">Virginia</option>
        <option value="WA">Washington</option>
        <option value="WV">West Virginia</option>
        <option value="WI">Wisconsin</option>
        <option value="WY">Wyoming</option>
      </select>
      <label>ZIP Code:</label>
      <input className="border p-1" />
      <label>Country:</label>
      <select className="border p-1">
        <option>United States</option>
      </select>
      <div className="border border-gray-300 m-4" />
      <label>Delivery Date:</label>
      {/* TODO: insert some sort of calendar option */}
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
