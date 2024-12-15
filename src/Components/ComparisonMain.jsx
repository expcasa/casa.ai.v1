import React from "react";
import propertyData from "../propertyData.json";
// import { BsThreeDots } from "react-icons/bs";
const ComparisonMain = ({ isTotalVisible }) => {
  return (
    <div className="max-w-screen-2xl container main-compare">

    <div className="flex mt-7 max-w-screen-xl container ml-40">
      {/* Left Sidebar for Priority and Criteria */}
      <div className="w-1/4 p-4 main2-compare">
        {/* Priority Section */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold importance-compare">Importance</h2>
          <ul className="text-sm flex flex-row gap-3 imp-compare">
            <li className="text-red-500 ">
              {" "}
              <span className="text-red ">●</span> High
            </li>
            <li className="text-orange-500 ">
              <span className="text-Should-hover ">●</span> Medium
            </li>
            <li className="text-blue-500 ">
              <span className="text-blue">●</span> Low
            </li>
          </ul>
        </div>
        {/* Criteria Section */}
        <div className="mt-28 ">
          <h2 className="text-lg font-semibold mb-2 compare-criteria">Criteria</h2>
          <ul className="text-sm space-y-3.5 Criteria-compare">
            <li className=" space-1">
              {" "}
              <span className="text-red">●</span> Price
            </li>
            <li className="space-2">
              {" "}
              <span className="text-red ">●</span> Year Built
            </li>
            <li className="space-3">
              {" "}
              <span className="text-red ">●</span> Sq Ft
            </li>
            <li className="space-4">
              {" "}
              <span className="text-red ">●</span> Lot size
            </li>
            <li className="space-5">
              {" "}
              <span className="text-red ">●</span> Bedrooms
            </li>
            <li className="space-6">
              {" "}
              <span className="text-red ">●</span> Office distance
              <span className="text-property-compare ">Miles</span>
            </li>
            <li className="space-7">
              {" "}
              <span className="text-red ">●</span> Bathrooms
            </li>
            <li className="space-8">
              {" "}
              <span className="text-Should-hover ">●</span> School ratings{" "}
              <span className="text-property-compare ">Sum</span>
            </li>
            <li className="space-9">
              {" "}
              <span className="text-Should-hover ">●</span> Distance to school{" "}
              <span className="text-property-compare ">Miles</span>
            </li>
            <li className="space-10"> <span className="text-blue ">●</span> Swimming pool</li>
            <li className="space-11"> <span className="text-blue ">●</span> Dog park</li>
          </ul>
        </div>
        {/* Total Label in Left Column */}
        {isTotalVisible && (
          <div className="mt-4 font-bold text-sm Total-compare">
            <p className="mb-2">Total Score</p>
            <p>% Match</p>
          </div>
        )}
      </div>
      {/* Property Columns */}
      <div className="flex w-3/4 overflow-x-auto space-x-4 px-2 ">
        {propertyData.slice(27, 30).map((property, index) => (
          <div
            key={index}
            className={`w-1/3 bg-white px-4 ${
              isTotalVisible ? "" : "rounded-lg"
            } ${index < 2 ? "border-r border-gray" : ""} ${
              isTotalVisible ? "border-b border-gray-300" : ""
            }`}
          >
            <div>
              <div className="flex flex-row ">
                {/* Image */}
                {property.Image?.value ? (
                  <img
                    src={property.Image.value}
                    alt={property.address}
                    className="w-full h-28 object-cover rounded-lg mb-1"
                  />
                ) : (
                  <div className="w-full h-32 bg-gray-200 rounded-lg mb-2" />
                )}
                {/* <BsThreeDots className="ml-6 mt-5 cursor-pointer" /> */}
              </div>
              {/* Match Score and Address */}
              <div className="text-center mb-4">
                <p className="text-sm font-semibold text-blue match-compare">
                  {property.Percentage || "N/A"} match score
                </p>
                <h3 className="text-xs text-gray address-compare">
                  {property.address || "No Address Available"}
                </h3>
              </div>
            </div>
            {/* Property Details */}
            <div className="space-y-3.5  text-sm">
              <button className="text-sm ml-16  border border-set rounded-full px-2 py-1 button-compare ">
                Request Showing
              </button>
              
              <p className=" text-center data-compare-1">
                <span className=" font-normal">
                  ${property.price?.value || "N/A"}
                </span>
              </p>
              <p className="text-center data-compare-2">
                {property.yearsBuilt?.value || "N/A"}
              </p>
              <p className="text-center data-compare-3">
                {property.squareFoot?.value || "N/A"}
              </p>
              <p className="text-center data-compare-4">{property.lotSize?.value || "N/A"}</p>
              <p className="text-center data-compare-5">{property.bedrooms?.value || "N/A"}</p>
              <p className="text-center data-compare-6">
                {property.officeDistance?.value || "N/A"}{" "}
              </p>
              <p className="text-center data-compare-7">
                {property.bathrooms?.value || "N/A"}
              </p>
              <p className="text-center data-compare-8">
                {property.schoolRating?.value || "N/A"}
              </p>
              <p className="text-center data-compare-9">
                {property.schoolDistance?.value || "N/A"}
              </p>
              <p className="text-center data-compare-10">
                {property.swimmingPool?.value ? "Yes" : "No"}
              </p>
              <p className="text-center data-compare-11">
                {property.dogPark?.value ? "Yes" : "No"}
              </p>
             
            </div>
            {/* Total Number Only */}
            {isTotalVisible && (
              <div className="mt-4 font-bold  text-center compare-final">
                <p>{property.Total || "N/A"}</p>
                <p>{property.Percentage || "N/A"}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>

  );
};
export default ComparisonMain;