import React from "react";
import { Navbar, Typography } from "@material-tailwind/react";
export function ComparisonNavbar() {
  return (
    <div className="max-w-screen-2xl container ">
      <Navbar className="bg-white w-full h-16 flex items-center justify-between px-4 shadow-md fixed top-0 z-50 nav-compare">
        {/* Brand Name */}
        <div className="text-xl font-bold text-gray-800">
          <Typography
            as="a"
            href="/"
            className="mr-4 cursor-pointer py-1.5 font-bold text-lg text-blue ml-5 txt-compare"
          >
            casa.ai
          </Typography>
        </div>
      </Navbar>
    </div>
  );
}