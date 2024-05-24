import logo from "./logo.svg";
import "./App.css";
import success from "./assets/images/icon-success.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Success() {
  return (
    <div class="success-container">
      <img src={success} alt="success icon" />
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to{" "}
        <span style={"font-weight: 700"}>email@gmail.com</span>. Please open it
        and click the button inside to confirm your subscription.
      </p>
      <button>Dismiss message</button>
    </div>
  );
}

export default Success;