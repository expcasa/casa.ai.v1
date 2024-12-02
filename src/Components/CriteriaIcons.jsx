import React, { useState, useRef } from "react";
import { ButtonGroup, Button } from "@material-tailwind/react";
import CriteriaFilter from "./CriteriaFilter";
import CriteriaFilter2 from "./CriteriaFilter2";
import CriteriaFilter3 from "./CriteriaFilter3";
import CriteriaFilter4 from "./CriteriaFilter4";
import CriteriaFilter5 from "./CriteriaFilter5";
import CriteriaFilter6 from "./CriteriaFilter6";
import CriteriaFilter7 from "./CriteriaFilter7";

export const ButtonGroupVariants = () => {
  const [selectedCriteria, setSelectedCriteria] = useState(null);
  const buttonGroupRef = useRef(null);
  
  const [formPosition, setFormPosition] = useState(null);
  const priceButtonRef = useRef(null);
  const yearBuiltButtonRef = useRef(null);
  const squareFootButtonRef = useRef(null);
  const bedroomsButtonRef = useRef(null);
  const bathroomsButtonRef = useRef(null);
  const schoolRatingButtonRef = useRef(null);
  const officeDistanceButtonRef = useRef(null);
  const poolButtonRef = useRef(null);
  const dogParkButtonRef = useRef(null);
  const exteriorLookButtonRef = useRef(null);
  const garageButtonRef = useRef(null);
  const sunLightButtonRef = useRef(null);
  const outsideViewButtonRef = useRef(null);
  const storeButtonRef = useRef(null);
  const childrenActivityButtonRef = useRef(null);
  const collegeButtonRef = useRef(null);

  const handleFilterButtonClick = (criteria) => {
    if (criteria === "price" && priceButtonRef.current) {
      // Get the button's position
      const rect = priceButtonRef.current.getBoundingClientRect();

      // Calculate the position to render the form
      setFormPosition({
        top: rect.bottom + window.scrollY-40, // Position below the button
        left: rect.left + rect.width / 2 - 40, // Centered horizontally
      });
    }
    if (criteria === "Years Built" && yearBuiltButtonRef.current) {
      // Get the button's position
      const rect = yearBuiltButtonRef.current.getBoundingClientRect();

      // Calculate the position to render the form
      setFormPosition({
        top: rect.bottom + window.scrollY-40, // Position below the button
        left: rect.left + rect.width / 2 - 40, // Centered horizontally
      });
    }
    if (criteria === "Square Foot" && squareFootButtonRef.current) {
      // Get the button's position
      const rect = squareFootButtonRef.current.getBoundingClientRect();

      // Calculate the position to render the form
      setFormPosition({
        top: rect.bottom + window.scrollY-40, // Position below the button
        left: rect.left + rect.width / 2 - 40, // Centered horizontally
      });
    }
    if (criteria === "Bedrooms" && bedroomsButtonRef.current) {
      // Get the button's position
      const rect = bedroomsButtonRef.current.getBoundingClientRect();

      // Calculate the position to render the form
      setFormPosition({
        top: rect.bottom + window.scrollY-40, // Position below the button
        left: rect.left + rect.width / 2 - 40, // Centered horizontally
      });
    }
    if (criteria === "Bathroom" && bathroomsButtonRef.current) {
      // Get the button's position
      const rect = bathroomsButtonRef.current.getBoundingClientRect();

      // Calculate the position to render the form
      setFormPosition({
        top: rect.bottom + window.scrollY-40, // Position below the button
        left: rect.left + rect.width / 2 - 40, // Centered horizontally
      });
    }
    if (criteria === "School Rating" && schoolRatingButtonRef.current) {
      // Get the button's position
      const rect = schoolRatingButtonRef.current.getBoundingClientRect();

      // Calculate the position to render the form
      setFormPosition({
        top: rect.bottom + window.scrollY-40, // Position below the button
        left: rect.left + rect.width / 2 - 40, // Centered horizontally
      });
    }
    if (criteria === "Office Distance" && officeDistanceButtonRef.current) {
      // Get the button's position
      const rect = officeDistanceButtonRef.current.getBoundingClientRect();

      // Calculate the position to render the form
      setFormPosition({
        top: rect.bottom + window.scrollY-40, // Position below the button
        left: rect.left + rect.width / 2 - 40, // Centered horizontally
      });
    }
    if (criteria === "Swimming Pool" && poolButtonRef.current) {
      // Get the button's position
      const rect = poolButtonRef.current.getBoundingClientRect();

      // Calculate the position to render the form
      setFormPosition({
        top: rect.bottom + window.scrollY-40, // Position below the button
        left: rect.left + rect.width / 2 - 40, // Centered horizontally
      });
    }
    if (criteria === "Dog Park" && dogParkButtonRef.current) {
      // Get the button's position
      const rect = dogParkButtonRef.current.getBoundingClientRect();

      // Calculate the position to render the form
      setFormPosition({
        top: rect.bottom + window.scrollY-40, // Position below the button
        left: rect.left + rect.width / 2 - 40, // Centered horizontally
      });
    }
    if (criteria === "Exterior Look" && exteriorLookButtonRef.current) {
      // Get the button's position
      const rect = exteriorLookButtonRef.current.getBoundingClientRect();

      // Calculate the position to render the form
      setFormPosition({
        top: rect.bottom + window.scrollY-40, // Position below the button
        left: rect.left + rect.width / 2 - 40, // Centered horizontally
      });
    }
    if (criteria === "Garage" && garageButtonRef.current) {
      // Get the button's position
      const rect = garageButtonRef.current.getBoundingClientRect();

      // Calculate the position to render the form
      setFormPosition({
        top: rect.bottom + window.scrollY-40, // Position below the button
        left: rect.left + rect.width / 2 - 40, // Centered horizontally
      });
    }
    if (criteria === "Sun Light" && sunLightButtonRef.current) {
      // Get the button's position
      const rect = sunLightButtonRef.current.getBoundingClientRect();

      // Calculate the position to render the form
      setFormPosition({
        top: rect.bottom + window.scrollY-40, // Position below the button
        left: rect.left + rect.width / 2 - 40, // Centered horizontally
      });
    }
    if (criteria === "Outside View" && outsideViewButtonRef.current) {
      // Get the button's position
      const rect = outsideViewButtonRef.current.getBoundingClientRect();

      // Calculate the position to render the form
      setFormPosition({
        top: rect.bottom + window.scrollY-40, // Position below the button
        left: rect.left + rect.width / 2 - 40, // Centered horizontally
      });
    }
    if (criteria === "College" && collegeButtonRef.current) {
      // Get the button's position
      const rect = collegeButtonRef.current.getBoundingClientRect();

      // Calculate the position to render the form
      setFormPosition({
        top: rect.bottom + window.scrollY-40, // Position below the button
        left: rect.left + rect.width / 2 - 40, // Centered horizontally
      });
    }
    if (criteria === "Grocery Store" && storeButtonRef.current) {
      // Get the button's position
      const rect = storeButtonRef.current.getBoundingClientRect();

      // Calculate the position to render the form
      setFormPosition({
        top: rect.bottom + window.scrollY-40, // Position below the button
        left: rect.left + rect.width / 2 - 40, // Centered horizontally
      });
    }
    if (criteria === "Children Activity" && childrenActivityButtonRef.current) {
      // Get the button's position
      const rect = childrenActivityButtonRef.current.getBoundingClientRect();

      // Calculate the position to render the form
      setFormPosition({
        top: rect.bottom + window.scrollY-40, // Position below the button
        left: rect.left + rect.width / 2 - 40, // Centered horizontally
      });
    }
    setSelectedCriteria((prev) => (prev === criteria ? null : criteria));
  };

  // const handleFilterButtonClick = (criteria) => {
  //   setSelectedCriteria((prev) => (prev === criteria ? null : criteria));
  // };

  const handleApplyFilters = (filters) => {
    console.log("Filters applied:", filters);
    setSelectedCriteria(null);
  };

  const getButtonClass = (criteria) => {
    const priority = localStorage.getItem(`${criteria}_dotColor`);
    if (priority === "Must") return 'bg-must-active';
    else if (priority === "Should") return 'bg-Should-active';
    else if (priority === "Good") return 'bg-Good-active';
    return '';
  };

  const getDotColor = (criteria) => {
    const priority = localStorage.getItem(`${criteria}_dotColor`);
    if (priority === "Must") return '#FB6464';
    else if (priority === "Should") return '#FEA31B';
    else if (priority === "Good") return '#4176FF';
    return 'transparent';
  };

  // Scroll handling functions
  const scrollLeft = () => {
    if (buttonGroupRef.current) {
      buttonGroupRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (buttonGroupRef.current) {
      buttonGroupRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full mt-10 flex flex-col items-center pt-8 shadow-lg z-1">
      {/* Left Scroll Arrow */}
      <div className="fade-left absolute left-0 top-0 bottom-0 w-16 pointer-events-none z-10"></div>
      <button
        className="border-2 m-2 absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full hover:bg-gray-300"
        onClick={scrollLeft}
      >
        <img src="./public/leftArrow.svg" alt="" className="3xl:w-8 3xl:h-8"/>
      </button>



      {/* Button Group Container */}
      <div ref={buttonGroupRef} className="flex overflow-x-auto w-full px-10 mx-10 space-x-8 scroll-hidden">
        <ButtonGroup
          className="flex 1xl:w-full 1xl:justify-evenly gap-4 whitespace-nowrap px-4"
          variant="text"
        >
          {/* Buttons */}
          <Button
          ref={priceButtonRef}
            className="flex-shrink-0 relative flex flex-col items-center font-normal text-inter button-text text-base 3xl:text-2xl"
            onClick={() => handleFilterButtonClick("price")}
          >
            <div className="relative flex flex-col items-center">
              <span
                className="absolute -top-2 -right-2 w-2 h-2 rounded-full button-dot 3xl:w-4 3xl:h-4"
                style={{ backgroundColor: getDotColor("price") }}
              />
              <img
                src="/Criteria icons (1).svg"
                alt="Price Icon"
                className="button-icon w-6 h-6 3xl:w-10 3xl:h-10"
              />
            </div>
            <span>Price</span>
          </Button>

        <Button
          ref={yearBuiltButtonRef}
          className="flex-shrink-0 relative flex flex-col items-center font-normal text-inter button-text text-base 3xl:text-2xl"
          onClick={() => handleFilterButtonClick("Years Built")}
        >
          <div className="relative flex flex-col items-center">
            <span
              className="absolute -top-2 -right-3 w-2 h-2 rounded-full button-dot 3xl:w-4 3xl:h-4"
              style={{ backgroundColor: getDotColor("Years Built") }}
            />
            <img
              src="/Vector.svg"
              alt="Top Left"
              className="button-icon w-6 h-6 3xl:w-10 3xl:h-10" 
            />
          </div> 
          Year Built
        </Button>

        <Button
          ref={squareFootButtonRef}
          className="flex-shrink-0 relative flex flex-col items-center font-normal text-inter button-text text-base 3xl:text-2xl"
          onClick={() => handleFilterButtonClick("Square Foot")}
        >
          <div className="relative flex flex-col items-center">
            <span
              className="absolute -top-2 -right-2 w-2 h-2 rounded-full button-dot 3xl:w-4 3xl:h-4"
              style={{ backgroundColor: getDotColor("Square Foot") }}
            />
            <img
              src="/Rectangle 73.svg"
              alt="Top Left"
              className="button-icon w-6 h-6 3xl:w-10 3xl:h-10" 
            />

          </div>
          Square Foot
        </Button>
        

        <Button
         ref={bedroomsButtonRef}
          className="flex-shrink-0 relative flex flex-col items-center font-normal text-inter button-text text-base 3xl:text-2xl"
          onClick={() => handleFilterButtonClick("Bedrooms")}
        >
          <div className="relative flex flex-col items-center">
            <span
              className="absolute -top-2 -right-2 w-2 h-2 rounded-full button-dot 3xl:w-4 3xl:h-4"
              style={{ backgroundColor: getDotColor("Bedrooms") }}
            />
            <img
              src="/Criteria icons (6).svg"
              alt="Top Left"
              className="button-icon w-6 h-6 3xl:w-10 3xl:h-10" 
            />
          </div>
          Bedrooms
        </Button>

        <Button
         ref={bathroomsButtonRef}
          className="flex-shrink-0 relative flex flex-col items-center font-normal text-inter button-text text-base 3xl:text-2xl"
          onClick={() => handleFilterButtonClick("Bathroom")}
        >
          <div className="relative flex flex-col items-center">
            <span
              className="absolute -top-2 -right-2 w-2 h-2 rounded-full button-dot 3xl:w-4 3xl:h-4"
              style={{ backgroundColor: getDotColor("Bathroom") }}
            />
            <img
              src="/Criteria icons (8).svg"
              alt="Top Left"
              className="button-icon w-6 h-6 3xl:w-10 3xl:h-10" 
            />
          </div>
          Bathroom
        </Button>

        {/* <Button
          className={`relative font-normal text-inter`}
          onClick={() => handleFilterButtonClick("Lot Size")}
        >
          <span
            className="absolute top-2 right-0 w-2 h-2 rounded-full"
            style={{ backgroundColor: getDotColor("Lot Size") }}
          />
          <img
            src="/Criteria icons (2).svg"
            alt="Top Left"
            className="mb-2 ml-3" 
          />
          Lot Size
        </Button> */}

        <Button
         ref={schoolRatingButtonRef}
          className="flex-shrink-0 relative flex flex-col items-center font-normal text-inter button-text text-base 3xl:text-2xl"
          onClick={() => handleFilterButtonClick("School Rating")}
        >
          <div className="relative flex flex-col items-center">
            <span
              className="absolute -top-2 -right-2 w-2 h-2 rounded-full button-dot 3xl:w-4 3xl:h-4"
              style={{ backgroundColor: getDotColor("School Rating") }}
            />
            <img
              src="/Criteria icons (3).svg"
              alt="Top Left"
              className="button-icon w-6 h-6 3xl:w-10 3xl:h-10" 
            />
          </div>
          School Rating
        </Button>

        {/* <Button
          className={`relative font-normal text-inter`}
          onClick={() => handleFilterButtonClick("School Distance")}
        >
          <span
            className="absolute top-2 right-4 w-2 h-2 rounded-full"
            style={{ backgroundColor: getDotColor("School Distance") }}
          />
          <img
            src="/Criteria icons (4).svg"
            alt="Top Left"
            className="mb-2 ml-8" 
          />
          School Distance
        </Button> */}

        <Button
         ref={officeDistanceButtonRef}
          className="flex-shrink-0 relative flex flex-col items-center font-normal text-inter button-text text-base 3xl:text-2xl"
          onClick={() => handleFilterButtonClick("Office Distance")}
        >
          <div className="relative flex flex-col items-center">
            <span
              className="absolute -top-2 -right-2 w-2 h-2 rounded-full button-dot 3xl:w-4 3xl:h-4"
              style={{ backgroundColor: getDotColor("Office Distance") }}
            />
            <img
              src="/Criteria icons (7).svg"
              alt="Top Left"
              className="button-icon w-6 h-6 3xl:w-10 3xl:h-10" 
            />
          </div>
          Office Distance
        </Button>

        <Button
         ref={poolButtonRef}
          className="flex-shrink-0 relative flex flex-col items-center font-normal text-inter button-text text-base 3xl:text-2xl"
          onClick={() => handleFilterButtonClick("Swimming Pool")}
        >
          <div className="relative flex flex-col items-center">
            <span
              className="absolute -top-2 -right-2 w-2 h-2 rounded-full button-dot 3xl:w-4 3xl:h-4"
              style={{ backgroundColor: getDotColor("Swimming Pool") }}
            />
            <img
              src="/Criteria icons (5).svg"
              alt="Top Left"
              className="button-icon w-6 h-6 3xl:w-10 3xl:h-10" 
            />
          </div>
          Swimming Pool
        </Button>

        <Button
          ref={dogParkButtonRef}
          className="flex-shrink-0 relative flex flex-col items-center font-normal text-inter button-text text-base 3xl:text-2xl"
          onClick={() => handleFilterButtonClick("Dog Park")}
        >
          <div className="relative flex flex-col items-center">
            <span
              className="absolute -top-2 -right-2 w-2 h-2 rounded-full button-dot 3xl:w-4 3xl:h-4"
              style={{ backgroundColor: getDotColor("Dog Park") }}
            />
            <img
              src="/Criteria icons (9).svg"
              alt="Top Left"
              className="button-icon w-6 h-6 3xl:w-10 3xl:h-10" 
            />
          </div>
          Dog Park
        </Button>

        <Button 
        ref={exteriorLookButtonRef}
          className="flex-shrink-0 relative flex flex-col items-center font-normal text-inter button-text text-base 3xl:text-2xl"
          onClick={() => handleFilterButtonClick("Exterior Look")}>
          <img
            src="/Criteria icons (10).svg"
            alt="Top Left"
            className="button-icon w-6 h-6 3xl:w-10 3xl:h-10" 
          />
          Exterior Look
        </Button>

        <Button
         ref={garageButtonRef}
          className="flex-shrink-0 relative flex flex-col items-center font-normal text-inter button-text text-base 3xl:text-2xl"
          onClick={() => handleFilterButtonClick("Garage")}
        >
          <img
            src="/Criteria icons (15).svg"
            alt="Top Left"
            className="button-icon w-6 h-6 3xl:w-10 3xl:h-10" 
          />
          Garage
        </Button>

        <Button 
         ref={sunLightButtonRef}
          className="flex-shrink-0 relative flex flex-col items-center font-normal text-inter button-text text-base 3xl:text-2xl"
          onClick={() => handleFilterButtonClick("Sun Light")}>
          <img
            src="/Criteria icons (11).svg"
            alt="Top Left"
            className="button-icon w-6 h-6 3xl:w-10 3xl:h-10" 
          />
          Sun Light
        </Button>

        <Button 
         ref={outsideViewButtonRef}
          className="flex-shrink-0 relative flex flex-col items-center font-normal text-inter button-text text-base 3xl:text-2xl"
          onClick={() => handleFilterButtonClick("Outside View")}>
          <img
            src="/Criteria icons (12).svg"
            alt="Top Left"
            className="button-icon w-6 h-6 3xl:w-10 3xl:h-10" 
          />
          Outside View
        </Button>

        <Button 
         ref={storeButtonRef}
          className="flex-shrink-0 relative flex flex-col items-center font-normal text-inter button-text text-base 3xl:text-2xl"
          onClick={() => handleFilterButtonClick("Grocery Store")}>
          <img
            src="/Criteria icons (13).svg"
            alt="Top Left"
            className="button-icon w-6 h-6 3xl:w-10 3xl:h-10" 
          />
          Grocery Store
        </Button>

        <Button 
         ref={childrenActivityButtonRef}
          className="flex-shrink-0 relative flex flex-col items-center font-normal text-inter button-text text-base 3xl:text-2xl"
          onClick={() => handleFilterButtonClick("Children Activity")}>
          <img
            src="/Criteria icons (14).svg"
            alt="Top Left"
            className="button-icon w-6 h-6 3xl:w-10 3xl:h-10" 
          />
          Children Activity
        </Button>

        <Button 
         ref={collegeButtonRef}
          className="flex-shrink-0 relative flex flex-col items-center font-normal text-inter button-text text-base 3xl:text-2xl"
          onClick={() => handleFilterButtonClick("College")}>
          <img
            src="/Criteria icons (15).svg"
            alt="Top Left"
            className="button-icon w-6 h-6 3xl:w-10 3xl:h-10"  
          />
          College
        </Button>

          {/* Add other buttons following the same pattern */}
          {/* Replace each CriteriaFilter with the relevant CriteriaFilter component */}

        </ButtonGroup>
      </div>


      <div className="fade-right absolute right-0 top-0 bottom-0 w-16 pointer-events-none z-10"></div>
      {/* Right Scroll Arrow */}
      <button
        className="absolute right-0 top-1/2 m-2 transform border-2 -translate-y-1/2 z-10 p-2 bg-white rounded-full hover:bg-gray-300"
        onClick={scrollRight}
      >
        <img src="./public/rightArrow.svg" alt="" className="3xl:w-8 3xl:h-8"/>
      </button>

      {/* Render the selected criteria filter */}
      {selectedCriteria === "price" && formPosition && (
        <div
          style={{
            position: "absolute",
            top: `${formPosition.top}px`,
            left: `${formPosition.left}px`,
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}
        >
          <CriteriaFilter
            selectedCriteria={selectedCriteria}
            onApplyFilters={handleApplyFilters}
          />
        </div>
      )}
      {selectedCriteria === "Years Built" && formPosition && (
        <div
          style={{
            position: "absolute",
            top: `${formPosition.top}px`,
            left: `${formPosition.left}px`,
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}
        >
          <CriteriaFilter
            selectedCriteria={selectedCriteria}
            onApplyFilters={handleApplyFilters}
          />
        </div>
      )}

      {/* Add additional criteria filters as needed */}
      {/* {selectedCriteria === "Years Built" && (
        <CriteriaFilter
          selectedCriteria={selectedCriteria} 
          onApplyFilters={handleApplyFilters}
          className={"-ml-c40"}
        />
      )} */}
      {selectedCriteria === "Square Foot" && formPosition && (
        <div
          style={{
            position: "absolute",
            top: `${formPosition.top}px`,
            left: `${formPosition.left}px`,
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}
        >
        <CriteriaFilter
          selectedCriteria={selectedCriteria} 
          onApplyFilters={handleApplyFilters}
        />
        </div>
      )}
      {selectedCriteria === "Bedrooms" && formPosition && (
        <div
          style={{
            position: "absolute",
            top: `${formPosition.top}px`,
            left: `${formPosition.left}px`,
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}
        >
        <CriteriaFilter3
        selectedCriteria={selectedCriteria}
        onApplyFilters={handleApplyFilters}
        />
        </div>
      )}
      
      {selectedCriteria === "Bathroom" && formPosition && (
        <div
          style={{
            position: "absolute",
            top: `${formPosition.top}px`,
            left: `${formPosition.left}px`,
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}
        >
        <CriteriaFilter3
          selectedCriteria={selectedCriteria}
          onApplyFilters={handleApplyFilters}
        />
        </div>
      )}
      {/* {selectedCriteria === "Lot Size" && (
        <CriteriaFilter
          selectedCriteria={selectedCriteria} 
          onApplyFilters={handleApplyFilters}
          className="-ml-c30"
        />
      )} */}
      {selectedCriteria === "School Rating" && formPosition && (
        <div
          style={{
            position: "absolute",
            top: `${formPosition.top}px`,
            left: `${formPosition.left}px`,
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}
        >
          <CriteriaFilter7
            selectedCriteria={selectedCriteria} 
            onApplyFilters={handleApplyFilters}
          />
        </div>
      )}
      {/* {selectedCriteria === "School Distance" && (
        <CriteriaFilter6
          selectedCriteria={selectedCriteria} 
          onApplyFilters={handleApplyFilters}
          className="-ml-c20"
        />
      )} */}
      {selectedCriteria === "Office Distance" && formPosition && (
        <div
          style={{
            position: "absolute",
            top: `${formPosition.top}px`,
            left: `${formPosition.left}px`,
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}
        >
        <CriteriaFilter6
          selectedCriteria={selectedCriteria} 
          onApplyFilters={handleApplyFilters}
        />
        </div>
      )}
      
      {selectedCriteria === "Swimming Pool" && formPosition && (
        <div
          style={{
            position: "absolute",
            top: `${formPosition.top}px`,
            left: `${formPosition.left}px`,
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}
        >
        <CriteriaFilter2
        selectedCriteria={selectedCriteria}
        onApplyFilters={handleApplyFilters}
        />
        </div>
      )}
      
      {selectedCriteria === "Dog Park" && formPosition && (
        <div
          style={{
            position: "absolute",
            top: `${formPosition.top}px`,
            left: `${formPosition.left}px`,
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}
        >
        <CriteriaFilter2
          selectedCriteria={selectedCriteria}
          onApplyFilters={handleApplyFilters}
        />
        </div>
      )}
      {selectedCriteria === "Exterior Look" && (
        <div
        style={{
            position: "absolute",
            top: `${formPosition.top}px`,
            left: `${formPosition.left}px`,
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}>

          <CriteriaFilter5
            selectedCriteria={selectedCriteria}
            onApplyFilters={handleApplyFilters}
          />
        </div>
      )}
      {selectedCriteria === "Garage" && (
         <div
        style={{
            position: "absolute",
            top: `${formPosition.top}px`,
            left: `${formPosition.left}px`,
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}>
            <CriteriaFilter5
              selectedCriteria={selectedCriteria}
              onApplyFilters={handleApplyFilters}
            />

          </div>
        
      )}
      {selectedCriteria === "Sun Light" && (
         <div
        style={{
            position: "absolute",
            top: `${formPosition.top}px`,
            left: `${formPosition.left}px`,
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}>
            <CriteriaFilter5
              selectedCriteria={selectedCriteria}
              onApplyFilters={handleApplyFilters}
            />

          </div>
        
      )}
      {selectedCriteria === "Outside View" && (
         <div
        style={{
            position: "absolute",
            top: `${formPosition.top}px`,
            left: `${formPosition.left}px`,
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}>
            <CriteriaFilter5
              selectedCriteria={selectedCriteria}
              onApplyFilters={handleApplyFilters}
            />

          </div>
        
      )}
      {selectedCriteria === "Grocery Store" && (
         <div
        style={{
            position: "absolute",
            top: `${formPosition.top}px`,
            left: `${formPosition.left}px`,
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}>

            <CriteriaFilter5
              selectedCriteria={selectedCriteria}
              onApplyFilters={handleApplyFilters}
            />
          </div>
        
      )}
      {selectedCriteria === "Children Activity" && (
         <div
        style={{
            position: "absolute",
            top: `${formPosition.top}px`,
            left: `${formPosition.left}px`,
            transform: "translateX(-50%)",
            zIndex: 1000,
          }}>

            <CriteriaFilter5
              selectedCriteria={selectedCriteria}
              onApplyFilters={handleApplyFilters}
            />
          </div>
        
      )}
      {selectedCriteria === "College" && (
         <div
         style={{
             position: "absolute",
             top: `${formPosition.top}px`,
             left: `${formPosition.left}px`,
             transform: "translateX(-50%)",
             zIndex: 1000,
           }}>
        
        <CriteriaFilter5
          selectedCriteria={selectedCriteria}
          onApplyFilters={handleApplyFilters}
        />
        </div>
      )}
    </div>
  );
};
