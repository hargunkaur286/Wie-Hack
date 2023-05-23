import React from "react";

const IssueCard = ({ name, img }) => {
  return (
    <div className="flex flex-row justify-center items-center  place-items-center">
      <div className=" h-[321px] w-[300px] outline hover:bg-btn hover:shadow-lg hover:shadow-lightcyan border-[#4F4E4E] drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))   rounded-extraLarge  rounded-br-[100px] md:mr-10 sm:mr-5 mr-2 my-5 ">
        <div class="flex flex-row ">
          <div className=" p-5 bg-dark  text-center rounded">
            <img className="h-[262px] w-[250px]" src={img}></img>

            <h5 className=" text-center font-semibold">{name}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;
