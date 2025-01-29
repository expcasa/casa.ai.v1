import React, { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { RiVipCrownFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const PropertyCard = ({ property, index }) => {

  // const navigate = useNavigate();

  // const handleCardClick = () => {
  //   navigate(`/ProductDetail/${property.id}`);
  // };



  const [showBestMatch, setShowBestMatch] = useState(false);
  const [showTopMatch, setShowTopMatch] = useState(false);
  const [isLocalStorageEmpty, setIsLocalStorageEmpty] = useState(true);

  useEffect(() => {
    // Check if localStorage has any data
    const hasData = Object.keys(localStorage).length > 0;
    const priceIsChecked = localStorage.getItem("price_isChecked") === "true";
    const otherKeysChecked = Object.keys(localStorage).some(
      (key) => key == "price_isChecked" && localStorage.getItem(key) === "true"
    );

    setIsLocalStorageEmpty(!hasData);

    // Reset badges
    setShowBestMatch(false);
    setShowTopMatch(false);

    if (hasData) {
      // Only show markers if other keys are true or price_isChecked is not the only true key
      if (otherKeysChecked || !priceIsChecked) {
        // Logic for Top Match badge
        if (index === 0) {
          setShowTopMatch(true);
        }

        // Logic for Best Match badge
        if (index === 1 || index === 2) {
          setShowBestMatch(true);
        }
      }
    }
  }, [index]);

  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleOpenModal = (property) => {
    setSelectedProperty(property);
    document.getElementById("my_modal_4").showModal();
  };

  return (
    <div className="border pb-2 rounded-lg shadow-md bg-white relative border-set">
      <div className="relative">
        {/* Marker Section */}
        <div className="absolute top-3 right-3">
          <input
            type="checkbox"
            className="form-checkbox h-8 w-10 rounded-lg text-blue-600 border-gray-300 cursor-pointer"
          />
        </div>
        {!isLocalStorageEmpty && (
          <div className="absolute top-3 left-3 w-28 h-8 bg-white rounded-full">
            <button
              className="w-28 h-8 text-sm 3xl:w-36 3xl:h-10 3xl:text-lg font-semibold rounded-full bg-white flex items-center justify-center"
              onClick={() => handleOpenModal(property)}
            >
              {property.Percentage} Match
            </button>
          </div>
        )}
        <dialog id="my_modal_4" className="modal">
          {/* Modal Content */}
        </dialog>
      </div>

      {/* Updated Image Section */}
      <img
        src={property.Image.value}
        alt={property.name}
        className="w-full h-48 3xl:h-80 object-cover rounded-t-lg"
      />
      <div className="pl-2 pt-2 text-property-text">
      <Link to={"/ProductDetail"} className=" ">
        <div className="font-bold text-xl 3xl:text-2xl mb-1 text-black flex items-center">
          <Link to={"/ProductDetail"} className="hover:text-blue">
            ${property.price.value}
          </Link>
          {showTopMatch && (
            <span className="text-sm text-darkpurple ml-2 flex items-center rounded-full p-1 bg-lightpurple px-3 h-6">
              <RiVipCrownFill className="mr-1 text-base 3xl:text-lg" />
              <span className="text-xs 3xl:text-md">TOP MATCH</span>
            </span>
          )}
          {showBestMatch && (
            <span className="text-sm text-blue ml-2 flex items-center rounded-full p-1 bg-property-BMtxt px-3 h-6">
              <AiFillLike className="mr-1 text-base 3xl:text-lg" />
              <span className="text-xs 3xl:text-md">BEST MATCH</span>
            </span>
          )}
        </div>
        <p className="text-gray-700 text-sm mb-1 3xl:text-lg">
          <Link to={"/ProductDetail"} className="">
            {property.bedrooms.value} bds • {property.bathrooms.value} ba •{" "}
            {property.squareFoot.value} sqft
          </Link>
        </p>

        <p className="text-gray-600 text-sm 3xl:text-lg">
          <Link to={"/ProductDetail"} className="">
            {property.address}
          </Link>
        </p>
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
