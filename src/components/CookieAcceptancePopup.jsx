import React, { useState } from "react";

const CookieAcceptancePopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const acceptCookies = () => {
    setShowPopup(false);
  };

  const declineCookies = () => {
    setShowPopup(false);
  };

  if (showPopup) {
    return (
      <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm md:text-base">
            Denne hjemmeside bruger cookies for at forbeder brugeroplevelsen
          </p>
          <div className="flex space-x-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm md:text-base"
              onClick={acceptCookies}
            >
              Accepter
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md text-sm md:text-base"
              onClick={declineCookies}
            >
              Afvis
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default CookieAcceptancePopup;
