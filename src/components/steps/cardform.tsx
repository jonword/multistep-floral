import React from "react";

const CardForm = () => {
  return (
    <div className="flex flex-col gap-2">
      <select className="border p-1">
        <option>Choose occasion</option>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Congratulations</option>
        <option>Get Well</option>
        <option>Graduation</option>
        <option>Thinking Of You</option>
      </select>
      <textarea
        className="border p-2 h-32"
        placeholder="Add your card message."
      ></textarea>
      <input placeholder="Email" className="border p-2" required></input>
    </div>
  );
};

export default CardForm;
