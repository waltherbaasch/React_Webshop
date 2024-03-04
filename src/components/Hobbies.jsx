import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { useBasket } from './BasketContext';
const links = {
  football: 'rqbWCo1g8mg',
  gaming: 'l-x-1fm2cq8',
  training: 'o9zCgPtsups',
}



const Hobbies = () => {
  const navigate = useNavigate();
  const [selectedHobby, setSelectedHobby] = useState('');
  const basket = useBasket(); 

  const handleSelectChange = (event) => {
    setSelectedHobby(event.target.value);
  };

  const navigateToHobby = () => {
    console.log(basket)
    basket.addToBasket(selectedHobby);
    navigate(`/hobbies/${links[selectedHobby]}`);
  };


  return (
    <div className="flex flex-col space-y-4 justify-center items-center">
      <div className="space-y-4">
        <select name="Hobbies" value={selectedHobby} onChange={handleSelectChange}>
          <option value="" disabled>Select a hobby</option>
          <option value="football">Football</option>
          <option value="gaming">Gaming</option>
          <option value="training">Training</option>
        </select>
        <button
          onClick={navigateToHobby}
          className="bg-transparent text-green-700 font-semibold hover:bg-blue-500 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export {links, Hobbies};

