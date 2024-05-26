import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import success from "./assets/images/icon-success.svg";

function Success() {
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state || {};

  const handleDismiss = () => {
    // Navigate away from the success page, for example, back to the homepage
    navigate("/");
  };

  return (
    <div className="bg-white md:bg-dark-navy h-screen w-500 flex justify-center items-center">
      <div className="flex flex-col align-start text-dark-navy p-20 bg-white w-full md:w-1/3 rounded-2xl">
        <img className="w-20 py-10" src={success} alt="success icon" />
        <h1 className="flex-auto text-4xl font-bold pt-3 pb-5">
          Thanks for subscribing!
        </h1>
        <p>
          A confirmation email has been sent to{" "}
          <span className="font-bold">{email}</span>. Please open it and click
          the button inside to confirm your subscription.
        </p>
        <button
          className="flex-auto w-full bg-dark-navy hover:bg-gradient-1 hover:shadow-custom cursor-pointer text-white font-bold py-3 px-4 rounded my-4 mt-40vh md:mt-12"
          type="submit"
          onClick={handleDismiss}
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
}

export default Success;
