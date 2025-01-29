import React, { useState } from "react";
import Sophia from "./../assets/sophia.png";
// import { FiPhone } from "react-icons/fi";
// import { LuSmartphone } from "react-icons/lu";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { FiX } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import townhouseIconPath from "./../assets/townhouse.svg";
import SwimmingPoolPath from "./../assets/SwimmingPool.svg";
import DogParkPath from "./../assets/DogPark.svg";
import PlayGroundPath from "./../assets/PlayGround.svg";
import OutsideViewPath from "./../assets/OutsideView.svg";
import SquareFootPath from "./../assets/SquareFoot.svg";
import GroceryStorePath from "./../assets/GroceryStore.svg";
import NearbyOfficePath from "./../assets/NearbyOffice.svg";
import BroadLotSizePath from "./../assets/BroadLotSize.svg";
import offerPath from "./../assets/Offer.svg";
import Leading from "./../assets/Leading.svg";
import PricePath from "./../assets/Price.svg";
import YearBuildPath from "./../assets/YearBuild.svg";
import SchoolRatingPath from "./../assets/SchoolRating.svg";
import AiIconPath from "./../assets/Ai.svg";
import Pencil from "./../assets/Pencil.svg";
import SmartPhone from "./../assets/SmartPhone.svg";
import Phone from "./../assets/Phone.svg";

