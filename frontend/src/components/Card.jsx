import React from "react";

const Card = ({ image, text }) => {
  return (
    <div
      className="
    border-[3px]
    cursor-pointer
    border-solid   
    rounded-xl
    flex 
    flex-col
    w-[400px]
    py-4
    h-full
    justify-center
    hover:bg-[#F2F2F2]
    hover:shadow-xl"
    >
      <div className="flex flex-row justify-center w-[398px] h-[100%] m-auto">
        <img src={image} className="w-[400px] h-[200px]" />
      </div>
      <p className="text-center text-black font-semibold">{text} </p>
    </div>
  );
};
export default Card;
