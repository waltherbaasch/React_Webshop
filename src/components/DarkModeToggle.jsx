import React, { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import '@heroicons/react/solid.css';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {

    const savedDarkMode = localStorage.getItem('darkMode');
    setIsDarkMode(savedDarkMode === 'true');
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

 
    localStorage.setItem('darkMode', newDarkMode);

  
    document.body.classList.toggle('dark', newDarkMode);
  };

  return (
    <button
      className="px-3 py-1 bg-gray-800 text-white rounded-md"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
    </button>
  );
};

export default DarkModeToggle;
