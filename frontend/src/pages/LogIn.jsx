import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { patientLogIn } from "../assets";
import axios from "axios";
export default function Patient_LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function handlesubmit(e) {
    e.preventDefault();
    console.log(email, password);
    axios
      .post(
        "http://localhost:3000/patient/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <div className="flex flex-row">
        <div className="md:flex md:flex-col md:w-full md:justify-center md:items-center  md:place-items-center bg-white">
          <div className="flex flex-col justify-center items-center">
            <div className="w-[250px] ml-5 md:w-full justify-center xs:w-56 flex flex-col md:flex-row bg-white">
              <Link to="/patientlogin">
                <button className="px-10 my-2 mx-5 w-[200px] h-[56px] tracking-widest leading-loose uppercase bg-lightcyan hover:shadow-xl hover:bg-btn text-white border-black justify-center outline-primary rounded-3xl font-semibold">
                  Login
                </button>
              </Link>
              <Link to="/patientsignin">
                <button className="px-10 mx-5 my-2 w-[200px] h-[56px] tracking-widest leading-loose uppercase  hover:shadow-xl hover:bg-btn  border-black justify-center hover:text-white outline-primary rounded-3xl font-semibold">
                  Sign Up
                </button>
              </Link>
            </div>
            <div className="mt-5 ml-10 mr-auto w-[250px] ">
              <div className="my-4 w-[250px] md:w-[400px] h-[68px] ">
                <input
                  type="email"
                  id="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email Address"
                />
              </div>

              <div className="my-4 w-[250px] md:w-[400px] h-[68px]">
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="•••••••••"
                  required
                />
                <p className="absolute mt-1 text-sm leading-tight text-right text-blue-3 text-[#52D0C2]">
                  Forgot Password?
                </p>
              </div>
              <button
                type="button"
                onClick={handlesubmit}
                className="  ml-0 mb-5 tracking-widest w-[250px] md:w-[400px] h-[50px] bg-lightcyan hover:shadow-xl hover:bg-btn text-white border-black justify-center outline-primary rounded-xl font-semibold "
              >
                LOGIN
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex md:flex-col md:w-full md:justify-center md:items-center  md:place-items-center md:bg-[#EEFFFD] ">
          <img src={patientLogIn} className="p-10"></img>
        </div>
      </div>
    </div>
  );
}
