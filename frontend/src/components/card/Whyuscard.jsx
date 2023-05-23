import React from "react";

const Whyuscard = (props) => {
  return (
    <div className="why-us-card p-4 flex flex-col xl:flex-row shadow hover:shadow-lg w-full bg-white rounded-lg overflow-hidden cursor-pointer pb-3 mb-3 ">
      <div className="w-[200px] h-[100%]" style={props?.style}>
        <img className="object-cover h-30" src={props?.image} alt="Flower and sky" />
      </div>

      <div className="relative">
        <h3 className="text-[1.3rem] font-medium text-transparent inline-block bg-gradient-to-r from-[#43995a] to-[#52efae] bg-clip-text">
          {props?.title}
        </h3>
        <p className="mt-2 text-xs md:text-sm text-gray-600">
        {props?.description}

        </p>
      </div>
    </div>
  );
};

export default Whyuscard;
