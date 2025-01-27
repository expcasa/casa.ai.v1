import React from "react";
import {  Typography } from "@material-tailwind/react";

 function CardNavbar() {
  return (
    <div className="">
      <div className="bg-white w-full h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 shadow-md fixed top-0 left-0 z-50">
        {/* Brand Name */}
        <div className="text-xl font-bold text-gray-800">
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-bold text-lg text-blue ml-5"
          >
            casa.ai
          </Typography>
        </div>
      </div>
      
      {/* Top horizontal line */}
      <div className="mt-16 w-full border-b border-set"></div>
    </div>
  );
}
export default CardNavbar;
