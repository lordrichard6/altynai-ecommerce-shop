import React from "react";
import { FaShippingFast,FaUserCircle, FaCheckCircle } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

export default function CheckoutWizard({ activeStep = 0 }) {
  const data = [
    {
      title: "User Login",
      icon: <FaUserCircle className="text-2xl my-2 mr-2" />,
    },
    {
      title: "Shipping Address",
      icon: <FaShippingFast className="text-2xl my-2 mr-2" />,
    },
    {
      title: "Payment Method",
      icon: <MdPayment className="text-2xl my-2 mr-2" />,
    },
    {
      title: "Place Order",
      icon: <FaCheckCircle className="text-2xl my-2 mr-2" />,
    },
  ]

  return (
    <div className="mb-5 flex flex-wrap">
      {data.map(
        (step, index) => (
          <div
            className={`flex-1 border-b-2 text-center ${
              index <= activeStep
                ? "border-fuchsia-500 text-fuchsia-500"
                : "border-gray-400 text-gray-400"
            }`}
            key={step.title}
          >
           <div className='flex justify-center items-center'>{step.icon} <p className='hidden md:block'>{step.title}</p></div> 
          </div>
        )
      )}
    </div>
  );
}

{/* <FaShippingFast className="h-5 w-5" /> */}