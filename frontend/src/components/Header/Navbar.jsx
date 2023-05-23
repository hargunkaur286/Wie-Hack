import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  downarrow, finedge } from "../../assets";
import { Transition } from "@headlessui/react";
const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = (data) => {
    navigate(`/${data}`);
  };
  //signin drop down menu
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  function handleButtonClick() {
    setShowDropdown(!showDropdown);
  }
  return (
    <nav className="flex px-12 justify-between shadow-md">
      <div className="flex flex-row">
        <Link to="/" className="no-underline">
          <img src={finedge} className="w-full h-16" />
          
        </Link>
        <Link to="/" className="no-underline">
        <h1 className="font-bold text-[#5D9943] m-2 text-[40px]">FinEdge</h1>
        </Link>
      </div>

      <div className="flex gap-8 items-center justify-end">
        

        <p
          className="sm:flex hidden text-black sm:text-lg text-base cursor-pointer"
          onClick={() => handleClick("courses")}
        >
          Courses
        </p>
        
        <p
          className="md:flex hidden text-black sm:text-lg text-base cursor-pointer"
          onClick={() => handleClick("internship")}
        >
          Fin Games
        </p>
        <p
          className="md:flex hidden text-black sm:text-lg text-base cursor-pointer"
          onClick={() => handleClick("trade")}
        >
          Trading Dashboard
        </p>
        <p
          className="md:flex hidden text-black sm:text-lg text-base cursor-pointer"
          onClick={() => handleClick("invoice")}
        >
          Invoice Tracker
        </p>
        <p
          className="md:flex hidden text-black sm:text-lg text-base cursor-pointer"
          onClick={() => handleClick("blog")}
        >
          {" "}
          Blog{" "}
        </p>

        <div className="">
          <Link to="/patientsignin"><div
            onClick={handleButtonClick}
            className="
            bg-[#5D9943]         text-sm 
             text-center
             rounded-3xl  
              text-white
              uppercase
              tracking-widest
              font-medium
              py-3 px-8
              border-1
              border-dashed
              border-teal-500
              shadow-md
              transition
              duration-400 ease-in-out cursor-pointer focus:outline-none hover:bg-white hover:text-[#5D9943] hover:border-teal-500"
          >
            sign up
            <span className="hidden">Hidden Text</span>
          </div>
          </Link>
          {/* {showDropdown && (
            <div className=" absolute w-[140px] border shadow-lg bg-transparent mt-2 rounded-lg dropdown-content">
              <ul className=" text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <Link to="/patientsignin">
                    <div className="cursor-pointer rounded-t-lg font-medium block px-4 py-2 hover:shadow-md hover:bg-white hover:text-teal-500 hover:border-teal-500">
                      Patient
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/doctorsignin">
                    <div className="cursor-pointer rounded-b-lg font-medium block px-4 py-2 hover:shadow-md hover:bg-white hover:text-teal-500 hover:border-teal-500">
                      Doctor
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          )} */}
        </div>
      </div>

      {/* <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900"
                >
                  Home
                </a>

                <div
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="relative px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 cursor-pointer"
                >
                  Options
                  <Transition
                    show={isDropdownOpen}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute z-10 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1">
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                          Option 1
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                          Option 2
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                          Option 3
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                          Option 4
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                          Option 5
                        </a>
                      </div>
                    </div>
                  </Transition>
                </div>

                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          </div>
          </div>
          </nav> */}
    </nav>
  );
};

export default Navbar;
