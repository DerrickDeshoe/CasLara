// "use client";
// import React from "react";
// import Image, { StaticImageData } from "next/image";
// import Tub from "../../public/images/Shop/tub.svg";
// import { useState } from "react";
// import { MdCheck } from "react-icons/md";


// interface AddToCart {
//     image: StaticImageData
//     h1: string 
//     price: string
//   }

// const addToCart = (props: AddToCart) => {
//   type ImageSelectorProps = {
//     images: string[]; // The images prop is an array of strings representing the image sources
//   };

//   const [selectedColor, setSelectedColor] = useState<string>("brown");
//   const [selectedSize, setSelectedSize] = useState<string>("Large");
//   const [count, setCount] = useState(1);
//   const [selectedImage, setSelectedImage] = useState<string>("S1");

//   const sizes = ["Small", "Medium", "Large", "X-Large"];

//   const increment = () => {
//     setCount((prevCount) => prevCount + 1);
//   };

//   const decrement = () => {
//     if (count > 0) {
//       // Prevent count from going below 0
//       setCount((prevCount) => prevCount - 1);
//     }
//   };

//   return (
//     <div className="mb-32 px-6 flex flex-col gap-10">
//       <div className="flex flex-col lg:flex-row  md:px-[10%] gap-5 md:gap-10">
//         <div className="md:w-[100%] p-1  md:h-[50vh] lg:h-[60vh] border border-black rounded-2xl">
//           <Image src={props.image} alt="" className="w-[70%] h-full" />
//         </div>
//         <div className="md:w-[100%] flex flex-col gap-2">
//           <h1 className="font-semibold text-3xl">{props.h1}</h1>
//           <h4 className="font-semibold text-2xl">{props.price}</h4>

//           <div className="border border-black rounded-2xl px-3 pb-3 mb-3">
//             <h4 className="pt-1 pb-2 md:pb-4">Select color</h4>
//             <div className="flex gap-2">
//               <button
//                 className="w-6 h-6 rounded-full bg-black flex justify-center items-center"
//                 onClick={() => setSelectedColor("black")}
//               >
//                 {selectedColor === "brown" && (
//                   <MdCheck className="text-white text-1xl" />
//                 )}
//               </button>
//               <button
//                 className="w-6 h-6 rounded-full bg-orange flex justify-center items-center"
//                 onClick={() => setSelectedColor("orange")}
//               >
//                 {selectedColor === "green" && (
//                   <MdCheck className="text-white text-1xl" />
//                 )}
//               </button>
//               <button
//                 className="w-6 h-6 rounded-full bg-green flex justify-center items-center"
//                 onClick={() => setSelectedColor("green")}
//               >
//                 {selectedColor === "blue" && (
//                   <MdCheck className="text-white text-1xl" />
//                 )}
//               </button>
//             </div>
//           </div>

//           <div className="border rounded-2xl px-3 pb-3">
//             <p className="pb-3 md:pb-4">Choose Size</p>
//             <div className="flex justify-between md:justify-start md:gap-4">
//               {sizes.map((size) => (
//                 <button
//                   key={size}
//                   className={`h-6 w-[20%] md:w-[15%] lg:w-[20%] xl:w-[13%] rounded-2xl text-xs flex justify-center items-center
//               ${
//                 selectedSize === size
//                   ? "bg-black text-white"
//                   : "bg-grey text-black"
//               }
//               hover:bg-black hover:text-white`}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   <p>{size}</p>
//                 </button>
//               ))}
//             </div>
//           </div>
//           <div className="flex justify-between mt-2">
//             <div className="bg-grey py-[2px] rounded-2xl justify-evenly items-center flex space-x-2 w-[35%] md:w-[25%] lg:w-[30%] xl:w-[20%]">
//               <button className="font-bold text-2xl" onClick={decrement}>
//                 -
//               </button>
//               <p>{count}</p>
//               <button className="font-bold text-2xl" onClick={increment}>
//                 +
//               </button>
//             </div>
//             <button className="bg-black rounded-2xl flex justify-center items-center text-white w-[60%] md:w-[40%] xl:w-[50%] py-1 ">
//                <p>Add to cart</p>
//              </button>
//           </div>
//         </div>
//       </div>

