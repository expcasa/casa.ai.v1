import React from "react";
import { Navbar, Typography } from "@material-tailwind/react";

export function ComparisonNavbar() {
  return (
    <div className="w-screen">
      <Navbar 
        className="bg-white w-full h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 shadow-md fixed top-0 left-0 z-50"
        style={{ minWidth: "100vw" }} // Ensures it spans the full width of the viewport
      >
        {/* Brand Name */}
        <div className="text-4xl font-bold text-gray-800">
          <Typography
            as="a"
            href="/"
            className="cursor-pointer text-2xl py-1.5 font-bold text-blue  3xl:text-4xl"
          >
            casa.ai
          </Typography>
        </div>
      </Navbar>
    </div>
  );
}
