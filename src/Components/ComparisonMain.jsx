import React from "react";
import propertyData from "../propertyData.json";
import { RiVipCrownFill } from "react-icons/ri";

const ComparisonMain = ({ isTotalVisible }) => {
  return (
    <div className="max-w-screen-2xl container mx-auto ">
      <div className="flex mt-7 max-w-screen-xl container ml-40">
        {/* Left Sidebar for Priority and Criteria */}
        <div className="w-1/4 p-4 main2-compare 3xl:relative right-40 top-44">
          {/* Priority Section */}
          <div className="mb-4 ">
            <h2 className="text-2xl font-semibold importance-compare 3xl:text-4xl">
              Importance
            </h2>
            <ul className="text-lg flex flex-row gap-3 imp-compare 3xl:text-2xl">
              <li className="text-red-500">
                <span className="text-red">●</span> High
              </li>
              <li className="text-orange-500">
                <span className="text-Should-hover">●</span> Medium
              </li>
              <li className="text-blue-500">
                <span className="text-blue">●</span> Low
              </li>
            </ul>
          </div>
          {/* Criteria Section */}
          <div className="mt-28">
            <h2 className="text-2xl font-semibold mb-2 compare-criteria 3xl:text-3xl ">
              Criteria
            </h2>
            <ul className="text-lg space-y-4 Criteria-compare 3xl:space-y-6">
              <li className="3xl:text-2xl">
                <span className="text-red">●</span> Price
              </li>
              <li className="3xl:text-2xl">
                <span className="text-red">●</span> Year Built
              </li>
              <li className="3xl:text-2xl">
                <span className="text-red">●</span> Sq Ft
              </li>
              <li className="3xl:text-2xl">
                <span className="text-red">●</span> Lot size
              </li>
              <li className="3xl:text-2xl">
                <span className="text-red">●</span> Bedrooms
              </li>
              <li className="3xl:text-2xl">
                <span className="text-red">●</span> Office distance
                <span className="text-property-compare"> Miles</span>
              </li>
              <li className="3xl:text-2xl">
                <span className="text-red">●</span> Bathrooms
              </li>
              <li className="3xl:text-2xl">
                <span className="text-Should-hover">●</span> School ratings
                <span className="text-property-compare"> Sum</span>
              </li>
              <li className="3xl:text-2xl">
                <span className="text-Should-hover">●</span> Distance to school
                <span className="text-property-compare text-xl"> Miles</span>
              </li>
              <li className="3xl:text-2xl">
                <span className="text-blue">●</span> Swimming pool
              </li>
              <li className="3xl:text-2xl">
                <span className="text-blue">●</span> Dog park
              </li>
            </ul>
          </div>
          {/* Total Label in Left Column */}
          {isTotalVisible && (
            <div className="mt-4 font-bold text-lg Total-compare 3xl:text-2xl">
              <p className="mb-2">Total Score</p>
              <p>% Match</p>
            </div>
          )}
        </div>
        {/* Property Columns */}
        <div className="flex w-3/4 overflow-x-auto space-x-4 px-2 3xl:relative 3xl:top-40 3xl:left-24 3xl:left- ">
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
                      className="w-full h-28 3xl:h-32 object-cover rounded-lg mb-1"
                    />
                  ) : (
                    <div className="w-full h-32 bg-gray-200 rounded-lg mb-2" />
                  )}
                </div>
                {/* Match Score and Address */}
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center space-x-4 text-lg font-semibold">
                    <p className="text-blue match-compare 3xl:text-lg">
                      {property.Percentage || "N/A"} match score
                    </p>
                    {property.Percentage === "77.7%" && (
                      <div className="flex items-center space-x-0.5">
                        <RiVipCrownFill className="text-property-TMbg" />
                        <span className="text-property-TMbg text-sm">
                          Top Match
                        </span>
                      </div>
                    )}
                  </div>

                  <h4 className="text-md text-gray address-compare 3xl:text-lg">
                    {property.address || "No Address Available"}
                  </h4>
                </div>
              </div>
              {/* Property Details */}
              <div className="space-y-4 text-sm 3xl:space-y-6">
                <button className="text-base ml-16 border border-set rounded-full px-2 py-1 button-compare ">
                  Request Showing
                </button>
                <div className="flex justify-center items-center h-full text-lg 3xl:text-2xl">
                  <p
                    className={`text-center data-compare-1 ${
                      property.price?.value === 75000
                        ? "bg-light-green text-black opacity-80 px-3.5 py-0.4 inline-block"
                        : ""
                    }`}
                  >
                    ${property.price?.value || "N/A"}
                  </p>
                </div>

                <div className="flex justify-center items-center h-full text-lg 3xl:text-2xl">
                  <p
                    className={`text-center data-compare-2 ${
                      property.yearsBuilt?.value === 2020
                        ? "bg-light-green text-black opacity-80 px-3.5 py-0.4 inline-block"
                        : ""
                    }`}
                  >
                    {property.yearsBuilt?.value || "N/A"}
                  </p>
                </div>

                <div className="flex justify-center items-center h-full text-lg 3xl:text-2xl">
                  <p
                    className={`text-center data-compare-3 ${
                      property.squareFoot?.value === 3565
                        ? "bg-light-green text-black opacity-80 px-6 py-0.4 inline-block"
                        : ""
                    }`}
                  >
                    {property.squareFoot?.value || "N/A"}
                  </p>
                </div>

                <div className="flex justify-center items-center h-full text-lg 3xl:text-2xl">
                  <p
                    className={`text-center data-compare-4 ${
                      property.lotSize?.value === 8625
                        ? "bg-light-green text-black opacity-80 px-3.5 py-0.4 inline-block"
                        : ""
                    }`}
                  >
                    {property.lotSize?.value || "N/A"}
                  </p>
                </div>

                <div className="flex justify-center items-center h-full text-lg 3xl:text-2xl">
                  <p
                    className={`text-center data-compare-5 ${
                      property.bedrooms?.value === 5
                        ? "bg-light-green text-black opacity-80 px-7 py-0.4 inline-block"
                        : ""
                    }`}
                  >
                    {property.bedrooms?.value || "N/A"}
                  </p>
                </div>

                <div className="flex justify-center items-center h-full text-lg 3xl:text-2xl">
                  <p
                    className={`text-center data-compare-6 ${
                      property.officeDistance?.value === 4.5
                        ? "bg-light-green text-black opacity-80 px-7 py-0.4 inline-block"
                        : ""
                    }`}
                  >
                    {property.officeDistance?.value || "N/A"}
                  </p>
                </div>

                <div className="flex justify-center items-center h-full text-lg 3xl:text-2xl">
                  <p
                    className={`text-center data-compare-7 ${
                      property.bathrooms?.value === 4
                        ? "bg-light-green text-black opacity-80 px-7 py-0.4 inline-block"
                        : ""
                    }`}
                  >
                    {property.bathrooms?.value || "N/A"}
                  </p>
                </div>

                <div className="flex justify-center items-center h-full text-lg 3xl:text-2xl">
                  <p
                    className={`text-center data-compare-8 ${
                      property.schoolRating?.value === 8
                        ? "bg-light-green text-black opacity-80 px-8 py-0.4 inline-block"
                        : ""
                    }`}
                  >
                    {property.schoolRating?.value || "N/A"}
                  </p>
                </div>

                <div className="flex justify-center items-center h-full text-lg 3xl:text-2xl">
                  <p
                    className={`text-center data-compare-9 ${
                      property.schoolDistance?.value === 0.2
                        ? "bg-light-green text-black opacity-80 px-7 py-0.4 inline-block"
                        : ""
                    }`}
                  >
                    {property.schoolDistance?.value || "N/A"}
                  </p>
                </div>

                <div className="flex justify-center items-center h-full text-lg 3xl:text-2xl">
                  <p
                    className={`text-center data-compare-10 ${
                      property.swimmingPool?.value === 10
                        ? "bg-light-green text-black opacity-80 px-7 py-0.4 inline-block"
                        : ""
                    }`}
                  >
                    {property.swimmingPool?.value || "N/A"}
                  </p>
                </div>

                <p className="text-center data-compare-11 text-lg 3xl:text-2xl">
                  {property.dogPark?.value || "N/A"}
                </p>
              </div>
              {/* Total Number Only */}
              {isTotalVisible && (
                <div className="mt-4 font-bold text-center compare-final text-lg 3xl:text-2xl">
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
