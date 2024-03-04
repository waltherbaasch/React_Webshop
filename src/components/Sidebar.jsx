import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleItemClick = (item) => {
    setActiveItem(item);

    if (isMobile) {
      setMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={``}>
     
      <div
        className={`${
          isMobile ? "fixed inset-0 z-50 bg-blue" : "fixed left-0 top-0 h-full w-1/4 flex flex-col"
        } ${isMenuOpen ? "block" : "hidden"} bg-gray-800`}
      >
        <div className="w-full py-4 flex flex-col items-center">
          <div className="text-2xl font-semibold mb-6 pl-4">
            <button
              className={`menu-toggle px-2 py-1 ${
                isMenuOpen ? "text-white" : "text-gray-800"
              }`}
              onClick={toggleMenu}
            >
              &#9776;
            </button>
          </div>
          <ul
            className={`${
              isMobile ? "flex-grow" : "flex-grow justify-between"
            } ${isMenuOpen ? "flex flex-col items-center" : "hidden"}`}
          >
            <li
              className={`px-4 py-2 hover:bg-gray-600 ${
                activeItem === "Home" ? "bg-gray-600 text-white" : ""
              }`}
              onClick={() => handleItemClick("Home")}
            >
              <Link to="/">Shop</Link> 
            </li>
            <li
              className={`px-4 py-2 hover.bg-gray-600 ${
                activeItem === "About" ? "bg-gray-600 text-white" : ""
              }`}
              onClick={() => handleItemClick("About")}
            >
              <Link to="/checkout">Checkout</Link> 
            </li>
            <li
              className={`px-4 py-2 hover:bg-gray-600 ${
                activeItem === "Services" ? "bg-gray-600 text-white" : ""
              }`}
              onClick={() => handleItemClick("Services")}
            >
              <Link to="/confirmation">Confirmation</Link>{" "}
           
            </li>
          </ul>
        </div>
      </div>
      <div className="w-1/4">
        <div className="text-2xl font-semibold mb-6 pl-4">
          <button
            className={`menu-toggle px-2 py-1 ${
              isMenuOpen ? "text-pink-100" : "text-gray-800"
            }`}
            onClick={toggleMenu}
          >
            &#9776;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
