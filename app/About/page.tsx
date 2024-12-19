import React from "react";
import Image from "next/image";
import Banner from "../../public/images/AboutPage/AboutBanner.png";

const page = () => {
  return (
    <div>
      <div className="bg-about bg-cover bg-no-repeat bg-center w-[100%] h-[50vh] flex justify-center items-center relative">
        <div className="absolute top-0 w-full h-[50vh] bg-overlay bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl font-bold">ABOUT</h1>
        </div>
      </div>
      <div className="flex flex-wrap-reverse gap-y-6 lg:gap-y-0 lg:space-x-6 p-5 lg:p-10">
        <Image src={Banner} alt="ABoutBanner" className="lg:w-[35%]" />
        <div className="flex flex-col space-y-[8%] lg:w-[60%] justify-center">
          <div className="flex flex-col space-y-3">
            <h3 className="text-2xl font-bold">Executive Summary</h3>
            <p className="text-xs lg:text-lg">
              Caslara Hardware provides a high quality selection, with
              competetive pricing across all our products range and our staff
              members are all equipped with product knowledge/experience so as
              to offer a competetive service delivery that natures excellent
              working relationships with every contractor and our customers here
              in Zimbabwe
            </p>
          </div>
          <div className="flex flex-col space-y-3 border-l-4 border-gray pl-2 ml-6">
            <p  className="text-xs lg:text-lg">
              "We are best placed to achieve a hassle free, competitive and
              efficient service delivery through our product knowledge
              experience, competitive rates and ensuring continuous growth"
            </p>
            <p  className="text-xs lg:text-lg">- Management Team 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
