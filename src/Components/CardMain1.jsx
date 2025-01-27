import React from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
import BackButton from "./../assets/Back-Button.svg";
import { Link } from "react-router-dom";

const Favorite = (
  <svg
    width="24"
    height="21"
    viewBox="0 0 24 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.84 2.60999C20.3292 2.099 19.7228 1.69364 19.0554 1.41708C18.3879 1.14052 17.6725 0.998169 16.95 0.998169C16.2275 0.998169 15.5121 1.14052 14.8446 1.41708C14.1772 1.69364 13.5708 2.099 13.06 2.60999L12 3.66999L10.94 2.60999C9.9083 1.5783 8.50903 0.998704 7.05 0.998704C5.59096 0.998704 4.19169 1.5783 3.16 2.60999C2.1283 3.64169 1.54871 5.04096 1.54871 6.49999C1.54871 7.95903 2.1283 9.3583 3.16 10.39L4.22 11.45L12 19.23L19.78 11.45L20.84 10.39C21.351 9.87924 21.7563 9.27281 22.0329 8.60535C22.3095 7.93789 22.4518 7.22248 22.4518 6.49999C22.4518 5.77751 22.3095 5.0621 22.0329 4.39464C21.7563 3.72718 21.351 3.12075 20.84 2.60999Z"
      stroke="black"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const Hide = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="black"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.92999 4.93005L19.07 19.0701"
      stroke="black"
      stroke-width="1"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const Compare = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5 20.5H5.30775C4.80258 20.5 4.375 20.325 4.025 19.975C3.675 19.625 3.5 19.1974 3.5 18.6923V5.30777C3.5 4.8026 3.675 4.37502 4.025 4.02502C4.375 3.67502 4.80258 3.50002 5.30775 3.50002H10.5V2.13477C10.5 1.92193 10.5718 1.74368 10.7155 1.60002C10.859 1.45652 11.0372 1.38477 11.25 1.38477C11.4628 1.38477 11.641 1.45652 11.7845 1.60002C11.9282 1.74368 12 1.92193 12 2.13477V21.8653C12 22.0781 11.9282 22.2563 11.7845 22.4C11.641 22.5435 11.4628 22.6153 11.25 22.6153C11.0372 22.6153 10.859 22.5435 10.7155 22.4C10.5718 22.2563 10.5 22.0781 10.5 21.8653V20.5ZM5 18H10.5V11.4038L5 18ZM14 20.5V12L19 18V5.30777C19 5.23077 18.9679 5.16026 18.9038 5.09626C18.8398 5.0321 18.7692 5.00002 18.6923 5.00002H14V3.50002H18.6923C19.1974 3.50002 19.625 3.67502 19.975 4.02502C20.325 4.37502 20.5 4.8026 20.5 5.30777V18.6923C20.5 19.1974 20.325 19.625 19.975 19.975C19.625 20.325 19.1974 20.5 18.6923 20.5H14Z"
      fill="#5F6368"
    />
  </svg>
);

const Trophy = (
  <svg
    width="92"
    height="90"
    viewBox="0 0 92 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_1708_34793)">
      <path
        d="M38.9115 51.0015H37.5C27.5355 51.0015 24 45.7485 24 41.2515C24 38.658 25.8945 36.513 28.3695 36.09C27.765 34.779 27.3195 33.519 27.0885 32.3895C26.8185 31.0755 27.1545 29.7225 28.008 28.6755C28.8765 27.6105 30.1635 27 31.536 27H52.4655C53.838 27 55.1235 27.6105 55.9935 28.6755C56.847 29.721 57.183 31.0755 56.913 32.3895C56.6805 33.5175 56.238 34.779 55.6335 36.09C58.107 36.513 60 38.658 60 41.25C60 45.747 56.4645 51 46.5 51H45.1005C45.057 51.3165 45 51.63 45 51.9555V57C45 59.739 47.304 59.988 48 60H52.5V63H31.5V60H36C36.708 59.988 39.012 59.739 39.012 57V51.9555C39.012 51.63 38.9565 51.318 38.9115 51.0015ZM29.9505 39.0015H29.25C28.0095 39.0015 27 40.011 27 41.2515C27 44.5155 29.988 48.0015 37.7295 48.0015C37.4535 47.6355 37.1385 47.307 36.7845 47.025C34.2075 44.9655 31.7715 41.9985 29.9505 39.0015ZM57 41.2515C57 40.011 55.9905 39.0015 54.75 39.0015H54.054C52.236 41.997 49.8045 44.964 47.2275 47.025C46.875 47.307 46.5585 47.637 46.2825 48.0015C54.024 48.0015 57 44.5155 57 41.2515ZM41.214 33.0015L40.236 36.009H37.0725L36.6225 37.386L39.1815 39.246L38.2035 42.255L39.375 43.1055L41.9325 41.2515L44.4975 43.107L45.669 42.2565L44.691 39.2475L47.25 37.3875L46.8 36.0105H43.6395L42.6615 33.0105L41.214 33.0015Z"
        fill="url(#paint0_linear_1708_34793)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1708_34793"
        x="-8"
        y="-1"
        width="100"
        height="100"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="16" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.92549 0 0 0 0 0.560784 0 0 0 0 0.172549 0 0 0 0.32 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1708_34793"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1708_34793"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_1708_34793"
        x1="54.5"
        y1="29"
        x2="42"
        y2="63"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F79045" />
        <stop offset="1" stop-color="#DA9000" />
      </linearGradient>
    </defs>
  </svg>
);

const CustomCarouselLayout = () => {
  const mainCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const smallCarouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
};

const CardMain1 = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto">
      <div className="flex justify-start items-center gap-2 p-4 mx-32 ">
        <div className="flex items-center gap-2 w-1/2">
          {/* Back Button */}
          <div className="flex items-center justify-center border border-ProductPageBorder rounded-full w-20 h-20">
            <Link to={"/Criteria"} className=" ">
              <img
                src={BackButton}
                alt="Leading"
                className="w-7 opacity-70 hover:opacity-100 cursor-pointer"
              />
            </Link>
          </div>

          {/* Matching Property Data */}
          <div className="flex items-center bg-white border border-ProductPageBorder rounded-lg p-4 flex-grow h-20 space-x-2">
            <span className="text-3xl text-orange-500">{Trophy}</span>
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold mb-1">#1</h2>
              <p className="font-medium text-sm text-gray-600">
                Matching property based on the set criteria
              </p>
            </div>
          </div>
        </div>

        {/* Match Percentage to the Left */}
        <div className="bg-white shadow-sm border border-ProductPageBorder rounded-lg p-4 w-1/4 h-20 flex flex-col justify-start items-start">
          <h3 className="text-xl font-bold">77.7%</h3>
          <p className="text-sm underline underline-offset-4">Match</p>
        </div>
        {/* Action Buttons with Icons on Top */}
        <div className="flex justify-between gap-2 w-1/4">
          <button className="flex flex-col items-center bg-white shadow-sm border border-ProductPageBorder rounded-lg h-20 w-full font-light justify-center text-sm">
            <span className=" mb-1">{Favorite}</span> Favorite
          </button>
          <a
  href="/Comparison"
  className="flex flex-col items-center bg-white shadow-sm border border-ProductPageBorder rounded-lg h-20 w-full font-light justify-center text-sm"
>
  <span className="text-xl mb-1">{Compare}</span>
  Compare
</a>

          <button className="flex flex-col items-center bg-white shadow-sm border border-ProductPageBorder rounded-lg h-20 w-full font-light justify-center text-sm">
            <span className="text-xl mb-1">{Hide}</span> Hide
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardMain1;
