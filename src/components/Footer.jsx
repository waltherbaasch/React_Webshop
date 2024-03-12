import React from "react";
import logoImage from "../images/Logo.png-660";
import prepareImage from "../images/Prepare.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logoImage} alt="Logo" className="w-6 h-6 mr-2" />{" "}
        <p>&copy; 2023 GoGift. All rights reserved.</p>
      </div>
      <img src={prepareImage} alt="Prepare" className="w-auto h-20" />
    </footer>
  );
};

export default Footer;
