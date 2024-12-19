import React from "react";
import Image, { StaticImageData } from "next/image";

interface Card1Props {
  image: StaticImageData;
  productName: string;
  cardPositionClasses?: string; // Tailwind classes for positioning
}

const Card1 = ({ image, productName, cardPositionClasses }: Card1Props) => {
  return (
    <div className="rounded-lg relative lg:w-[28%]">
      <Image src={image} alt={productName} />
      <div
        className={`bg-white rounded-lg p-3 shadow-xl ${cardPositionClasses}`} // Dynamic Tailwind classes
      >
        <p>{productName}</p>
      </div>
    </div>
  );
};

export default Card1;

