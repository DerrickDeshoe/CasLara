"use client";

import React, { useState } from "react";
import Products from "../Components/Product";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import Toilet from "../../public/images/Shop/toilet.png";
import Door from "../../public/images/Shop/toilet.png";
import Geysar from "../../public/images/Shop/toilet.png";
import Tank from "../../public/images/Shop/toilet.png";
import { motion } from "framer-motion";

const Page = (props: any) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortType, setSortType] = useState("default");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productData = [
    {
      id: 1,
      image: Toilet,
      description: "Sink Top Basin and Mixer Combo",
      price: 45,
      category: "Sanitary Ware",
      colors: ["White", "Beige", "Black"],
    },
    {
      id: 2,
      image: Door,
      description: "Heavy Duty Door",
      price: 120,
      category: "Building Materials",
      colors: ["Brown", "Black", "Grey"],
    },
    {
      id: 3,
      image: Geysar,
      description: "Energy Efficient Geysar",
      price: 85,
      category: "Solar Power",
      colors: ["Silver", "White"],
    },
    {
      id: 4,
      image: Tank,
      description: "Large Water Tank",
      price: 60,
      category: "Agriculture",
      colors: ["Green", "Blue", "Black"],
    },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? productData
      : productData.filter((product) => product.category === selectedCategory);

  const sortedProducts =
    sortType === "price"
      ? [...filteredProducts].sort((a, b) => b.price - a.price)
      : filteredProducts;

  const categories = [
    "All",
    "Sanitary Ware",
    "Power Tools",
    "Solar Power",
    "Building Materials",
  ];

  const toggleOverlay = () => setIsOverlayVisible(!isOverlayVisible);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closePopup = () => setSelectedProduct(null);

  return (
    <div className="mb-10">
      <div className="bg-black bg-center bg-no-repeat bg-cover h-[50vh] w-full">
        <div className="bg-black/50 w-full h-full flex flex-col gap-3 justify-center items-center px-5">
          <h1 className="font-bold text-3xl text-white text-center">
            BROWSE ALL OUR PRODUCTS
          </h1>
          <p className="text-white text-center">
            Our commitment is to deliver outstanding quality products and to
            exceed our customers&apos; expectations
          </p>
        </div>
      </div>

      <div className="px-5">
        <div className="flex flex-col md:flex-row py-5 gap-3">
          <h1 className="font-bold md:w-[50%] md:text-[20px]">
            Products Catalogue
          </h1>
          <div className="flex justify-between md:justify-evenly w-full">
            <button
              className="p-1 w-[45%] border border-black"
              onClick={() => {
                setSortType("default");
                setSelectedCategory("All");
              }}
            >
              <p>Default Sorting</p>
            </button>
            <button
              className="p-1 w-[45%] border border-black bg-blue-500 text-white"
              onClick={() => setSortType("price")}
            >
              <p>Price</p>
            </button>
          </div>
        </div>

        <div className="font-bold flex flex-col md:flex-row items-start gap-2">
          <div className="hidden md:flex flex-col items-start gap-2 w-[30%]">
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

          <div className="flex md:justify-evenly flex-wrap w-[100%]">
            {sortedProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product)}
                className="cursor-pointer"
              >
                <Products
                  image={product.image}
                  description={product.description}
                  price={product.price}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popup Card */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center overflow-scroll justify-center">
          <div className="bg-white p-5  rounded-lg shadow-lg w-[95%] lg:w-[80%] xl:w-[70%] ">
            <button
              className="text-right text-gray-500 font-bold mb-1"
              onClick={closePopup}
            >
              Close ✕
            </button>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="md:w-1/2 h-60 md:h-96 lg:h-[360px] border p-1 w-full rounded-2xl">
                <img
                  src={props.image}
                  alt={selectedProduct.description}
                  className="w-full "
                />
              </div>
              <div className="md:w-1/2 w-full flex flex-col gap-2">
                <h2 className="font-bold text-2xl">
                  {selectedProduct.description}
                </h2>
                <p className="text-gray-700 text-2xl font-bold">
                  ${selectedProduct.price}
                </p>

                <div className="flex flex-col gap-2 border p-2 pb-3 rounded-2xl">
                  <label>Select color</label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <div className="w-6 h-6 flex justify-center items-center rounded-full bg-black">
                     
                    </div>
                    <div className="w-6 h-6 flex justify-center items-center rounded-full bg-lightyellow">
                    
                    </div>
                    <div className="w-6 h-6 flex justify-center items-center rounded-full bg-green">
                    
                    </div>
                   
                  </div>
                </div>

                <div className="flex flex-col gap-2 border p-2 pb-3 my-3 rounded-2xl">
                  <label>Choose size</label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <div className="px-3 h-8 flex justify-center items-center rounded-2xl bg-gray">
                      <p>Small</p>
                    </div>
                    <div className="px-3 h-8 flex justify-center items-center rounded-2xl bg-gray">
                      <p>Medium</p>
                    </div>
                    <div className="px-3 h-8 flex justify-center items-center rounded-2xl bg-gray">
                      <p>Large</p>
                    </div>
                    <div className="px-3 h-8 flex justify-center items-center rounded-2xl bg-gray">
                      <p>X-Large</p>
                    </div>
                  </div>
                </div>
               
                <motion.button   whileTap={{scale:0.8}} className="bg-blue-500 text-white w-full lg:w-[50%] py-2 rounded-2xl">
                  Add to Cart
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
