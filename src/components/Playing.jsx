import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Item from "./Item";
import { useBasket } from "./BasketContext";
import { useLocation } from "react-router-dom"; 

const Playing = ({ selectedCategory }) => {
  const { id } = useParams();
  const { addToBasket } = useBasket();
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname !== "/confirmation" &&
      location.pathname !== "/checkout"
    ) {
      if (!selectedCategory || selectedCategory === "all") {
        axios
          .get("https://fakestoreapi.com/products")
          .then((response) => {
            const productsWithPrice = response.data.map((product) => ({
              ...product,
              price: parseFloat(product.price),
            }));
            setProducts(productsWithPrice);
          })
          .catch((error) => {
            console.error("Error fetching products:", error);
          });
      } else {
        axios
          .get(`https://fakestoreapi.com/products/category/${selectedCategory}`)
          .then((response) => {
            const productsWithPrice = response.data.map((product) => ({
              ...product,
              price: parseFloat(product.price),
            }));
            setProducts(productsWithPrice);
          })
          .catch((error) => {
            console.error(
              `Error fetching ${selectedCategory} products:`,
              error
            );
          });
      }
    }
  }, [selectedCategory, location.pathname]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col items-center p-2 rounded-md shadow hover:shadow-lg"
        >
          <Item product={product} addToBasket={addToBasket} />
        </div>
      ))}
    </div>
  );
};

export default Playing;