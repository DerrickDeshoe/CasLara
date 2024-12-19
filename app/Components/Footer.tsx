"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Facebook from "../../public/images/NavbarImages/Sign-In.png";
import { FaFacebookF,  FaInstagram, FaXTwitter } from "react-icons/fa6";
import Call from "../../public/images/FooterImages/call1.svg";
import Location from "../../public/images/FooterImages/Location.svg";
import Mail from "../../public/images/FooterImages/mail-01.svg";
import Paypal from "../../public/images/FooterImages/Paypal.png";
import Cirrus from "../../public/images/FooterImages/Cirrus.png";
import VISA from "../../public/images/FooterImages/Visa.png";

const Footer = () => {
  return (
    <div className=" bg-purpleBlue space-y-2 ">
      <div className="flex flex-wrap w-[100%] space-y-5 lg:space-y-0 p-5 lg:px-10 lg:pt-10 text-white lg:space-x-4">
        <div className=" lg:w-[24%] flex flex-col space-y-5">
          <h5 className="font-bold">GET IN TOUCH</h5>
          <div className="flex flex-col space-y-3">
            <div className="flex space-x-2">
              <Image src={Call} alt="image" className=" w-[10%] " />
              <div className="flex flex-col">
                <p>+263 77 106 7655</p>
                <p>+263 77 106 7650</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Image src={Mail} alt="image" className=" w-[10%] " />
              <div className="flex flex-col">
                <p>+263 77 106 7655</p>
                <p>+263 77 106 7650</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Image src={Location} alt="image" className=" w-[10%]" />
              <div className="flex flex-col">
                <p className="lg:w-[80%]">
                  Any questions? Let us know in store at 14 Amby, Amby Drive,
                  Msasa, Harare or call us on +263 77 641 8235
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:w-[24%] flex flex-col space-y-3 lg:pl-5">
          <h5 className="font-bold">LINKS</h5>
          <div className="flex flex-col space-y-2 ">
            <Link
              href=""
              className="flex space-x-2 items-center hover:text-orange "
            >
              <p>Search</p>
            </Link>
            <Link
              href=""
              className="flex space-x-2 items-center hover:text-orange"
            >
              <p>About Us</p>
            </Link>
            <Link
              href=""
              className="flex space-x-2 items-center hover:text-orange"
            >
              <p>Contact Us</p>
            </Link>
            <Link
              href=""
              className="flex space-x-2 items-center hover:text-orange"
            >
              <p>Returns</p>
            </Link>
          </div>
        </div>
        <div className=" w-[100%] lg:w-[24%] flex flex-col space-y-3">
          <h5 className="font-bold">HELP</h5>
          <div className="flex flex-col space-y-2">
            <Link
              href=""
              className="flex space-x-2 items-center hover:text-orange "
            >
              <p>Track Order</p>
            </Link>
            <Link
              href=""
              className="flex space-x-2 items-center hover:text-orange"
            >
              <p>Return Policy</p>
            </Link>
            <Link
              href=""
              className="flex space-x-2 items-center hover:text-orange"
            >
              <p>Delivery Policy</p>
            </Link>
            <Link
              href=""
              className="flex space-x-2 items-center hover:text-orange"
            >
              <p>FAQs</p>
            </Link>
          </div>
        </div>
        <div className=" lg:w-[24%] flex flex-col space-y-4">
          <h5 className="font-bold">SUBSCRIBE</h5>
          <p className="">
            Enter your email below to be first to know about new collections and
            product launches.
          </p>
          <div className="relative w-[80%] lg:w-[100%]">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 text-xs rounded-md bg-blue  border border-orange text-white w-[100%] outline-none"
              required
              onInvalid={(e) =>
                e.currentTarget.setCustomValidity("Please enter a valid email")
              }
              onInput={(e) => e.currentTarget.setCustomValidity("")}
            />
            <Link
              href="#"
              className="flex space-x-2 justify-center bg-orange rounded-sm py-1 px-2 absolute bottom-[5px] right-[5px] "
            >
              <button className=" font-semibold text-xs text-white ">
                Sign-Up
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap space-y-7 justify-between px-5 lg:px-10 w-[100%] text-xs lg:text-[16px] pb-8 items-center">
        <div className="border-b border-white w-[100%] "></div>
        <div className="flex space-x-2 lg:space-x-3 w-[45%]">
          <Image src={Paypal} alt="PayPal" className="w-[22%] lg:w-[10%]" />
          <Image src={Cirrus} alt="Cirrus" className="w-[22%] lg:w-[10%]" />
          <Image src={VISA} alt="Visa" className="w-[22%] lg:w-[10%]" />
        </div>
        <div className="flex space-x-1 pb-2">
        <FaFacebookF/>
        <FaInstagram/>
        <FaXTwitter/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
