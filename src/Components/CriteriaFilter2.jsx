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

const CriteriaFilter2 = ({ selectedCriteria, onApplyFilters, className }) => {
  const [selection, setSelection] = useState({
    yesOrNo: null,
    priority: "",
  });
  const [isChecked, setIsChecked] = useState(true); // State for the toggle switch

  // Load selection from local storage when selectedCriteria changes
  useEffect(() => {
    const savedSelection = localStorage.getItem(selectedCriteria);
    if (savedSelection) {
      const parsedSelection = JSON.parse(savedSelection);
      setSelection(parsedSelection.selection);
      setIsChecked(parsedSelection.toggle);
    } else {
      setSelection({ yesOrNo: null, priority: "" });
      setIsChecked(true); // Reset toggle switch if no saved data
    }
  }, [selectedCriteria]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSelection((prev) => ({ ...prev, yesOrNo: value }));
  };

  const handlePriorityChange = (priority) => {
    setSelection((prev) => ({ ...prev, priority }));
  };

  const handleApplyFilters = () => {
    if (onApplyFilters) {
      const criteriaData = { selection, toggle: isChecked };
      // Save selection to local storage
      localStorage.setItem(selectedCriteria, JSON.stringify(criteriaData));
      localStorage.setItem(`${selectedCriteria}_dotColor`, criteriaData.selection.priority);
      localStorage.setItem(`${selectedCriteria}_isChecked`, JSON.stringify(isChecked));
      // Optionally notify parent component
      onApplyFilters({ [selectedCriteria]: criteriaData });
      window.location.reload();
    }
  };

  const handleClearFilters = () => {
    // Remove selection and checkbox state from localStorage
    localStorage.removeItem(selectedCriteria);
    localStorage.removeItem(`${selectedCriteria}_dotColor`);
    localStorage.removeItem(`${selectedCriteria}_isChecked`);

    // Reset selection and checkbox state
    setSelection({ yesOrNo: null, priority: "" });
    setIsChecked(false);
    window.location.reload();
  };

  return (
    <div className="relative">
      <form
        className={`absolute top-0 left-0 w-80 h-80 bg-white text-black p-4 rounded-lg mt-4 shadow-md z-10 ${className} 3xl:w-[26rem] 3xl:h-[25rem]`}
      >
        {/* Yes/No selection with Toggle */}
        <div className="flex items-center justify-between mt-2 p-1 rounded">
          <h3 className="font-semibold p-1 rounded mt-1 3xl:text-3xl">{selectedCriteria}</h3>
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

        {/* Radio buttons for Yes/No */}
        <div className="flex flex-col mt-2 p-1 rounded">
          <div className="mb-2">
            <label className="flex items-center space-x-2 cursor-pointer 3xl:text-2xl">
              <input
                type="radio"
                name="yesOrNo"
                value="Yes"
                checked={selection.yesOrNo === "Yes"}
                onChange={handleInputChange}
                className="form-radio cursor-pointer 3xl:w-5 3xl:h-5"
              />
              <span>Yes</span>
            </label>
          </div>
          <div className="mb-2">
            <label className="flex items-center space-x-2 cursor-pointer 3xl:text-2xl">
              <input
                type="radio"
                name="yesOrNo"
                value="No"
                checked={selection.yesOrNo === "No"}
                onChange={handleInputChange}
                className="form-radio cursor-pointer 3xl:w-5 3xl:h-5"
              />
              <span>No</span>
            </label>
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
              onClick={() => handlePriorityChange("Must")}
              className={`bg-gray-200 py-2 px-4 rounded-lg w-20 border cursor-pointer hover:bg-must-hover hover:text-white active:bg-must-active active:text-must-text focus:bg-must-active focus:text-must-text ${
                selection.priority === "Must" ? "bg-must-active text-must-text" : ""
              } 3xl:w-[7.3rem] 3xl:py-4  3xl:text-2xl`}
            />
          </label>
          <label>
            <input
              type="button"
              value="Medium"
              onClick={() => handlePriorityChange("Should")}
              className={`bg-gray-200 py-2 px-4 rounded-lg w-22 border cursor-pointer hover:bg-Should-hover hover:text-white active:bg-Should-active active:text-Should-text focus:bg-Should-active focus:text-Should-text ${
                selection.priority === "Should" ? "bg-Should-active text-Should-text" : ""
              } 3xl:w-[7.3rem] 3xl:py-4  3xl:text-2xl`}
            />
          </label>
          <label>
            <input
              type="button"
              value="Low"
              onClick={() => handlePriorityChange("Good")}
              className={`bg-gray-200 py-2 px-4 rounded-lg w-20 border cursor-pointer hover:bg-Good-hover hover:text-white active:bg-Good-active active:text-Good-text focus:bg-Good-active focus:text-Good-text ${
                selection.priority === "Good" ? "bg-Good-active text-Good-text" : ""
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

export default CriteriaFilter2;
