import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";

import "./App.css";
import desktop from "./assets/images/illustration-sign-up-desktop.svg";
import mobile from "./assets/images/illustration-sign-up-mobile.svg";
import iconList from "./assets/images/icon-list.svg";
import useScreenSize from "./useScreenSize";

function Input({ value, setValue }) {
  const [state, setState] = setValue("unsubmitted");

  //bg-red-50 border border-red-500
  return (
    <div className="flex flex-col items-stretch">
      <form className="flex flex-col gap-4">
        <h2 className="w-full text-sm font-bold">Email address</h2>
        <input
          type="text"
          className={`w-full opacity-50 border py-3 px-4 rounded ${
            state === "invalid" ? "bg-red-50 border border-red-500" : ""
          }`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="w-full bg-dark-navy hover:bg-gradient-1 hover:shadow-custom cursor-pointer text-white font-bold py-3 px-4 rounded my-4"
          type="submit"
        >
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  );
}

function Content() {
  return (
    <div>
      <h1 className="text-4xl font-bold pt-3 pb-5">Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul
        className="list-inside space-y-2.5 py-6"
        style={{ listStyleImage: `url(${iconList})` }}
      >
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more!</li>
      </ul>
    </div>
  );
}

function App() {
  const [email, setEmail] = useState("email@company.com");
  let background = mobile;
  const screenSize = useScreenSize();
  if (screenSize.width > 768) {
    background = desktop;
  }
  return (
    <div className="bg-white md:bg-dark-navy h-screen w-800 flex justify-center items-center">
      <div className="flex flex-col md:flex-row-reverse gap-5 items-stretch bg-white w-800 max-w-4xl p-10 rounded-2xl	">
        <div className="flex-auto object-cover">
          <img className="w-full" src={background} alt="background" />
        </div>
        <div className="flex-auto px-10 text-dark-navy content-center">
          <Content />
          <Input value={email} setValue={setEmail} />
        </div>
      </div>
    </div>
  );
}

export default App;
