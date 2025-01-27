import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import Pencil from "./../assets/Pencil.svg";
import Iicon from "./../assets/Iicon.svg";

function CardMain4() {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function for open/close behavior
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto">
      <div className="flex  p-4 mt-10">
        {/* Left Side Div */}
        <div className="w-1/2 relative left-32">
          {/* Property Details Heading */}

          <div className="join join-vertical w-full">
            {/* First Dropdown */}

            <div
              className={`collapse collapse-arrow join-item border border-base-300 ${
                activeIndex === 0 ? "collapse-close" : "collapse-open"
              }`}
            >
              <button
                onClick={() => handleToggle(0)}
                className="collapse-title text-lg font-bold w-full text-left"
              >
                <div className="mb-4">
                  <h2 className="text-2xl font-bold">Property Details</h2>
                </div>
                Price
              </button>
              <div className="collapse-content">
                {/* Price Details Grid */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex justify-start items-center">
                    <span className="font-normal">Price: </span>
                    <span className="ml-2">$800,000</span>
                    <CiCirclePlus className="w-6 h-6 text-gray ml-2" />
                  </div>
                  <div className="flex justify-start items-center">
                    <span className="font-normal">Property Taxes: </span>
                    <span className="ml-2">$406</span>
                    <CiCirclePlus className="w-6 h-6 text-gray ml-2" />
                  </div>
                  <div className="flex justify-start items-center">
                    <span className="font-normal">Price / sq. ft: </span>
                    <span className="ml-2">$5000</span>
                    <CiCirclePlus className="w-6 h-6 text-gray ml-2" />
                  </div>
                  <div className="flex justify-start items-center">
                    <span className="font-normal">Home Insurance: </span>
                    <span className="ml-2">$217</span>
                    <CiCirclePlus className="w-6 h-6 text-gray ml-2" />
                  </div>
                  <div className="flex justify-start items-center">
                    <span className="font-normal">HOA: </span>
                    <span className="font-semibold ml-2">Annual Fee: $500</span>
                    <CiCirclePlus className="w-6 h-6 text-gray ml-2" />
                  </div>
                  <div className="flex justify-start items-center">
                    <span className="font-normal">Mortgage Interest: </span>
                    <span className="ml-2">$3,418</span>
                    <CiCirclePlus className="w-6 h-6 text-gray ml-2" />
                  </div>
                  <div className="flex justify-start items-center">
                    <span className="font-normal">Est. Price / Month: </span>
                    <span className="ml-2">$2,500</span>
                    <CiCirclePlus className="w-6 h-6 text-gray ml-2" />
                  </div>
                  <div className="flex justify-start items-center">
                    <span className="font-normal">Utilities: </span>
                    <span className="ml-2 font-semibold">Not Included</span>
                    <CiCirclePlus className="w-6 h-6 text-gray ml-2" />
                  </div>
                </div>

                <hr className="border-t border-set mt-8 mb-4" />

                {/* Payment Calculator */}
                <div className="mt-6">
                  <h2 className="text-lg font-bold mb-4">Payment Calculator</h2>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-4 bg-ProductDetail rounded-lg flex flex-col items-start">
                      <div className="flex items-center justify-between w-full ">
                        <span className="text-lg font-bold">20% ($25,980)</span>
                        <button>
                          <img src={Pencil} alt="Townhouse" />
                        </button>
                      </div>
                      <span className="text-sm text-gray mt-2">
                        Downpayment
                      </span>
                    </div>
                    <div className="p-4 bg-ProductDetail rounded-lg flex flex-col items-start">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-lg font-bold">$129,000</span>
                        <button>
                          <img src={Pencil} alt="Townhouse" />
                        </button>
                      </div>
                      <span className="text-sm text-gray mt-2">Home Price</span>
                    </div>
                    <div className="p-4 bg-ProductDetail rounded-lg flex flex-col items-start">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-lg font-bold">30-yr, fixed</span>
                        <button>
                          <img src={Pencil} alt="PencilIcon" />
                        </button>
                      </div>
                      <span className="text-sm text-gray mt-2">
                        Loan details
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {/* Header Section */}
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">
                      $ 1200 per month{" "}
                      <img src={Iicon} alt="Iicon" className="inline-block" />
                    </h2>

                    <div className="flex items-center space-x-12">
                      <button className="text-sm text-gray-500 underline underline-offset-4">
                        Reset
                      </button>
                      <button className="bg-black text-set text-sm px-5 py-1.5 rounded-full hover:bg-gray">
                        Get pre-qualified
                      </button>
                    </div>
                  </div>

                  {/* Stacked Progress Bar */}
                  <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden mb-4">
                    <div className="flex h-full">
                      {[
                        {
                          label: "Principal and interest",
                          value: 800,
                          color: "#6B21A8",
                        },
                        { label: "HOA dues", value: 200, color: "#7E22CE" },
                        {
                          label: "Property taxes",
                          value: 150,
                          color: "#A855F7",
                        },
                        {
                          label: "Homeowners insurance",
                          value: 50,
                          color: "#D8B4FE",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          style={{
                            width: `${(item.value / 1200) * 100}%`,
                            backgroundColor: item.color,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Data Breakdown */}
                  <div className="space-y-4">
                    {[
                      {
                        label: "Principal and interest",
                        value: 800,
                        color: "#6B21A8",
                      },
                      { label: "HOA dues", value: 200, color: "#7E22CE" },
                      { label: "Property taxes", value: 150, color: "#A855F7" },
                      {
                        label: "Homeowners insurance",
                        value: 50,
                        color: "#D8B4FE",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center"
                      >
                        <div className="flex items-center space-x-2">
                          <span
                            style={{
                              backgroundColor: item.color,
                            }}
                            className="w-3 h-3 rounded-full"
                            title={item.label}
                          ></span>
                          <p className="text-sm text-gray-600">{item.label}</p>
                          {/* SVG Icon at the front */}
                          <img
                            src={Iicon}
                            alt="Iicon"
                            className="inline-block w-4 h-4"
                          />
                        </div>
                        <p className="text-sm font-bold">${item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Second Dropdown */}
            <div
              className={`collapse collapse-arrow join-item border border-base-300 ${
                activeIndex === 1 ? "collapse-open" : "collapse-close"
              }`}
            >
              <button
                onClick={() => handleToggle(1)}
                className="collapse-title text-lg font-bold w-full text-left"
              >
                Interior
              </button>
              <div className="collapse-content">
                <p>Interior details go here.</p>
              </div>
            </div>

            {/* Third Dropdown */}
            <div
              className={`collapse collapse-arrow join-item border border-base-300 ${
                activeIndex === 2 ? "collapse-open" : "collapse-close"
              }`}
            >
              <button
                onClick={() => handleToggle(2)}
                className="collapse-title text-lg font-bold w-full text-left"
              >
                Exterior
              </button>
              <div className="collapse-content">
                <p>Exterior details go here.</p>
              </div>
            </div>
            {/* Fourth Dropdown */}
            <div
              className={`collapse collapse-arrow join-item border border-base-300 ${
                activeIndex === 3 ? "collapse-open" : "collapse-close"
              }`}
            >
              <button
                onClick={() => handleToggle(3)}
                className="collapse-title text-lg font-bold w-full text-left"
              >
                Utilities
              </button>
              <div className="collapse-content">
                <p>Utilities details go here.</p>
              </div>
            </div>
            {/* Fifth Dropdown */}
            <div
              className={`collapse collapse-arrow join-item border border-base-300 ${
                activeIndex === 4 ? "collapse-open" : "collapse-close"
              }`}
            >
              <button
                onClick={() => handleToggle(4)}
                className="collapse-title text-lg font-bold w-full text-left"
              >
                Parking
              </button>
              <div className="collapse-content">
                <p>Parking details go here.</p>
              </div>
            </div>
            {/* Sixth Dropdown */}
            <div
              className={`collapse collapse-arrow join-item border border-base-300 ${
                activeIndex === 5 ? "collapse-open" : "collapse-close"
              }`}
            >
              <button
                onClick={() => handleToggle(5)}
                className="collapse-title text-lg font-bold w-full text-left"
              >
                Community
              </button>
              <div className="collapse-content">
                <p>Community details go here.</p>
              </div>
            </div>
            {/* Seventh Dropdown */}
            <div
              className={`collapse collapse-arrow join-item border border-base-300 ${
                activeIndex === 6 ? "collapse-open" : "collapse-close"
              }`}
            >
              <button
                onClick={() => handleToggle(6)}
                className="collapse-title text-lg font-bold w-full text-left"
              >
                Neighbourhood
              </button>
              <div className="collapse-content">
                <p>Neighbourhood details go here.</p>
              </div>
            </div>
            {/* Eighth Dropdown */}
            <div
              className={`collapse collapse-arrow join-item border border-base-300 ${
                activeIndex === 7 ? "collapse-open" : "collapse-close"
              }`}
            >
              <button
                onClick={() => handleToggle(7)}
                className="collapse-title text-lg font-bold w-full text-left"
              >
                Schools
              </button>
              <div className="collapse-content">
                <p>Schools details go here.</p>
              </div>
            </div>
            {/* Ninth Dropdown */}
            <div
              className={`collapse collapse-arrow join-item border border-base-300 ${
                activeIndex === 8 ? "collapse-open" : "collapse-close"
              }`}
            >
              <button
                onClick={() => handleToggle(8)}
                className="collapse-title text-lg font-bold w-full text-left"
              >
                Transit
              </button>
              <div className="collapse-content">
                <p>Transit details go here.</p>
              </div>
            </div>
            {/* Tenth Dropdown */}
            <div
              className={`collapse collapse-arrow join-item border border-base-300 ${
                activeIndex === 9 ? "collapse-open" : "collapse-close"
              }`}
            >
              <button
                onClick={() => handleToggle(9)}
                className="collapse-title text-lg font-bold w-full text-left"
              >
                Climate Risks
              </button>
              <div className="collapse-content">
                <p>Climate Risks details go here.</p>
              </div>
            </div>
            {/* Eleventh Dropdown */}
            <div
              className={`collapse collapse-arrow join-item border border-base-300 ${
                activeIndex === 10 ? "collapse-open" : "collapse-close"
              }`}
            >
              <button
                onClick={() => handleToggle(10)}
                className="collapse-title text-lg font-bold w-full text-left"
              >
                Other Details
              </button>
              <div className="collapse-content">
                <p>Other details go here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardMain4;
