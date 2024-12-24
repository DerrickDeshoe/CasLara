"use client";

import React, { useState } from "react";
import Products from "../Components/Product";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import Toilet from "../../public/images/Shop/toilet.png";
import Door from "../../public/images/Shop/toilet.png";
import Geysar from "../../public/images/Shop/toilet.png";
import Tank from "../../public/images/Shop/toilet.png";

const Page = () => {
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
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white p-5 rounded-lg shadow-lg w-11/12 max-w-md">
            <button
              className="text-right text-gray-500 font-bold mb-4"
              onClick={closePopup}
            >
              Close ✕
            </button>
            <div className="flex flex-col items-center gap-4">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.description}
                className="w-32 h-32"
              />
              <h2 className="font-bold text-lg">{selectedProduct.description}</h2>
              <p className="text-gray-700">Price: ${selectedProduct.price}</p>
              <div className="flex gap-2">
                <label>Size:</label>
                <select className="border p-1">
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </select>
              </div>
              <div className="flex gap-2">
                <label>Color:</label>
                <select className="border p-1">
                  {selectedProduct.colors.map((color) => (
                    <option key={color}>{color}</option>
                  ))}
                </select>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
