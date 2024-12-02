import React from "react";
import Service from "../../src/Service.json";
import Card_Structure from "./Card_Structure";
function Services() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-14 px-4 CardStructure">
        <div id="Services"className="Services-id text-4xl font-bold text-center benefits-service">Our Benefits</div>
        {/* Container for the card grid */}
        <div className="mt-12 mx-auto mb-20 ">
          {/* Grid for the first 3 cards */}
          <div className="flex flex-wrap justify-center mt-8 gap-2 grid1-service"> {/* Reduced gap for closer cards */}
            {Service.slice(0, 3).map((item) => (
              <Card_Structure key={item.id} item={item} />
            ))}
          </div>
          {/* Grid for the last 2 cards centered */}
          <div className="flex flex-wrap justify-center gap-2  grid2-service"> {/* Reduced gap for closer cards */}
            {Service.slice(3).map((item) => (
              <Card_Structure key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Services;