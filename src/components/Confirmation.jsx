import React from "react";
import { useLocation } from "react-router-dom";
import { calculateTotalPrice } from "./Basket";
import { useBasket } from "./BasketContext";
import confirmationImage from "../images/Fallout-Guy.webp"; 

const Confirmation = () => {
  const { basket } = useBasket();
  const location = useLocation();

  if (location.state) {
    const { formData } = location.state;

    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="w-full md:w-3/5 lg:w-2/5 xl:w-1/3 bg-white p-6 shadow-md rounded-lg mt-4">
          <div className="flex">
            <div style={{ width: "200px", height: "200px" }}>
              <img
                src={confirmationImage}
                alt="Confirmation"
                className="w-full h-full"
              />
            </div>

            <div className="w-1/2 ml-4">
              <h2 className="text-2xl font-semibold mb-4">
                Order confirmation
              </h2>
              <p>
                <strong>First Name:</strong> {formData.fname}
              </p>
              <p>
                <strong>Last Name:</strong> {formData.lname}
              </p>
              <p>
                <strong>Email:</strong> {formData.email}
              </p>
              <p>
                <strong>Gender:</strong> {formData.gender}
              </p>
              <h2 className="mt-4 text-2xl font-semibold">
                Items in your basket
              </h2>
              {basket ? (
                basket.map((item) => (
                  <div key={item.id} className="mt-2">
                    <strong>{item.title}</strong> - ${item.price}
                  </div>
                ))
              ) : (
                <p>Your basket is empty</p>
              )}
              <p className="mt-4">
                <strong>Total Price:</strong> ${calculateTotalPrice(basket)}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <p className="text-center mt-8 ml-10">No form data found</p>;
  }
};

export default Confirmation;
