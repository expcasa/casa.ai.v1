import React from "react";
import propertyData from "../propertyData.json";
import { BsThreeDots } from "react-icons/bs";
const ComparisonMain = ({ isTotalVisible }) => {
  return (
    <div className="flex mt-7 max-w-screen-xl container ml-40">
      {/* Left Sidebar for Priority and Criteria */}
      <div className="w-1/4 p-4">
        {/* Priority Section */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Priority</h2>
          <ul className="text-sm flex flex-row gap-3">
            <li className="text-red-500">
              {" "}
              <span className="text-red">●</span> High
            </li>
            <li className="text-orange-500">
              <span className="text-yellow">●</span> Medium
            </li>
            <li className="text-green-500">
              <span className="text-blue">●</span> Low
            </li>
          </ul>
        </div>
        {/* Criteria Section */}
        <div className="mt-28 ">
          <h2 className="text-lg font-semibold mb-2">Criteria</h2>
          <ul className="text-sm space-y-3.5">
            <li>Price</li>
            <li>Year Built</li>
            <li>Sq Ft</li>
            <li>Lot size</li>
            <li>Bedrooms</li>
            <li>
              Office distance{" "}
              <span className="text-property-compare">Miles</span>
            </li>
            <li>Bathrooms</li>
            <li>
              School ratings <span className="text-property-compare">Sum</span>
            </li>
            <li>
              Distance to school{" "}
              <span className="text-property-compare">Miles</span>
            </li>
            <li>Swimming pool</li>
            <li>Dog park</li>
          </ul>
        </div>
        {/* Total Label in Left Column */}
        {isTotalVisible && (
          <div className="mt-4 font-bold text-sm">
            <p className="mb-2">Total Score</p>
            <p>% Match</p>
          </div>
        )}
      </div>
      {/* Property Columns */}
      <div className="flex w-3/4 overflow-x-auto space-x-4 px-2">
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
              <div className="flex flex-row">
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
                <p className="text-sm font-semibold text-blue">
                  {property.Percentage || "N/A"} match score
                </p>
                <h3 className="text-xs text-gray">
                  {property.address || "No Address Available"}
                </h3>
              </div>
            </div>
            {/* Property Details */}
            <div className="space-y-3.5  text-sm">
              <button className="text-sm ml-16  border border-set rounded-full px-2 py-1 ">
                Request Showing
              </button>
              <p className=" text-center">
                <span className=" font-normal">
                  ${property.price?.value || "N/A"}
                </span>
              </p>
              <p className="text-center">{property.yearsBuilt?.value || "N/A"}</p>
              <p className="text-center">{property.squareFoot?.value || "N/A"}</p>
              <p className="text-center">{property.lotSize?.value || "N/A"}</p>
              <p className="text-center">{property.bedrooms?.value || "N/A"}</p>
              <p className="text-center">{property.officeDistance?.value || "N/A"} </p>
              <p className="text-center">{property.bathrooms?.value || "N/A"}</p>
              <p className="text-center">{property.schoolRating?.value || "N/A"}</p>
              <p className="text-center">{property.schoolDistance?.value || "N/A"}</p>
              <p className="text-center">{property.swimmingPool?.value ? "Yes" : "No"}</p>
              <p className="text-center">{property.dogPark?.value ? "Yes" : "No"}</p>
            </div>
            {/* Total Number Only */}
            {isTotalVisible && (
              <div className="mt-4 font-bold  text-center">
                 <p>{property.Total || "N/A"}</p>
                 <p>{property.Percentage || "N/A"}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default ComparisonMain;