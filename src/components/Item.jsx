import React from "react";
import HeroIcon from "./HeroIcon";

const Item = ({ product, addToBasket }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-16 h-16 mb-2">
        <img
          src={product.image}
          alt={`${product.title} product`}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="text-center">
        <p>{product.title}</p>
        <p className="mt-1">${product.price.toFixed(2)}</p>
        {addToBasket && <button
          onClick={() => addToBasket(product)}
          className="bg-blue-500 text-white py-2 px-4 mt-2 rounded hover:bg-blue-600"
        >
          Tilføj til kurv
        </button>}
      </div>
    </div>
  );
};

export default Item;
