import React, { useState, useEffect } from "react";
import HeroIcon from "./HeroIcon";
import { useBasket } from "./BasketContext";
import { Link } from "react-router-dom";
import Item from "./Item";

const calculateTotalPrice = (basket) => {
  const totalPrice = basket.reduce((total, item) => {
    const itemPrice = item.price * item.quantity;
    return total + itemPrice;
  }, 0);
  return totalPrice.toFixed(2);
};

const Basket = () => {
  const { basket, addToBasket, removeFromBasket, decreaseQuantity } =
    useBasket();
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const toggleBasket = () => {
    setIsBasketOpen(!isBasketOpen);
  };
  const handleDecreaseQuantity = (item) => {
    if (item.quantity === 1) {
      removeFromBasket(item);
    } else {
      decreaseQuantity(item);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsBasketOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleIncreseQuantity = (item) => {
    addToBasket(item);
  };
  return (
    <div>
      <div className="">
        <div
          className="flex items-center justify-end cursor-pointer"
          onClick={toggleBasket}
        >
          <HeroIcon totalItems={basket.length} />
        </div>
        {isBasketOpen && (
          <div
            className={`w-full h-full bg-white border border-gray-300 shadow-md absolute right-0 top-0 mt-2 md:w-1/2 lg: width 1/3`}
          >
            <h2 className="text-lg font-semibold py-3 px-4">Your Basket</h2>
            <ul className="divide-y divide-gray-300">
              {basket.map((item) => (
                <li key={item.id} className="flex items-center justify-between">
                  <Item product={item} />
                  <div className="flex items-center space-x-2">
                    <button
                      className="text-red-600 hover:underline"
                      onClick={() => removeFromBasket(item)}
                    >
                      Remove
                    </button>
                    <div className="flex items-center">
                      <button
                        className="bg-blue-500 text-white py-1 px-2 rounded-full"
                        onClick={() => handleIncreseQuantity(item)}
                      >
                        +
                      </button>
                      <span className="mx-2">{item.quantity}x</span>
                      <span className="text-lg font-semibold">
                        ${item.price * item.quantity}
                      </span>
                      <button
                        className="bg-red-500 text-white py-1 px-2 rounded-full"
                        onClick={() => handleDecreaseQuantity(item)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="p-4">
              <p className="text-lg font-semibold">
                Total Price: ${calculateTotalPrice(basket)}
              </p>
              <Link
                to="/checkout"
                className="block bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { Basket, calculateTotalPrice };
