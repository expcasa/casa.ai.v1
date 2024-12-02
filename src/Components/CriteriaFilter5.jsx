import React from "react";

const CriteriaFilter5 = ({ selectedCriteria, className }) => {
  return (
    <div className="relative">
      <div
        className={`absolute top-0 left-0 w-64 h-40 bg-white text-black p-4 rounded-lg mt-4 shadow-md z-10 ${className} 3xl:w-[26rem] 3xl:h-[10rem]`}
      >
        {/* Display selected criteria */}
        <h3 className="font-semibold mb-4 3xl:text-2xl">{selectedCriteria}</h3>

        {/* Coming Soon Message */}
        <p className="text-center mt-10 mr-2 3xl:text-2xl">...🚧 Coming Soon 🚧...</p>
      </div>
    </div>
  );
};

export default CriteriaFilter5;
