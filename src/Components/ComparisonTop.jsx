import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
function ComparisonTop({ isTotalVisible, setIsTotalVisible }) {
  return (
    <div className="max-w-screen-2xl container mx-auto ">
    <div className="mt-28 ml-40 flex items-center justify-between compare-top">
      <Link to={"/Criteria"}>
        <p className="text-gray inline-flex text-xl items-center arw-compare 3xl:text-3xl 3xl:right-40 3xl:relative top-28">
          <GoArrowLeft className="mr-2" />
          Back to main page
        </p>
      </Link>
      {/* Sliding Text Toggle Button */}
      <label className="relative right-24 inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          checked={isTotalVisible}
          onChange={() => setIsTotalVisible(!isTotalVisible)}
          className="sr-only peer"
        />
        <div className="relative flex items-center h-8 rounded-full bg-white overflow-hidden w-80 compare-toggle text-xl 3xl:text-2xl 3xl:relative 3xl:top-28 3xl:py-5 3xl:left-24">
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
    </div>
  );
}
export default ComparisonTop;