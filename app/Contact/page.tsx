import React from "react";
import Image from "next/image";
import ContactPhone from '../../public/images/ContactPage/ContactImage.png'

const page = () => {
  return (
    <div>
      <div className="bg-contact bg-cover bg-no-repeat bg-center w-[100%] h-[50vh] flex justify-center items-center relative">
        <div className="absolute top-0 w-full h-[50vh] bg-overlay bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-white text-4xl font-bold">CONTACT US</h1>
        </div>
      </div>
      <div className="flex flex-wrap lg:px-[10%] justify-center lg:justify-between">
          <div className="flex flex-col space-y-6 w-[100%] lg:w-[45%] justify-center items-center">
            <h2 className="text-black text-4xl font-bold">CONTACT US</h2>
            <input type="text" placeholder="Full Name" className="border-2 border-black rounded-2xl p-4 font-bold w-[90%]"/>
            <input type="text" placeholder="Phone Number" className="border-2 border-black rounded-2xl p-4 font-bold w-[90%]"/>
            <input type="text" placeholder="Email Address" className="border-2 border-black rounded-2xl p-4 font-bold w-[90%]"/>
            <input type="text" placeholder="Message" className="border-2 border-black rounded-2xl p-4 pb-[13%] font-bold w-[90%]"/>
          </div>
          <Image src={ContactPhone} alt='ContactPagePhones' className="lg:w-[40%]"/>
        </div>
    </div>
  );
};

export default page;
