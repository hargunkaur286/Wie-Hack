import React from "react";
import Card from "./Card";
import {
  blog, chatbot, courses, fingame, invoice, stock
} from "../assets";
const Issue = () => {
  const data = [
    { name: blog, text: "Comprehensive Blog" },
    { name: chatbot, text: "Chatbot Support" },
    { name: courses, text: "Financial Literacy Courses" },
    { name: fingame, text: "Fintech Education Game" },
    { name: invoice, text: "Invoice Management System" },
    { name: stock, text: "Stock Beta Calculation and Analysis" },
  ];
  return (
    <>
      <div className="md:flex md:flex-col  md:justify-between w-[70%] md:w-[80%] m-5 md:my-8 md:m-auto">
        <div className="relative md:flex md:justify-left items-center ">
          <p className="w-[390px] md:w-full text-[#5D9943] text-[4rem] font-bold text-transparent inline-block bg-gradient-to-r from-[#5D9943] to-[#00D9F5] bg-clip-text">
            Features we offer
          </p>
        </div>
        
      </div>
      <div className=" mt-5  md:ml-16 md:mb-20 rounded-xl text-[#343434] flex justify-center items-center bg-white bg-opacity-60 w-auto sm:w-full md:w-[1270px] h-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3  gap-y-12 gap-x-64 my-14">
          {data?.map((db) => (
            <div className=" w-60  cursor-pointer">
              <Card image={db?.name} text={db?.text} />
            </div>
          ))}
        </div>
       
      </div>
    </>
  );
};

export default Issue;
