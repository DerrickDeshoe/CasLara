"use client";

import React from "react";
import Products from "../Components/Product";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { useState } from "react";
import Toilet from "../../public/images/Shop/toilet.png";
import Door from "../../public/images/Shop/toilet.png";
import Geysar from "../../public/images/Shop/toilet.png";
import Tank from "../../public/images/Shop/toilet.png";

const page = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [sortType, setSortType] = useState("default"); // Tracks the sorting type
  // Product data
  const productData = [
    {
      id: 1,
      image: Toilet,
      description: "Sink Top Basin and Mixer Combo",
      price: 45,
      category: "Sanitary Ware",
    },
    {
      id: 2,
      image: Door,
      description: "Heavy Duty Door",
      price: 120,
      category: "Building Materials",
    },
    {
      id: 3,
      image: Geysar,
      description: "Energy Efficient Geysar",
      price: 85,
      category: "Solar Power",
    },
    {
      id: 4,
      image: Tank,
      description: "Large Water Tank",
      price: 60,
      category: "Agriculture",
    },
    // Add more products here
  ];

  // Filtered products based on the selected category
  const filteredProducts =
    selectedCategory === "All"
      ? productData
      : productData.filter((product) => product.category === selectedCategory);

  const sortedProducts =
    sortType === "price"
      ? [...filteredProducts].sort((a, b) => b.price - a.price) // Sort by price descending
      : filteredProducts; // Default sorting

  // Category buttons
  const categories = [
    "All",
    "Sanitary Ware",
    "Power Tools",
    "Solar Power",
    "Automotives",
    "Painting",
    "Electrical",
    "Agriculture",
    "Building Tools",
    "Protective Ware",
    "Abbrassives",
    "Gardening Tools",
    "Security",
    "Building Materials",
    "PVC Pipes",
    "Air Compressors",
    "Pumps",
  ];

  return (
    <div className="mb-10">
      <div className="bg-About bg-center bg-no-repeat bg-cover h-[50vh] w-full">
        <div className="bg-black/50 w-full h-full flex flex-col  gap-3 justify-center items-center px-5">
          <h1 className="font-bold text-3xl text-white text-center">
            BROWSE ALL OUR PRODUCTS
          </h1>
          <p className="text-white text-center">
            Our commitment is to deliver outstanding quality products and to
            exceed our customers' expectations
          </p>
        </div>

        <div className="px-5">
          <div className="flex flex-col md:flex-row  py-5 gap-3">
            <h1 className="font-bold md:w-[50%] md:text-[20px]">
              Products Catalogue
            </h1>
            <div className="flex justify-between md:justify-evenly w-full">
              {/* Default Sorting Button */}
              <button
                className={`p-1 w-[45%] md:w-[45%] lg:w-[35%] xl:w-[20%] border border-black ${
                  sortType === "default" ? "bg-white text-black" : ""
                }`}
                onClick={() => {
                  setSortType("default"); // Reset sorting
                  setSelectedCategory("All"); // Reset category filtering
                }}
              >
                <p>Default Sorting</p>
              </button>

              {/* Price Sorting Button */}
              <button
                className={`p-1 w-[45%] md:w-[45%] lg:w-[35%] xl:w-[20%] border border-black ${
                  sortType === "price" ? "bg-blue-500 text-white" : ""
                }`}
                onClick={() => setSortType("price")}
              >
                <p>Price</p>
              </button>
            </div>
          </div>

          <div className="font-bold flex flex-col md:flex-row items-start gap-2">
            {/* Heading and Icon */}
            <div className="flex justify-between w-full md:w-auto">
              <h1 className="md:hidden">All</h1>
              <HiAdjustmentsHorizontal
                className="cursor-pointer sm:block md:hidden"
                onClick={toggleOverlay}
              />
            </div>

            {/* Overlay View for Buttons */}
            {isOverlayVisible && (
              <div className="fixed inset-0 bg-black/50 z-50 flex items-center  justify-center">
                <div className="bg-white p-5 rounded-lg shadow-lg w-11/12 max-w-md">
                  <button
                    className="text-right text-gray-500 font-bold mb-4"
                    onClick={toggleOverlay}
                  >
                    Close ✕
                  </button>
                  <div className="flex flex-col items-start gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          toggleOverlay(); // Close the overlay
                        }}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="hidden md:flex flex-col items-start gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-2 py-1 ${
                    selectedCategory === category
                      ? "text-blue-500 underline"
                      : "text-black"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Products Section */}
            <div className="flex md:justify-evenly flex-wrap w-[100%]">
              {filteredProducts.map((product) => (
                <Products
                  key={product.id}
                  image={product.image}
                  description={product.description}
                  price={product.price}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
