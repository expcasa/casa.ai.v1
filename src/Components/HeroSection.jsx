import React from "react";
function HeroSection() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-14 px-4 hero-main">
      <div
      id="HeroSection"
        className=" bg-cover bg-center flex items-center justify-center mt-5 ml-24 mr-28 mb-20 h-c40 w-650 rounded-3xl  hero-banner "
        style={{
          backgroundImage: "url(Banner.png)",
        }}
      >
        <div className=" w-c45 h-96 flex items-center justify-center space-y-10 hero-text">
          <div className="relative right-44 bottom-14">
            <h1 className="text-5xl font-bold text-white">
              Discover your ideal home <br />
              with Advanced Search <br />
              and Personalised Match
            </h1>
            <p className="text-xl text-white/80 mt-4">
              Experience a seamless search process that <br /> prioritizes your
              needs, helping you find your ideal
              <br /> home quickly and easily
            </p>
            {/* <button className="bg-white hover:bg-gray text-black font-bold py-3 px-8 rounded-full mt-6"> */}
            <a
              className="bg-white hover:bg-gray text-black font-bold py-3 px-8 rounded-full mt-10  absolute -bottom-14 hero-button"
              href="/Criteria"
            >
              Try it Now
            </a>
            {/* </button> */}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default HeroSection;