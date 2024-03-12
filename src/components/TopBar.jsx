import React, { useState } from "react";
import FilterIcon from "@heroicons/react/solid/FilterIcon";
import { Basket } from "./Basket";
import Playing from "./Playing";
import { useLocation } from "react-router-dom";
import logoImage from "../images/Logo.png-660"; 

const TopBar = () => {
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const location = useLocation(); 

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setShowFilterDropdown(false);
  };

  const toggleFilterDropdown = () => {
    setShowFilterDropdown(!showFilterDropdown);
  };

  const shouldRenderPlaying = location.pathname !== "/checkout";

  return (
    <div className="top-bar">
      <div className="flex items-center justify-between">
        <img src={logoImage} alt="Logo" className="w-6 h-6 mt-2" />

        <div className="flex items-center">
          <Basket className="mr-2" />
          <div
            onClick={toggleFilterDropdown}
            className="filter-button px-3 py-1 text-black cursor-pointer"
          >
            <FilterIcon className="w-4 h-4" />
          </div>
        </div>
      </div>

      {showFilterDropdown && (
        <div className="filter-dropdown">
          <div className="category-list flex justify-evenly">
            <button onClick={() => handleCategoryChange("all")}>Alle</button>
            <button onClick={() => handleCategoryChange("electronics")}>
              Elektronik
            </button>
            <button onClick={() => handleCategoryChange("jewelery")}>
              Smyker
            </button>
            <button onClick={() => handleCategoryChange("men's clothing")}>
              Herretøj
            </button>
          </div>
        </div>
      )}

      {shouldRenderPlaying && <Playing selectedCategory={selectedCategory} />}
    </div>
  );
};

export default TopBar;
