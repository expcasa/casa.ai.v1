import React, { useEffect, useState } from "react";
import { Navbar, Typography } from "@material-tailwind/react";

export function CriteriaNavbar({ onSearchChange }) {
  const [inputValue, setInputValue] = useState(""); // Local state to track input value

  // Load search text from local storage when the component mounts
  useEffect(() => {
    const storedSearchText = localStorage.getItem("searchText");
    if (storedSearchText) {
      setInputValue(storedSearchText);
      onSearchChange(storedSearchText); // Trigger search with the stored value
    }
  }, [onSearchChange]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // Update input value on every keystroke
    sessionStorage.setItem("searchText", event.target.value); // Store input value in local storage
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearchChange(inputValue); // Update search text when Enter is pressed
    }
  };

  return (
    <div className="w-screen">
      <div className="bg-white w-full h-16 flex items-center justify-between px-4 shadow-md fixed top-0 z-50 3xl:py-5 3xl:mb-5">
        {/* Brand Name */}
        <div className="text-xl font-bold text-gray-800 ">
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-bold text-lg text-blue ml-5 3xl:text-3xl"
          >
            casa.ai
          </Typography>
        </div>
        {/* Search Bar */}
        <div className="flex-grow flex justify-center">
          <div className="relative w-1/4">
            <input
              type="text"
              className="w-full p-2 pr-10 pl-6 rounded-full bg-base-300 text-black text-sm outline-none 3xl:h-30 3xl:text-2xl"
              placeholder="Search..."
              value={inputValue}
              onChange={handleInputChange} // Update on every keystroke
              onKeyDown={handleKeyDown} // Trigger search change on Enter
            />
            <img src="/icon-md.svg" alt="Search Icon" className="absolute right-3 top-1.5 3xl:w-10 3xl:h-10" />
          </div>
        </div>
      </div>
    </div>
  );
}