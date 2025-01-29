import React, { useEffect, useState } from "react";
import Map from "/Map.png";
import { RiVipCrownFill } from "react-icons/ri";
import propertyData from "../propertyData.json";

// Generate random positions
const generateRandomPosition = () => ({
  top: `${Math.floor(Math.random() * 75) + 10}%`,
  left: `${Math.floor(Math.random() * 55) + 10}%`,
});
const generateRandomPositionBlue = () => ({
  top: `${Math.floor(Math.random() * 45) + 10}%`,
  left: `${Math.floor(Math.random() * 20) + 10}%`,
});
const generateRandomPositionPurple = () => ({
  top: `${Math.floor(Math.random() * 49) + 10}%`,
  left: `${Math.floor(Math.random() * 27) + 10}%`,
});

const MapComponent = ({ markerType }) => {
  const [showBlueMarkers, setShowBlueMarkers] = useState(false);
  const [showPurpleMarkers, setShowPurpleMarkers] = useState(false);

  const [percentageMarkerBlack, setPercentageMarkerBlack] = useState([]);
  const [percentageMarkerBlue, setPercentageMarkerBlue] = useState([]);
  const [percentageMarkerPurple, setPercentageMarkerPurple] = useState([]);

  const [usePrices, setUsePrices] = useState(true); // Track whether to show prices or percentages

  useEffect(() => {
    // Check for applied filters
    const filtersApplied =
      localStorage.getItem("price_isChecked") ||
      localStorage.getItem("Years Built_isChecked") ||
      localStorage.getItem("Square Foot_isChecked");

    setUsePrices(!filtersApplied); // Show prices by default if no filters are applied

    const priceIsChecked = JSON.parse(localStorage.getItem("price_isChecked"));
    const yearsBuiltIsChecked = JSON.parse(
      localStorage.getItem("Years Built_isChecked")
    );
    const squareFootIsChecked = JSON.parse(
      localStorage.getItem("Square Foot_isChecked")
    );

    let properties = [];

    if (squareFootIsChecked) {
      properties = propertyData.slice(20, 30);
    } else if (yearsBuiltIsChecked) {
      properties = propertyData.slice(10, 20);
    } else if (priceIsChecked) {
      properties = propertyData.slice(0, 10);
    } else {
      properties = propertyData.slice(30, 41);
    }

    const formatPriceWithK = (price) => {
      const priceValue = Math.floor(price / 1000); // Get first three digits
      return `${priceValue}k`;
    };
  
    // Update marker arrays
    setPercentageMarkerBlack(
      properties.slice(0, 10).map((prop) => ({
        ...generateRandomPosition(),
        label: usePrices
          ? `$${formatPriceWithK(prop.price.value)}`
          : prop.Percentage, // Show formatted price or percentages
      }))
    );
  
    setPercentageMarkerBlue(
      properties.slice(7, 9).map((prop) => ({
        ...generateRandomPositionBlue(),
        label: usePrices
          ? `$${formatPriceWithK(prop.price.value)}`
          : prop.Percentage,
      }))
    );
  
    setPercentageMarkerPurple(
      properties.slice(9, 10).map((prop) => ({
        ...generateRandomPositionPurple(),
        label: usePrices
          ? `$${formatPriceWithK(prop.price.value)}`
          : prop.Percentage,
      }))
    );

    setShowBlueMarkers(!!priceIsChecked);
    setShowPurpleMarkers(!!priceIsChecked);
  }, [usePrices]); // Recalculate when `usePrices` changes

  return (
    <div className="left-container relative criteria-image">
      <img
        src={Map}
        alt="Map view"
        className="w-screen h-full object-cover"
      />
      {/* Render black markers */}
      {percentageMarkerBlack.map((pointer, index) => (
        <div
          key={index}
          className="text-xs absolute flex marker-text items-center justify-center px-2 py-3 w-14 h-0.5 bg-black text-white rounded-full 3xl:w-20 3xl:h-10 3xl:text-lg"
          style={{ top: pointer.top, left: pointer.left }}
        >
          {pointer.label.toLocaleString()}
        </div>
      ))}
      {/* Conditionally render blue markers */}
      {showBlueMarkers &&
        percentageMarkerBlue.map((pointer, index) => (
          <div
            key={index}
            className="text-xs absolute flex marker-text items-center justify-center px-1 py-3 w-14 h-0.5 bg-blue text-white rounded-full 3xl:w-20 3xl:h-10 3xl:text-xl"
            style={{ top: pointer.top, left: pointer.left }}
          >
            {pointer.label.toLocaleString()}
          </div>
        ))}
      {/* Conditionally render purple markers */}
      {showPurpleMarkers &&
        percentageMarkerPurple.map((pointer, index) => (
          <div
            key={index}
            className="text-xs absolute flex marker-text items-center justify-center px-2 py-3 w-20 h-0.5 bg-property-TMbg text-white rounded-full 3xl:w-c10 3xl:h-10 3xl:text-xl"
            style={{ top: pointer.top, left: pointer.left }}
          >
            <RiVipCrownFill className="text-sm 3xl:text-xl" />
            &nbsp;
            {pointer.label.toLocaleString()}
          </div>
        ))}
    </div>
  );
};

export default MapComponent;
