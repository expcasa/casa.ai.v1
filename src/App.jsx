import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/home";
import Criteria from "./CriteriaPage/Criteria";
import Comparison from "./Comparison/Comparison";
import RealEstateLoader from "./Components/RealEstateLoader ";

const ProductDetails = lazy(() =>
  new Promise((resolve) => {
    setTimeout(() => resolve(import("./ProductDetailsPage/ProductDetails")), 4500); // Add 2-second delay
  })
);

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Criteria" element={<Criteria />} />
        <Route path="/Comparison" element={<Comparison />} />
        <Route
          path="/ProductDetail"
          element={
            // <Suspense fallback={<div className="text-center mt-10">Loading Product Details...</div>}>
            //   <ProductDetails />
            // </Suspense>
            <Suspense fallback={<RealEstateLoader />}>
  <ProductDetails />
</Suspense>
            
          }
        />
      </Routes>
    </div>
  );
}

export default App;