//      <div className="w-full flex items-center justify-center">
//      <button className="py-2 border border-black rounded-xl font-semibold w-[50%] md:w-[30%] lg:w-[20%]">
//         Load more reiews
//       </button>
//      </div>

//       <div className="flex flex-col justify-center items-center ">
//         <h1 className="font-bold text-2xl md:text-3xl pb-5">YOU MAY ALSO LIKE</h1>
//       </div>
//     </div>
//   );
// };

// export default addToCart;

"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { MdCheck } from "react-icons/md";
import { useCart } from "../Components/cartContext"; // Assuming a CartContext exists

interface AddToCartProps {
  id: number;
  image: StaticImageData;
  h1: string;
  price: string;
}

const AddToCart: React.FC<AddToCartProps> = ({ id, image, h1, price }) => {
  const { addToCart } = useCart(); // Hook to interact with the cart

  const [selectedColor, setSelectedColor] = useState<string>("brown");
  const [selectedSize, setSelectedSize] = useState<string>("Large");
  const [count, setCount] = useState<number>(1);

  const sizes = ["Small", "Medium", "Large", "X-Large"];

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : prev));

  const handleAddToCart = () => {
    addToCart({
      id,
      image,
      title: h1,
      price: parseFloat(price),
      quantity: count,
      color: selectedColor,
      size: selectedSize,
    });
  };

  return (
    <div className="mb-32 px-6 flex flex-col gap-10">
      <div className="flex flex-col lg:flex-row md:px-[10%] gap-5 md:gap-10">
        <div className="md:w-[100%] p-1 md:h-[50vh] lg:h-[60vh] border border-black rounded-2xl">
          <Image src={image} alt={h1} className="w-[70%] h-full" />
        </div>

        <div className="md:w-[100%] flex flex-col gap-2">
          <h1 className="font-semibold text-3xl">{h1}</h1>
          <h4 className="font-semibold text-2xl">${price}</h4>

          {/* Color Selection */}
          <div className="border border-black rounded-2xl px-3 pb-3 mb-3">
            <h4 className="pt-1 pb-2 md:pb-4">Select color</h4>
            <div className="flex gap-2">
              {[
                { color: "black", bg: "bg-black" },
                { color: "orange", bg: "bg-orange-500" },
                { color: "green", bg: "bg-green-500" },
              ].map(({ color, bg }) => (
                <button
                  key={color}
                  className={`w-6 h-6 rounded-full ${bg} flex justify-center items-center`}
                  onClick={() => setSelectedColor(color)}
                >
                  {selectedColor === color && (
                    <MdCheck className="text-white text-1xl" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="border rounded-2xl px-3 pb-3">
            <p className="pb-3 md:pb-4">Choose Size</p>
            <div className="flex justify-between md:justify-start md:gap-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`h-6 w-[20%] md:w-[15%] lg:w-[20%] xl:w-[13%] rounded-2xl text-xs flex justify-center items-center
                  ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-gray-200 text-black"
                  }
                  hover:bg-black hover:text-white`}
                  onClick={() => setSelectedSize(size)}
                >
                  <p>{size}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex justify-between mt-2">
            <div className="bg-gray-200 py-[2px] rounded-2xl justify-evenly items-center flex space-x-2 w-[35%] md:w-[25%] lg:w-[30%] xl:w-[20%]">
              <button className="font-bold text-2xl" onClick={decrement}>
                -
              </button>
              <p>{count}</p>
              <button className="font-bold text-2xl" onClick={increment}>
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-black rounded-2xl flex justify-center items-center text-white w-[60%] md:w-[40%] xl:w-[50%] py-1"
            >
              <p>Add to cart</p>
            </button>
          </div>
        </div>
      </div>

      {/* Load more reviews */}
      <div className="w-full flex items-center justify-center">
        <button className="py-2 border border-black rounded-xl font-semibold w-[50%] md:w-[30%] lg:w-[20%]">
          Load more reviews
        </button>
      </div>

      {/* Recommendations */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl md:text-3xl pb-5">YOU MAY ALSO LIKE</h1>
      </div>
    </div>
  );
};

export default AddToCart;
