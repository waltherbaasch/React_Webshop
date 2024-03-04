import React, { createContext, useContext, useState } from 'react';

const BasketContext = createContext({
  basket: [],
  addToBasket: (item) => {
    console.log(`Adding item to basket: ${item}`);
  },
  removeFromBasket: (item) => {
    console.log(`Removing item from basket: ${item}`);
  },
});

const useBasket = () => {
  return useContext(BasketContext);
};

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (item) => {

    const existingItemIndex = basket.findIndex((basketItem) => basketItem.id === item.id);

    if (existingItemIndex !== -1) {
   
      const updatedBasket = [...basket];
      updatedBasket[existingItemIndex] = {
        ...basket[existingItemIndex],
        quantity: basket[existingItemIndex].quantity + 1,
      };
      setBasket(updatedBasket);
    } else {
  
      setBasket([...basket, { ...item, quantity: 1 }]);
    }
  };

  const removeFromBasket = (item) => {
    const updatedBasket = basket.filter((basketItem) => basketItem.id !== item.id);
    setBasket(updatedBasket);
  };

  const decreaseQuantity = (item) => {
    const updatedBasket = basket.filter((basketItem) => basketItem.id !== item.id);
    setBasket([...updatedBasket, { ...item, quantity: item.quantity - 1 }]);
  };
  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, decreaseQuantity }}>
      {children}
    </BasketContext.Provider>
  );
};

export { BasketProvider, useBasket };