function CardMain3() {
  const criteria = [
    {
      icon: <img src={PricePath} alt="priceIcon" />,
      label: "Price",
      match: "80% match",
      value: "$799,000",
    },
    {
      icon: <img src={SchoolRatingPath} alt="YearBuildIcon" />,
      label: "School rating",
      match: "75% match",
      value: "8",
    },
    {
      icon: <img src={YearBuildPath} alt="YearBuildIcon" />,
      label: "Year built",
      match: "56% match",
      value: "2023",
    },

    {
      icon: <img src={AiIconPath} alt="AiIcon" />,
      label: "Natural Light",
      match: "50% match",
      value: <span style={{ color: "red" }}>*Default</span>,
      // initialValue: <span style={{ color: 'red' }}>*Default</span>,
      isEditable: true,
      icon2: <img src={Pencil} alt="PencilIcon" />,
    },
    {
      icon: <img src={SquareFootPath} alt="SquareFoot" />,
      label: "Square foot",
      match: "91% match",
      value: "4000 sq ft",
    },
    {
      icon: <img src={SwimmingPoolPath} alt="SwimmingPool" />,
      label: "Swimming pool",
      match: "0% match",
      value: "No",
    },
  ];

  // Define data for each property offer for "Additional Aminities" section
  const propertyOffers = [
    {
      icon: <img src={townhouseIconPath} alt="Townhouse" />,
      label: "Townhouse",
      match: null,
      year: null,
    },
    {
      icon: <img src={SwimmingPoolPath} alt="SwimmingPool" />,
      label: "Swimming pool",
      match: null,
      year: null,
    },
    {
      icon: <img src={DogParkPath} alt="DogPark" />,
      label: "Dog park",
      match: null,
      year: null,
    },
    {
      icon: <img src={PlayGroundPath} alt="PlayGround" />,
      label: "Playground",
      match: null,
      year: null,
    },
    {
      icon: <img src={OutsideViewPath} alt="OutsideView" />,
      label: "Outside view",
      match: null,
      year: null,
    },
    {
      icon: <img src={SquareFootPath} alt="SquareFoot" />,
      label: "Square foot",
      match: null,
      year: null,
    },
    {
      icon: <img src={GroceryStorePath} alt="GroceryStore" />,
      label: "Nearby grocery store",
      match: null,
      year: null,
    },
    {
      icon: <img src={NearbyOfficePath} alt="NearbyOffice" />,
      label: "Nearby office area",
      match: null,
      year: null,
    },
    {
      icon: <img src={BroadLotSizePath} alt="LotSize" />,
      label: "Broad lot size",
      match: null,
      year: null,
    },
    {
      icon: <img src={offerPath} alt="Offer" />,
      label: "Offer",
      match: null,
      year: null,
    },
  ];
  const [showModalCriteria, setshowModalCriteria] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Toggle function for expanding/collapsing offer details
  const toggleOffer = (index) => {
    setExpandedOffers((prev) => {
      const newOffers = [...prev];
      newOffers[index] = !newOffers[index];
      return newOffers;
    });
  };

  const [showMore, setShowMore] = useState(false);

  const paragraph = `Enfort Homes presents ‘Swingline Collective’ a brand new 3 home cottage community featuring 3 beds, 2 baths, including a 1-car garage, covered patios gas stubbed for BBQ, and fully fenced yards with landscape lighting. Conveniently located in the South Rose Hill neighborhood, each home is thoughtfully designed and outfitted with smart home upgrades. Well-equipped kitchens include Thermador appliance package and quartz countertops. White Oak hardwood floors and 8’ doors on main. 9’ ceilings on both floors, custom organizers, A/C, and well-appointed primary suites with 5-piece spa baths and walk-in closets. Smart home features include iPad controls, Ring Elite doorbell, Cat6 wiring, and smart door lock.`;

  const formatText = (text) => {
    const words = text.split(" ");
    return words.map((word, index) =>
      (index + 1) % 11 === 0 ? `${word}\n` : `${word} `
    );
  };

  return (
    <div className="max-w-screen-2xl container mx-auto">
    <div className="flex justify-between  mx-10">
      {/* Left Side for Property Info */}
      <div className="w-1/2 p-2 shadow-lg relative left-28">
        <div className="flex items-center  mt-2">
          {/* Blue Dot */}
          <span className="w-2 h-2 bg-blue rounded-full"></span>

          {/* Text with Oval Shape */}
          <p className="text-xs font-medium uppercase px-3 py-1 rounded-full">
            On Sale: Active
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-2">
          {"2128 Creekbluff Ct, TX 75024, United States"}
        </h2>

        <div className="grid grid-cols-4 gap-2 mt-4 text-start">
          <div className="p-2 border border-set rounded-md">
            <p className="text-lg font-bold">{"$799,000"}</p>
            <p className="text-gray-500 text-sm">Est. $2,254/mo</p>
          </div>

          <div className="p-2 border border-set rounded-md">
            <p className="text-lg font-bold">{"2020"}</p>
            <p className="text-gray-500 text-sm">Year of build</p>
          </div>

          <div className="p-2 border border-set rounded-md">
            <p className="text-lg font-bold">{"2,600 sq.ft"}</p>
            <p className="text-gray-500 text-sm">{"8,625 sq ft lot size"}</p>
          </div>

          <div className="p-2 border border-set rounded-md">
            <p className="text-lg font-bold">{"Bedrooms 3"}</p>
            <p className="text-gray-500 text-sm">{"Bathrooms 2"}</p>
          </div>
        </div>
        {/* Horizontal Line */}
        <hr className="border-t border-set mt-6" />

        {/* How closely the property aligns with your criteria */}

        <div className="p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">
            How closely the property aligns with your criteria
          </h3>
          <div className="grid grid-cols-2 gap-7">
            {criteria.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                {/* Icon */}
                <div className="text-xl">{item.icon}</div>

                {/* Label and Match Info */}
                <div>
                  <p className="font-normal text-base">
                    {item.label}:{" "}
                    <span className="font-semibold text-sm">{item.match}</span>{" "}
                    <span className="text-set">|</span> &nbsp;
                    <span className="text-sm text-gray">{item.value}</span>
                  </p>
                </div>

                {/* Editable Indicator */}
                {item.isEditable && (
                  <button className="ml-auto text-pink-600 hover:text-pink-800"></button>
                )}
              </div>
            ))}
          </div>
          {/*  */}
          <button
            className="btn btn-outline px-3 py-1 text-xs rounded-full border-gray text-black mt-4 flex items-center hover:bg-set hover:text-black"
            onClick={() => setshowModalCriteria(true)}
          >
            <img src={Leading} alt="Leading" className="mr-2 text-gray" />
            Show all Criteria
          </button>
          {/* Modal */}
          {showModalCriteria && (
            <div className="modal modal-open">
              <div className="modal-box w-c24.5 max-w-full overflow-hidden h-c30.5 property-details-modal">
                <h2 className="font-bold text-lg">Criteria</h2>
                <hr className="border-t border-set mt-2" />

                <div className="grid grid-cols-1 gap-4 mt-4">
                  {criteria.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 space-y-5"
                    >
                      {/* Icon */}
                      <div className="text-lg">{item.icon}</div>

                      {/* Label and Match Info */}
                      <div>
                        <p className="font-normal text-sm relative bottom-2.5">
                          {item.label}:{" "}
                          <span className="font-semibold text-sm">
                            {item.match}
                          </span>{" "}
                          <span className="text-set">|</span> &nbsp;
                          <span className="text-sm text-gray">
                            {item.value}
                          </span>
                          <span className="ml-2">
                            <button>
                              {" "}
                              <img src={Pencil} alt="Townhouse" className="property-details-icons"/>
                            </button>
                          </span>
                        </p>
                        <hr className="border border-set w-full" />
                      </div>

                      {/* Editable Indicator */}
                      {item.isEditable && (
                        <button className="ml-auto text-pink-600 hover:text-pink-800"></button>
                      )}
                    </div>
                  ))}
                </div>

                {/* Close button */}
                <div className="modal-action">
                  <button
                    className="btn btn-sm  "
                    onClick={() => setshowModalCriteria(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Description Section */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Description</h3>
          <p
            className={`mt-2 text-gray-700 tracking-wide font-normal leading-relaxed ${
              !showMore ? "line-clamp-4" : ""
            }`}
          >
            {showMore
              ? formatText(paragraph)
              : formatText(paragraph).slice(0, 40).join(" ")}
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-blue mt-2.5 mb-2.5 inline-flex items-center  font-normal underline underline-offset-2"
            >
              {showMore ? "Show Less" : "Show More"}
              {showMore ? (
                <FaAngleUp className="ml-1" />
              ) : (
                <FaAngleDown className="ml-1" />
              )}
            </button>
          </p>
        </div>
        <hr className="border-t border-set mt-6" />

        {/* What Property offers */}

        <div className="Additional-Aminities-ka-container">
          <h2 className="text-xl font-semibold mb-2 mt-7">
            Additional amenities
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {propertyOffers.map((offer, index) => (
              <div
                key={index}
                className="flex items-center justify-start p-1.5 bg-gray-50 rounded-md shadow-sm"
              >
                <div className="flex items-center">
                  <span className="text-lg mr-3">{offer.icon}</span>
                  <p className="font-normal text-sm">{offer.label}</p>
                </div>

                <button
                  onClick={() => toggleOffer(index)}
                  className="ml-2 text-gray hover:text-black"
                >
                  <CiCirclePlus className="w-6 h-6 text-gray" />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="p-3 ">
          {/* Button to open modal */}
          <button
            className="btn btn-outline px-3 py-1 text-xs rounded-full border-gray text-black mt-4 flex items-center hover:bg-set hover:text-black"
            onClick={() => setShowModal(true)}
          >
            <img src={Leading} alt="Leading" className="mr-2 text-gray" />
            Show all amenities
          </button>

          {/* Modal */}
          {showModal && (
            <div className="modal modal-open">
              <div className="modal-box w-c30.5 max-w-full overflow-hidden h-c46 property-details-modal">
                <h2 className="font-bold text-lg">Amenities</h2>
                <hr className="border-t border-gray-300 mt-2" />

                <div className="grid grid-cols-1 gap-4 mt-4">
                  {propertyOffers.map((offer, index) => (
                    <div key={index}>
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">{offer.icon}</span>
                        <p className="font-normal text-sm">{offer.label}</p>

                        {/* + Icon Button */}
                        <button
                          className="text-gray-600 hover:text-black"
                          onClick={() => handleAddAmenity(offer)}
                        >
                          <CiCirclePlus className="w-6 h-6 text-gray property-details-icons" />
                        </button>
                      </div>
                      {/* Horizontal Line */}
                      <hr className="border-t border-set mt-1.5 mb-1" />
                    </div>
                  ))}
                </div>

                {/* Close button */}
                <div className="modal-action">
                  <button
                    className="btn btn-sm relative bottom-4 "
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* <hr className="border-t border-gray mt-3.5 mb-1" /> */}
      </div>

      {/* ********************************************************************************************************* */}
      {/* Right side  */}
      <div className="w-c27.5 h-c32.5 relative right-28 border border-set rounded-lg">
        <div className="flex flex-row items-center justify-start text-center mt-6 ml-5">
          <img
            className="w-16 h-16 rounded-full object-cover object-center transform transition-transform  hover:scale-150"
            src={Sophia}
            alt="Advisor"
          />

          <div className="ml-3">
            <h1 className="font-bold text-xl">Sophia Carter</h1>
            <p className="text-md text-gray">Trusted Advisor</p>
          </div>
        </div>

        {/* Inline Date Section */}
        <div className="ml-3 mt-5 ">
          <div className="stats bg-Advisor-card border rounded-md  ml-10 mt-2 mb-2 border-blue stat-cards">
            <div className="stat flex flex-col">
              <div className="stat-title text-blue">Arp</div>
              <div className="stat-value text-blue">21</div>
              <div className="stat-desc text-blue">Sunday</div>
            </div>
          </div>

          <div className="stats	border border-gray rounded-md ml-4 mt-2 stat-cards">
            <div className="stat ">
              <div className="stat-title ">Arp</div>
              <div className="stat-value text-gray">22</div>
              <div className="stat-desc">Monday</div>
            </div>
          </div>

          <div className="stats shadow border border-gray	 rounded-md ml-4 mt-2 stat-cards">
            <div className="stat ">
              <div className="stat-title ">Arp</div>
              <div className="stat-value text-gray">23</div>
              <div className="stat-desc">Tuesday</div>
            </div>
          </div>
        </div>

        <div className="w-80 h-10 ml-14 mt-3 flex rounded-xl shadow-lg overflow-hidden">
          {/* Left Side - Part 1 */}
          <button className="flex-1 bg-Advisor-card text-blue border border-blue outline outline-offset-2 outline-4 text-xs font-medium py-2 pl-4 pr-2 inline-flex items-center rounded-l-xl">
          &nbsp; &nbsp; {" "}
            <img className="border-blue" src={Phone} alt="priceIcon" /> &nbsp;
            Contact agent
          </button>

          {/* Right Side - Part 2 */}
          <button className="flex-1 bg-white text-gray border border-set text-xs font-medium py-2 pl-4 pr-2 inline-flex items-center rounded-r-xl">

           <img src={SmartPhone} alt="priceIcon" />  Tour via video chat
          </button>
        </div>

        {/* Contact and Action Buttons */}
        <div className="mt-6 space-y-3">
          <div className="flex justify-center">
            <button className="w-80 bg-black text-white font-medium py-2 rounded-full hover:bg-gray ">
              Request Showing
            </button>
          </div>
          <p className="text-center text-sm mt-2 text-gray ">
            It's free, cancel anytime
          </p>
          <p className="text-center text-sm text-gray">OR</p>
          <div className="flex justify-center">
            <button className="w-80 border border-gray-300 text-black font-medium py-2 rounded-full hover:bg-gray text-center">
              Start an Offer
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default CardMain3;
