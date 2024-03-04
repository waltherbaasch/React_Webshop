import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import nukaImage from "../images/Nuka.webp"; // Update the path to your nuka image
import SherrifImage from "../images/Sherrif.webp"; // Update the path to your sunset image

function PersonalDetails() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    gender: "",
  });
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    if (formData.fname && formData.lname && formData.email && formData.gender) {
      navigate("/confirmation", { state: { formData } });
    }
  };

  const lightModeClass = "bg-white text-black";
  const darkModeClass = "bg-gray-800 text-white";

  return (
    <div
      className={`h-screen mx-auto mt-4 space-y-4 w-1/1 md:w-1/3 lg:w-1/4 ${
        darkMode ? darkModeClass : lightModeClass
      }`}
    >
      <div className="ml-16">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          {darkMode ? (
            <SunIcon className="w-6 h-6" />
          ) : (
            <MoonIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label>Gender:</label>
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="fname"
          value={formData.fname}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lname"
          value={formData.lname}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Submit
      </button>

      <div className="flex ml-8">
        <img src={nukaImage} alt="Nuka" className="w-2/5" />
        <img src={SherrifImage} alt="Sherrif" className="w-2/5" />
      </div>
    </div>
  );
}

export default PersonalDetails;
