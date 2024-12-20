"use client";

import React, { useState, } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/NavbarImages/Logo.svg";
import SignUp from "../../public/images/NavbarImages/Sign-In.png";
import ShoppingBag from "../../public/images/NavbarImages/ShopppingBag.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  const links = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/Shop" },
    { label: "About", href: "/About" },
    { label: "Contact", href: "/Contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-[100%] bg-white flex flex-col lg:items-center lg:justify-between text-white z-[80] relative">
      <div className="flex flex-col w-[100%] space-y-2 ">
        {/* Main Nav */}
        <div className="hidden lg:flex justify-between items-center w-[100%] px-10 py-2">
          <div>
            <Link href="./">
              <Image src={Logo} alt="Logo" className="w-[40%] lg:w-[50%]" />
            </Link>
          </div>
          <div className="flex justify-between items-center w-[37%]">
            <div className="hidden lg:flex lg:items-center space-x-5 text-black">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-black hover:text-orange transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex justify-center space-x-2 items-center">
              <Link href="#" className="w-[26%]">
                <Image src={SignUp} alt="SignUp" />
              </Link>
              <Link href="#" className="w-[35%]">
                <Image src={ShoppingBag} alt="ShoppingBag" />
              </Link>
            </div>

            <Link
              href="#"
              className="flex space-x-2 justify-center bg-black rounded-lg px-7 py-3"
            >
              <button className="font-semibold text-sm text-white">
                Log In
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden absolute top-6 right-4">
        <button
          onClick={toggleMenu}
          className="text-black hover:text-gray-700 focus:outline-none"
        >
          <svg
            className="h-7 w-7 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {!isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            )}
          </svg>
        </button>
      </div>

      <div className="absolute flex lg:hidden top-6 left-5 w-[80%]">
        <Link href="./">
          <Image src={Logo} alt="Logo" className="w-[50%] lg:w-[50%]" />
        </Link>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden fixed top-0 bottom-0 right-0 w-2/3 max-w-xs bg-black h-full z-50 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col items-center justify-center`}
      >
        {/* Close Icon */}
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-5 text-white text-2xl focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <div className="flex flex-col items-center justify-center py-4 space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={toggleMenu}
              className="text-zinc-200 hover:text-zinc-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#"
            onClick={toggleMenu}
            className="border border-white text-white text-xs w-full text-center py-1 px-4 rounded"
          >
            LogIn
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
