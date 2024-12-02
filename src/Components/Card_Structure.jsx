import React from "react";

function Card_Structure({ item }) {
  return (
    <div className="m-1 pb-1">
      <div className="card w-80 h-64 bg-base-100 hover:scale-105 duration-200 border-2 border-set rounded-lg px-4 py-3">

        <div className="mb-2 mt-2">
          <img src={item.svg} alt={item.h1} className="w-12 h-12" />
        </div>


        <div className="card-body text-left flex flex-col p-0">

          <h2 className="card-title text-xl font-bold mt-2">{item.h1}</h2>

          <p className="text-sm text-gray-600 mb-2 mt-2 ">{item.p}</p>
        </div>
      </div>
    </div>
  );
}

export default Card_Structure;