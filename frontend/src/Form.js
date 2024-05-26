import React from "react";
import "./App.css";
import desktop from "./assets/images/illustration-sign-up-desktop.svg";
import mobile from "./assets/images/illustration-sign-up-mobile.svg";
import iconList from "./assets/images/icon-list.svg";
import useScreenSize from "./useScreenSize";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function Form() {
  // Navigate
  const navigate = useNavigate();

  // Form
  const formik = useFormik({
    initialValues: {
      email: "email@gmail.com",
    },

    // Validate form
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Valid email required")
        .required("Email is required"),
    }),

    // Submit form
    onSubmit: (values) => {
      console.log(values);
      navigate("/success", { state: values });
    },
  });

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

          <div className="flex flex-col items-stretch">
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-4"
              noValidate // Prevents default HTML validation
            >
              <div className="flex flex-row justify-between w-full">
                <label className="w-full text-sm font-bold">
                  Email address
                </label>
                <label className="w-full text-sm font-bold text-red-400 text-right">
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : ""}
                </label>
              </div>
              <input
                name="email"
                type="email"
                className={`w-full opacity-50 border py-3 px-4 rounded ${
                  formik.touched.email && formik.errors.email
                    ? "text-red-400 bg-red-200 border-red-500"
                    : ""
                }`}
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <button
                className="w-full bg-dark-navy hover:bg-gradient-1 hover:shadow-custom cursor-pointer text-white font-bold py-3 px-4 rounded my-4"
                type="submit"
              >
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
