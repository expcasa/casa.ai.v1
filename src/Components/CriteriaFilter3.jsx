import React, { useState, useEffect } from "react";
import { Tooltip, Typography } from "@material-tailwind/react";

export function TooltipWithHelperIcon() {
  return (
    <Tooltip
      className="z-20"
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

const CriteriaFilter3 = ({ selectedCriteria, onApplyFilters, className }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [priority, setPriority] = useState("");
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    // Load saved option and priority from local storage on component mount
    const savedOption = JSON.parse(localStorage.getItem(selectedCriteria))?.option || "";
    const savedPriority = JSON.parse(localStorage.getItem(selectedCriteria))?.priority || "";
    const savedIsChecked = JSON.parse(localStorage.getItem(`${selectedCriteria}_isChecked`)) || true;

    setSelectedOption(savedOption);
    setPriority(savedPriority);
    setIsChecked(savedIsChecked);
  }, [selectedCriteria]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handlePriorityChange = (priorityValue) => {
    setPriority(priorityValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onApplyFilters) {
      onApplyFilters({
        [selectedCriteria]: {
          option: selectedOption,
          priority: priority,
        },
      });
    }

    // Store selected option, priority, and checked state in local storage
    localStorage.setItem(selectedCriteria, JSON.stringify({ option: selectedOption, priority }));
    localStorage.setItem(`${selectedCriteria}_isChecked`, JSON.stringify(isChecked));
    localStorage.setItem(`${selectedCriteria}_dotColor`, priority);

    // Reload the page after saving
    window.location.reload();
  };
  const handleInputChange = (e, type) => {
    const value = e.target.value;
    setFilters((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const handleApplyFilters = () => {
    if (onApplyFilters) {
      onApplyFilters({ [selectedCriteria]: filters });
    }

    localStorage.setItem(selectedCriteria, JSON.stringify(filters));
    localStorage.setItem(`${selectedCriteria}_isChecked`, JSON.stringify(isChecked));
    localStorage.setItem(`${selectedCriteria}_dotColor`, filters.priority);

    window.location.reload();
  };

  const handleClearFilters = () => {
    // Remove filters and checkbox state from localStorage
    localStorage.removeItem(selectedCriteria);
    localStorage.removeItem(`${selectedCriteria}_isChecked`);
    localStorage.removeItem(`${selectedCriteria}_dotColor`);

    // Reset filters and checkbox state
    setFilters({ min: "", max: "", priority: "" });
    setIsChecked(false);
    window.location.reload();
  };

  const options = ["Any", "1+", "2+", "3+", "4+", "5+"];

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit}
        className={`absolute top-0 left-0 w-80 h-80 bg-white text-black p-4 rounded-lg mt-4 shadow-md z-10 ${className} 3xl:w-[26rem] 3xl:h-[25rem]`}
      >
        {/* Title and Toggle */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold p-1 3xl:text-3xl">{selectedCriteria}</h3>
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

        {/* Option Buttons */}
        <div className="flex space-x-2 mt-2 overflow-x-auto">
          {options.map((option) => (
            <button
              type="button"
              key={option}
              className={`flex items-center justify-center border-2 cursor-pointer rounded-lg h-10 w-12 ${
                selectedOption === option
                  ? "bg-black text-white"
                  : "border-gray-300 bg-gray-200 hover:bg-gray-300"
              } 3xl:h-14 3xl:w-16`}
              onClick={() => handleOptionChange(option)}
            >
              <span className="text-center text-sm font-medium 3xl:text-xl">{option}</span>
            </button>
          ))}
        </div>

        <hr className="mt-3 bg-gray opacity-55" />

        {/* Priority Buttons */}
        <div className="flex items-center mt-2 space-x-1">
          <h3 className="font-semibold 3xl:text-2xl">Priority</h3>
          <TooltipWithHelperIcon />
        </div>
        <div className="flex items-center space-x-2 justify-start mt-3 p-1 rounded">
          <label>
            <input
              type="button"
              value="High"
              onClick={() => handlePriorityChange("Must")}
              className={`bg-gray-200 py-2 px-4 rounded-lg w-20 border cursor-pointer hover:bg-must-hover hover:text-white active:bg-must-active active:text-must-text focus:bg-must-active focus:text-must-text ${
                priority === "Must" ? "bg-must-active text-must-text" : ""
              } 3xl:w-[7.3rem] 3xl:py-4  3xl:text-2xl`}
            />
          </label>
          <label>
            <input
              type="button"
              value="Medium"
              onClick={() => handlePriorityChange("Should")}
              className={`bg-gray-200 py-2 px-4 rounded-lg w-22 border cursor-pointer hover:bg-Should-hover hover:text-white active:bg-Should-active active:text-Should-text focus:bg-Should-active focus:text-Should-text ${
                priority === "Should" ? "bg-Should-active text-Should-text" : ""
              } 3xl:w-[7.3rem] 3xl:py-4  3xl:text-2xl`}
            />
          </label>
          <label>
            <input
              type="button"
              value="Low"
              onClick={() => handlePriorityChange("Good")}
              className={`bg-gray-200 py-2 px-4 rounded-lg w-20 border cursor-pointer hover:bg-Good-hover hover:text-white active:bg-Good-active active:text-Good-text focus:bg-Good-active focus:text-Good-text ${
                priority === "Good" ? "bg-Good-active text-Good-text" : ""
              } 3xl:w-[7.3rem] 3xl:py-4  3xl:text-2xl`}
            />
          </label>
        </div>

        {/* Save Button */}
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

export default CriteriaFilter3;
