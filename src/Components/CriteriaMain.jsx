import React, { useEffect, useState } from 'react';
import MapComponent from './MapComponent';
import PropertyCard from './PropertyCard';
import propertyData from '../propertyData.json';
import { Link } from 'react-router-dom';

const CriteriaMain = ({searchText}) => {
  const [filteredProperties, setFilteredProperties] = useState([]);
  const localStorageKey = "Square Foot_isChecked";
  const isChecked = localStorage.getItem(localStorageKey) === "true";

  
  useEffect(() => {
    
    // Check which criteria are checked in local storage
    const priceIsChecked = JSON.parse(localStorage.getItem("price_isChecked"));
    const yearsBuiltIsChecked = JSON.parse(localStorage.getItem("Years Built_isChecked"));
    const squareFootIsChecked = JSON.parse(localStorage.getItem("Square Foot_isChecked"));

    // Determine the slice of properties based on the criteria's priority
    let propertiesToRender = [];

    if (squareFootIsChecked) {
      // Render items 20-30 if Square Foot is checked
      propertiesToRender = propertyData.slice(20, 30).reverse();
    } else if (yearsBuiltIsChecked) {
      // Render items 10-20 if Years Built is checked
      propertiesToRender = propertyData.slice(10, 20).reverse();
    } else if (priceIsChecked) {
      // Render items 0-10 if Price is checked
      propertiesToRender = propertyData.slice(0, 10);
    } else {
      // Default to showing the first 10 if no criteria are checked
      propertiesToRender = propertyData.slice(30,40).reverse();
    }

    setFilteredProperties(propertiesToRender);
  }, []);

  return (
    <div className="flex w-full h-screen">
      {/* Left side: Map */}
      <div className="w-3/5 h-4/5 3xl:h-full criteriaPage">
        <MapComponent />
      </div>

      {/* Right side: Cards */}
      <div className="w-2/5 h-full overflow-y-auto p-4">
        {/* Address Header */}
        <div className="flex flex-row mb-3.5">
        <h1 className="text-2xl font-bold text-inter 3xl:text-2xl">
            {searchText || "Address"} {/* Display search text */}
          </h1>
          <Link to={"/Comparison"}>
          <button className="absolute right-8 rounded-full bg-property-compare text-white px-5 py-1.5 hover:bg-black 3xl:mr-10 3xl:w-40 3xl:h-15 3xl:text-2xl ">
            Compare
          </button>
          </Link>
        </div>
        
        {/* Total Matches Header */}
        <h1 className="text-md font-sm text-inter mb-3 text-gray 3xl:text-xl">
          {filteredProperties.length}+ houses
        </h1>
        
        {/* Render only the filtered properties */}
        <div className="grid grid-cols-1 sm:grid-cols-2 3xl:grid-cols-3 gap-4">
  {filteredProperties.map((property, index) => (
    <PropertyCard
      key={property.id}
      property={property}
      index={index} // Show badge only for the first two cards if isChecked is true
    />

  ))}
</div>
      </div>
    </div>
  );
};

export default CriteriaMain;
