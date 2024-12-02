import React from "react";
function Testimonials() {
  return (
   <div className="max-w-screen-2xl container mx-auto md:px-14 px-4 main-Testi">
    <div id="Testimonials" className="flex justify-center m-40">
      <div className="stack w-full max-w-[890px]">
      <div className="bg-blue text-white grid h-60 w-full p-10 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl">
      <h1 className="text-3xl text-left w-lg font-light">The tool’s side-by-side comparisons and calculated metrics helped me make an informed decision based on data :heart_eyes::star-struck::rocket: </h1>
      <p className="text-sm text-right mt-10 text-primitive-blue" >Received yesterday from <span className="font-bold">Sarah Kenneth</span></p>
        <img
           src="../../public/quotes.svg"
            alt="Top Left"
            className="absolute -top-6 -left-10 w-15 h-15 " // Adjust width and height as needed
          />
          {/* Bottom-right SVG */}
          <img
            src="../../public/quotes (1).svg"
            alt="Bottom Right"
            className="absolute -bottom-5 -right-[55px] w-15 h-15" // Adjust width and height as needed
          />
      </div>
      <div className="bg-light-blue  grid h-60 w-full place-content-center rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl relative top-4"></div>
      <div className="bg-lighter-blue  grid h-60 w-full place-content-center rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl relative top-8"></div>
    </div>
      </div>
</div>
  );
}
export default Testimonials;