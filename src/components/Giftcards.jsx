import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBasket } from './BasketContext';

const links = {
  football: 'rqbWCo1g8mg',
  gaming: 'l-x-1fm2cq8',
  training: 'o9zCgPtsups',
};

const GiftCard = ({ hobby, value }) => {
  const navigate = useNavigate();
  const basket = useBasket();

  const navigateToHobby = () => {
    basket.addToBasket(hobby);
    navigate(`/hobbies/${links[hobby]}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-2">{hobby}</h2>
      <p className="text-gray-600 mb-4">Value: ${value}</p>
      <button
        onClick={navigateToHobby}
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
      >
        See Gift Card
      </button>
    </div>
  );
};

export default GiftCard;
