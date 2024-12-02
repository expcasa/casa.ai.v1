import React, { useState, useEffect } from "react";
import { Tooltip, Typography } from "@material-tailwind/react";

export function TooltipWithHelperIcon() {
  return (
    <Tooltip
    container="body"
      className="z-20 relative"
      placement="right"
      content={
        <div className="w-96 h-50 custom-tooltip-content">
          <Typography variant="small" color="white" className="font-normal opacity-80">
            <b className="font-Sans">• Each Criterion Will Be Rated On A Scale From 0 To 10:-</b>
            <table>
              <br />
              <tr>
                <th>Importance Level</th>
                <th>Weightage</th>
              </tr>
              <tr>
                <td>-High Importance</td>
                <td>3x</td>
              </tr>
              <tr>
                <td>-Medium Importance</td>
                <td>2x</td>
              </tr>
              <tr>
                <td>-Low Importance</td>
                <td>1x</td>
              </tr>
            </table>
          </Typography>
        </div>
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        className="h-5 w-5 cursor-pointer text-blue-gray-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
    </Tooltip>
  );
}

const CriteriaFilter7 = ({ selectedCriteria, onApplyFilters, className }) => {
  const [selectedRating, setSelectedRating] = useState(1); // Default to "Any"
  const [priority, setPriority] = useState(""); // Priority state
  const [isChecked, setIsChecked] = useState(true); // Default for toggle

  // Load saved filters from localStorage when the selected criteria changes
  useEffect(() => {
    const savedFilters = localStorage.getItem(selectedCriteria);
    const savedIsChecked = localStorage.getItem(`${selectedCriteria}_isChecked`);

    if (savedFilters) {
      const { rating, priority } = JSON.parse(savedFilters);
      setSelectedRating(rating || 1);
      setPriority(priority || ""); // Default to empty if not set
    } else {
      setSelectedRating(1); // Default to "Any"
      setPriority(""); // Default to no priority
    }

    setIsChecked(savedIsChecked !== null ? JSON.parse(savedIsChecked) : true);
  }, [selectedCriteria]);

  const handleSliderChange = (e) => {
    const newValue = Number(e.target.value);
    setSelectedRating(newValue); // Update the selected rating
  };

  const handleApplyFilters = () => {
    if (onApplyFilters) {
      const filters = {
        rating: selectedRating,
        priority,
      };
      onApplyFilters({ [selectedCriteria]: filters });
    }

    // Save the selected values and checkbox state to local storage
    localStorage.setItem(
      selectedCriteria,
      JSON.stringify({ rating: selectedRating, priority })
    );
    localStorage.setItem(`${selectedCriteria}_isChecked`, JSON.stringify(isChecked));
    localStorage.setItem(`${selectedCriteria}_dotColor`, priority); // Save priority as the color value
    window.location.reload();
  };

  const handlePrioritySelection = (value) => {
    setPriority(value); // Set the priority to the selected value
  };

  const handleClearFilters = () => {
    // Remove filters and checkbox state from localStorage
    localStorage.removeItem(selectedCriteria);
    localStorage.removeItem(`${selectedCriteria}_isChecked`);
    localStorage.removeItem(`${selectedCriteria}_dotColor`);

    // Reset filters and checkbox state
    setSelectedRating(1);
    setPriority("");
    setIsChecked(false);
    window.location.reload();
  };

  return (
    <div className="relative z-0">
      <form
        className={`absolute top-0 left-0 w-80 h-70 bg-white text-black p-4 rounded-lg mt-4 shadow-md ${className} 3xl:w-[26rem] 3xl:h-[25rem]`}
      >
        {/* Top section with H3 on the left and toggle on the right */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold p-1 3xl:text-3xl">{selectedCriteria}</h3>

          {/* Toggle switch */}
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="hidden"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <div
              className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors ${
                isChecked ? "bg-blue" : "bg-white border border-black"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full shadow-md transform transition-transform ${
                  isChecked ? "translate-x-7 bg-white" : "-translate-x-0.5 bg-black"
                }`}
              ></div>
            </div>
          </label>
        </div>

        {/* Volume-like horizontal slider */}
        <div className="flex flex-col items-center mt-4">
          <input
            type="range"
            min="1"
            max="10"
            value={selectedRating}
            onChange={handleSliderChange}
            className="w-full appearance-none h-2 rounded-lg bg-gray-300 cursor-pointer 3xl:h-4"
            style={{
              background: `linear-gradient(to right, #4F46E5 ${(selectedRating - 1) * 11}%, #E5E7EB 0%)`,
            }}
          />
          <div className="flex justify-between w-full mt-2 ">
            {[10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((value) => (
              <span key={value} className="text-sm 3xl:text-xl">
                {value}
              </span>
            ))}
          </div>
        </div>

        <hr className="mt-3 bg-gray opacity-55" />

        {/* Priority Section */}
        <div className="flex items-center mt-2 space-x-1">
          <h3 className="font-semibold 3xl:text-2xl">Priority</h3>
          <TooltipWithHelperIcon />
        </div>
        <div className="flex items-center space-x-2 justify-start mt-3 p-1 rounded">
          <label>
            <input
              type="button"
              value="High"
              onClick={() => handlePrioritySelection("Must")}
              className={`bg-gray-200 py-2 px-4 rounded-lg w-20 items-start border cursor-pointer hover:bg-must-hover hover:text-white active:bg-must-active active:text-must-text focus:bg-must-active focus:text-must-text ${
                priority === "Must" ? "bg-must-active text-must-text" : ""
              } 3xl:w-[7.3rem] 3xl:py-4  3xl:text-2xl`}
            />
          </label>
          <label>
            <input
              type="button"
              value="Medium"
              onClick={() => handlePrioritySelection("Should")}
              className={`bg-gray-200 py-2 px-4 rounded-lg w-22 items-start border cursor-pointer hover:bg-Should-hover hover:text-white active:bg-Should-active active:text-Should-text focus:bg-Should-active focus:text-Should-text ${
                priority === "Should" ? "bg-Should-active text-Should-text" : ""
              } 3xl:w-[7.3rem] 3xl:py-4  3xl:text-2xl`}
            />
          </label>
          <label>
            <input
              type="button"
              value="Low"
              onClick={() => handlePrioritySelection("Good")}
              className={`bg-gray-200 py-2 px-4 rounded-lg w-20 items-start border cursor-pointer hover:bg-Good-hover hover:text-white active:bg-Good-active active:text-Good-text focus:bg-Good-active focus:text-Good-text ${
                priority === "Good" ? "bg-Good-active text-Good-text" : ""
              } 3xl:w-[7.3rem] 3xl:py-4  3xl:text-2xl`}
            />
          </label>
        </div>

        <div className="flex flex-row">
          <button
            type="button"
            onClick={handleClearFilters}
            className="p-2 w-[100px] mt-4 ml-5 rounded-3xl bg-black text-white text-center text-sm 3xl:w-44 3xl:text-2xl"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={handleApplyFilters}
            className="p-2 w-[100px] mt-4 ml-5 rounded-3xl bg-black text-white text-center text-sm 3xl:w-44 3xl:text-2xl"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CriteriaFilter7;
