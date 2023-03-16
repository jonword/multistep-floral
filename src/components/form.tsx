import React from "react";
import { useState } from "react";
import Stepper from "./stepper";
import CardForm from "./steps/cardform";
import DeliveryForm from "./steps/deliveryform";
import PaymentForm from "./steps/paymentform";

const Form = () => {
  const [page, setPage] = useState(0);

  const PageDisplay = () => {
    if (page === 0) {
      return <CardForm />;
    } else if (page === 1) {
      return <DeliveryForm />;
    } else {
      return <PaymentForm />;
    }
  };

  const FormTitles = ["Card", "Delivery", "Payment"];
  return (
    <div>
      <div>
        <Stepper FormTitles={FormTitles} page={page} />
      </div>
      <div>
        <div>
          <h1>{FormTitles[page]}</h1>
          <div>{/* Body */}</div>
          <div className="flex justify-between items-center">
            <button
              className="p-2 px-4 text-gray-300 bg-emerald-900 hover:text-pink-200 hover:bg-emerald-700 duration-150"
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Back
            </button>
            <button
              className="p-2 px-4 text-gray-300 bg-emerald-900 hover:text-pink-200 hover:bg-emerald-700 duration-150"
              disabled={page == FormTitles.length - 1}
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
