import React from "react";
import HeroSection from "../Components/HeroSection";
import { StickyNavbar } from "../Components/Navbar";
import Services from "../Components/Services";
import {Footer} from "../Components/Footer"
import Testimonials from "../Components/Testimonials"

function home() {
  return (
    <><div className="homePage">
      <StickyNavbar />
      <HeroSection />
      <Services />
      <Testimonials />
      <div>

      <Footer />
      </div>

    </div>
    </>
  );
}

export default home;
