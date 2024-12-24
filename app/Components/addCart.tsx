import { useCart } from "./cartContext";

const AddToCart = (props: AddToCart) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: props.id, // Pass a unique id for each product
      image: props.image,
      title: props.h1,
      price: parseFloat(props.price),
      quantity: count,
      color: selectedColor,
      size: selectedSize,
    });
  };

  // Existing code here...

  return (
    <div>
      {/* Other UI */}
      <button onClick={handleAddToCart} className="bg-black text-white">
        Add to Cart
      </button>
    </div>
  );
};
