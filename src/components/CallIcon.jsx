import React, { useState } from "react";

export default function CallIcon() {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const phoneNumber = "09371816668";

  const handleIconClick = () => {
    setShowPhoneNumber(!showPhoneNumber);
  };

  return (
    <div className="fixed bottom-4 right-7 z-50">
      <button
        className="bg-green-500 text-white rounded-full p-2 shadow-lg "
        onClick={handleIconClick}
      >
        <i className="fa-solid fa-phone m-1 "></i>
      </button>
      {showPhoneNumber && (
        <div className="absolute bottom-12 right-[-15px] bg-white p-2 shadow-lg rounded-md">
          <div className="flex gap-1">
            <p>📞</p>
            <span className="text-gray-800">{phoneNumber}</span>
          </div>
        </div>
      )}
    </div>
  );
}
