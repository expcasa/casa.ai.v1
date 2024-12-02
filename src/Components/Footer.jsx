import { Typography } from "@material-tailwind/react";
import React from "react";
export function Footer() {
  return (
    <footer className="max-w-screen-2xl container mx-auto md:px-14 px-4 flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between bg-footer text-gray footer">
      <Typography color="blue-gray" className="font-normal  ml-36 text-white logo-footer">
        Casa.ai
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 mr-48">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 foot-footer"
          >
            Buy
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 sell-footer"
          >
            Sell
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 rent-footer"
          >
            Rent
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 contact-footer"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
  );
}