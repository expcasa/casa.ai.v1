import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
function ComparisonTop({ isTotalVisible, setIsTotalVisible }) {
  return (
    
    <div className="mt-20 ml-40 flex items-center justify-between compare-top">
      <Link to={"/Criteria"}>
        <p className="text-gray inline-flex items-center arw-compare">
          <GoArrowLeft className="mr-2" />
          Back to main page
        </p>
      </Link>
      {/* Sliding Text Toggle Button */}
      <label className="relative right-32 inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          checked={isTotalVisible}
          onChange={() => setIsTotalVisible(!isTotalVisible)}
          className="sr-only peer"
        />
        <div className="relative flex items-center h-8 rounded-full bg-white overflow-hidden w-52 compare-toggle">
          {/* Sliding background */}
          <div
            className={`absolute w-1/2 h-full bg-gray rounded-full transition-transform duration-300 ${
              isTotalVisible ? "translate-x-full" : "translate-x-0"
            }`}
          ></div>
          {/* Labels */}
          <span
            className={`z-10 flex-1 text-center transition-colors duration-300 ${
              isTotalVisible ? "text-gray" : "text-white"
            }`}
          >
            Current
          </span>
          <span
            className={`z-10 flex-1 text-center transition-colors duration-300 ${
              isTotalVisible ? "text-white" : "text-gray"
            }`}
          >
            Match Score
          </span>
        </div>
      </label>
    </div>
  );
}
export default ComparisonTop;