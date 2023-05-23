import React from "react";
import {

  whyimg1,
  whyimg2,
  whyimg3,
  whyimg4,

  Experience,
  Commitment,
  // Facilities
} from "../assets";
import Whyuscard from "./card/Whyuscard";
import Facilities from "../assets/WhyUs/facilities.svg";
const Whyus = () => {
  return (
    <>
      <div className="grid grid-cols-2 my-4">
        <div className=" hidden relative md:grid md:grid-cols-2 gap-4 my-32">
        <div className="col-start-1 grid-rows-3 absolute left-[170px]">
              <img className="row-span-2" src={whyimg1} alt="" />
              <img className="mt-3" src={whyimg2} alt="" />
          </div>
          <div className="col-start-2 grid-rows-3 absolute xs:right-[120px] sm:right-[120px] md:right-[130px] lg:right-[170px]">
              <img className="mb-3" src={whyimg3} alt="" />
              <img className="row-span-2" src={whyimg4} alt="" />
          </div>
        </div>

        <div className=" md:my-5 flex-col justify-end px-5 md:p-8">
          <div className="w-[600px] md:flex md:justify-center flex-row gap-2">
            <h2 className="text-6xl leading-[90px] font-bold  text-transparent inline-block bg-gradient-to-r from-[#43995a] to-[#52efae] bg-clip-text">Why Us? </h2>
          </div>
          <p className="md:ml-[-50px] md:text-center text-[#818181] text-[1.1rem] leading-[21px] font-normal mb-10 md:w-full w-[390px]">
            Our platform is built by psychiatrists, psychologists and mental health experts with immense global experience.
          </p>
          <div className="cards md:w-full w-[450px] md:px-6">
            <Whyuscard
              style={{marginRight : "18px"}}
              image={Experience}
              title="Comprehensive Features"
              description="Our application offers a wide range of integrated features, including invoice management, trading dashboard, financial education resources, gamified learning, chatbot support, and real-time notifications."
            />
            <Whyuscard
              image={Commitment}
              title="Emphasis on Financial Literacy"
              description="We place a strong emphasis on financial literacy by providing educational resources and courses. This sets us apart from other platforms and enables users to enhance their financial knowledge, make informed decisions, and improve their overall financial well-being."
            />
            <Whyuscard
              image={Facilities}
              title="Personalized Support"
              description="Our application goes beyond just providing tools and resources. We offer personalized support through our chatbot feature, ensuring that users can receive prompt assistance and answers to their queries."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Whyus;



{/* <div className="flex flex-col ml-[150px]">
<div className="flex flex-row gap-4 w-[80%] justify-between pb-3 ">
   <img
    src={Leaf3}
    className="absolute inset-0 w-40 h-40 object-cover pt-[900px]"
  /> 
  <img src={whyimg1} className="object-cover w-[70%] rounded-3xl" />
  <img src={whyimg2} className="object-cover w-[70%] h-[70%] " />
</div>
<div className="flex flex-row gap-4 w-[80%] justify-between">
  <img
    src={whyimg3}
    className="object-cover w-[189px]
        h-[196px] rounded-3xl"
  />
  <div className="relative">
     <img
      src={Leaf1}
      className="absolute inset-0  object-cove ml-[140px] 
        "
    /> 
    <img
      src={whyimg4}
      className="object-cover relative z-10 w-[600px] h-[260px] rounded-3xl"
    />
  </div>
</div>
</div> */}
