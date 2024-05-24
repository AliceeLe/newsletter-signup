import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import desktop from "./assets/images/illustration-sign-up-desktop.svg";
import mobile from "./assets/images/illustration-sign-up-mobile.svg";
import iconList from "./assets/images/icon-list.svg";

function Input({ value, setValue }) {
  // If email doesn't consist of @
  // Customize red
  return (
    <div className="flex flex-col items-stretch gap-10">
      <form>
        <h2 className="w-full text-sm font-bold ">Email address</h2>
        <input
          type="email"
          class="w-full opacity-50 border py-3 px-4 rounded"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <br />
        <button
          className="w-full bg-dark-navy hover:bg-blue-700 cursor-pointer text-white font-bold py-3 px-4 rounded"
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
  // React Hook to take width of screen
  const background = mobile; // Implement logic to switch between mobile and desktop based on screen width
  return (
    <div className="flex flex-col md:flex-row gap-5 items-stretch">
      <div className="flex-auto object-cover">
        <img className="w-full" src={background} alt="background" />
      </div>
      <div className="flex-auto px-10 text-dark-navy">
        <Content />
        <Input value={email} setValue={setEmail} />
      </div>
    </div>
  );
}

export default App;
