"use client"

import React from "react";
import Image, { StaticImageData } from "next/image";

interface Product{
  image:StaticImageData;
  description:string;
  price:number;
}


const Product = (props:Product) => {
  return (
    <div className="w-[50%] md:w-[48%] lg:w-[35%] xl:w-[30%]">
      <Image src={props.image} alt="" className="w-[90%]"/>
      <p className="font-normal text-xs lg:text-base w-[90%] md:w-[100%]">{props.description}</p>
      <h5 className="font-normal">${props.price}</h5>
    </div>
  );
};

export default Product;