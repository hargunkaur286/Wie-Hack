import { useState, React } from "react";
import { Link, useNavigate } from "react-router-dom";
import { google, facebook, signin } from "../assets";
import axios from "axios";

export default function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(email, password);
    if (Object.keys(errors).length === 0) {
      // submit form data
      try {
        const res = axios
          .post(
            "http://localhost:3000/patient/register",
            {
              name,
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
          .then((res) => {
            console.log(res.data);
            if (res.data.status === "ok") {
              alert("Registration Successful now login with your credentials");
              navigate("/patientlogin");
            } else {
              alert("Something went wrong");
            }
          });
      } catch (error) {
        console.log(error);
        message.error("Something went wrong");
      }
    } else {
      setErrors(errors);
    }
  };

  const validate = (email, password) => {
    const errors = {};
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };
  return (
    <div>
      <div className="  md:bg-btn">
        <img 
          src={signin}
          atl="signin"
          className="hidden md:block xl:w-[40%] md:w-[30%] sm:w-[30%] lg:w-[40%] md:h-[600px] sm:h-[600px] lg:h-[600px] md:float-left md:ml-36 md:rounded-r-3xl"
        />
        <div className=" w-[70%] h-[700px] ms:h-[650px]  md:rounded-l-3xl md:mr-0 md:ml-auto bg-white ">
          <div className="ml-0 xs:w-[300px] xs:ml-5 xs:mr-auto xs: md:w-[80%]  md:mr-20 md:ml-auto  ">
            <div className="py-10">
              <h1 className="xs:text-left xs:ml-10 xs:mr-auto md:text-center px-20">
                Create Account
              </h1>
            </div>
            <div>
              <div className=" left-0 xs:ml-0 xs:mr-auto md:flex md:flex-col md:items-center md:justify-center ">
                <div className="w-[300px] md:w-full justify-center xs:w-56 flex flex-col md:flex-row ml-5 md:ml-0 ">
                  <button className="bg-white">
                    <div className="xs:w-[350px] flex md:w-full border-[#9D9D9D] border p-2 rounded-full">
                      <img src={google} className="w-10 h-10 mr-2" />
                      <p className="text-center py-2 text-[#9D9D9D]">
                        Sign up with google
                      </p>
                    </div>
                  </button>
                  <button className="bg-white">
                    <div className="flex xs:w-[350px] md:w-full border-[#9D9D9D] border p-2 rounded-full">
                      <img src={facebook} className="w-10 h-10 mr-2" />
                      <p className="text-center py-2 text-[#9D9D9D]">
                        Sign up with Facebook
                      </p>
                    </div>
                  </button>
                </div>
                <h2 className="text-[#A6A6A6]  ml-20 md:ml-0 text-center text-2xl">
                  -OR-
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="w-[250px] ml-10 md:ml-0 justify-center">
                    <div className="my-6">
                      <input
                        type="text"
                        id="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`  bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-50`}
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="my-6">
                      <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={` border ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        } bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        placeholder="Email Address"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="my-6">
                      <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={` border ${
                          errors.password ? "border-red-500" : "border-gray-300"
                        } bg-gray-50 border-b-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                        placeholder="•••••••••"
                        required
                      />
                      {errors.password && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.password}
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="ml-10 md:ml-0 w-[240px] bg-lightcyan hover:shadow-xl hover:bg-btn text-white border-black justify-center outline-primary rounded-full font-semibold "
                  >
                    Create Account
                  </button>
                  <div className="w-full ml-10 md:ml-0 bg-white flex md:items-center md:justify-center my-5">
                    <h4 className="text-[#A6A6A6]">Already have an account?</h4>
                    <Link to="/patientlogin">
                      <span className=" cursor-pointer text-lightcyan underline underline-offset-1">
                        Login
                      </span>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

