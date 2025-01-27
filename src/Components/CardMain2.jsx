import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mainprop from "./../assets/MainProp.png"
import detail1 from "./../assets/detail1.png"
import detail2 from "./../assets/detail2.png"
import detail3 from "./../assets/detail3.png"
import detail4 from "./../assets/detail4.png"


function CardMain2() {
  const mainCarouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-screen-2xl container mx-auto">
    <div className="flex justify-start items-start  mx-10">
      {/* Left Div for Main Image Carousel */}
      <div className="w-1/2 p-2">
        <Slider {...mainCarouselSettings}>
          <div>
            <img
              src={Mainprop}
              alt="Main Property"
              className="rounded-lg w-c40 h-c30.5 relative left-24 "
            />
          </div>
          <div>
            <img
              src="property2.jpg"
              alt="Main Property"
              className="rounded-lg w-full h-auto"
            />
          </div>
        </Slider>
      </div>

      {/* Right Div for 4 Small Images (2 Up, 2 Down) */}
      <div className="w-1/2 grid grid-cols-2 grid-rows-2 gap-2 p-2">
        <div>
          <img
            src={detail1}
            alt="Detail Image 1"
            className=" w-72 h-60 relative right-2"
          />
        </div>
        <div>
          <img
            src={detail2}
            alt="Detail Image 2"
            className="rounded-tr-lg w-c19.5 h-60 relative right-16"
          />
        </div>
        <div>
          <img
            src={detail3}
            alt="Detail Image 3"
            className=" w-72 h-60 relative right-2"
          />
        </div>
        <div>
          <img
            src={detail4}
            alt="Detail Image 4"
            className="rounded-br-lg w-c19.5 h-60 relative right-16"
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default CardMain2;
