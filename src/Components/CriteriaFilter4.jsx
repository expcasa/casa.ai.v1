import React, { useState, useEffect } from "react";

const CriteriaFilter4 = ({ selectedCriteria, onApplyFilters, className }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [filters, setFilters] = useState({
    priority: "", // Priority added to state
  });
  const [isChecked, setIsChecked] = useState(true); // Toggle switch state

  useEffect(() => {
    // Reset the selection when the selected criteria changes
    setSelectedOption("");
    setFilters({ priority: "" }); // Reset priority
  }, [selectedCriteria]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handlePriorityChange = (priority) => {
    setFilters((prevFilters) => ({ ...prevFilters, priority }));
  };

  const handleApplyFilters = () => {
    if (onApplyFilters) {
      onApplyFilters({
        [selectedCriteria]: {
          option: selectedOption,
          priority: filters.priority,
          toggle: isChecked, // Added toggle state in filters
        },
      });
    }
  };

  // Options for bathroom filter
  const options = ["Any", "1+", "1.5+", "2+", "3+", "4+"];

  return (
    <div className="relative">
      <form
        className={`absolute top-0 left-0 w-80 h-80 bg-white text-black p-4 rounded-lg mt-4 shadow-md z-10 ${className}`}
      >
        {/* Top section with H3 on the left and toggle on the right */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold p-1">{selectedCriteria}</h3>

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
                  isChecked
                    ? "translate-x-7 bg-white"
                    : "-translate-x-0.5 bg-black"
                }`}
              ></div>
            </div>
          </label>
        </div>

        {/* Options for bathrooms as small square boxes in a single line */}
        <div className="flex space-x-2 mt-2 overflow-x-auto">
          {options.map((option) => (
            <div
              key={option}
              className={`flex items-center justify-center border-2 cursor-pointer rounded-lg h-10 w-12 ${
                selectedOption === option
                  ? "border-blue-500 bg-blue-100"
                  : "border-gray-300 bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => handleOptionChange(option)}
            >
              <span className="text-center text-sm font-medium">{option}</span>
            </div>
          ))}
        </div>

        <hr className="mt-3 bg-gray opacity-55" />

        {/* Restored Priority Section from CriteriaFilter.jsx */}
        <h3 className="font-semibold rounded mt-2">Priority</h3>
        <div className="flex items-center space-x-2 justify-start mt-3 p-1 rounded">
          <label>
            <input
              type="button"
              value="Must"
              onClick={() => handlePriorityChange("Must")}
              className={`bg-gray-200 py-2 px-4 rounded-lg w-20 items-start border cursor-pointer hover:bg-must-hover hover:text-white active:bg-must-active  active:text-must-text focus:bg-must-active focus:text-must-text ${
                filters.priority === "Must" ? "bg-must-active text-must-text" : ""
              }`}
            />
          </label>
          <label>
            <input
              type="button"
              value="Should"
              onClick={() => handlePriorityChange("Should")}
              className={`bg-gray-200 py-2 px-4 rounded-lg w-20 items-start border cursor-pointer hover:bg-Should-hover hover:text-white active:bg-Should-active active:text-Should-text focus:bg-Should-active focus:text-Should-text ${
                filters.priority === "Should" ? "bg-Should-active text-Should-text" : ""
              }`}
            />
          </label>
          <label>
            <input
              type="button"
              value="Good"
              onClick={() => handlePriorityChange("Good")}
              className={`bg-gray-200 py-2 px-4 rounded-lg w-20 items-start border cursor-pointer hover:bg-Good-hover  hover:text-white active:bg-Good-active active:text-Good-text focus:bg-Good-active focus:text-Good-text ${
                filters.priority === "Good" ? "bg-Good-active text-Good-text" : ""
              }`}
            />
          </label>
        </div>

        <button
          type="button"
          className="p-2 w-full mt-4 rounded-3xl bg-black text-white text-center text-sm"
          onClick={handleApplyFilters}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default CriteriaFilter4;
