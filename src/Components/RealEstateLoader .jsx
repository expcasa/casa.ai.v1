import React, { useState, useEffect } from "react";
import "../ProductDetailsPage/ProductDetailsLoader.css";

const realEstateOneLiners = [
  "This home will soon be legendary, just like the person who bought it —you",
  "This house didn’t choose you—you chose it, because you have impeccable taste",
  "Find a house that suits you better than your Tinder date —thanks to Casa.ai.",
  "Your dream home is just a mortgage away!",
  "We’ll find you a house faster than your WiFi buffer time during a Netflix binge. No lag, just luxury",
  "House hunting with Casa.ai? Don't worry, it's like Friends: We’ll always be there for you",
  "House hunting with us is like your phone’s battery on 1% —but this time, you’ll actually make it",
  "House hunting: the only time ‘too many choices’ isn’t a problem.",
  "Search for homes with Casa.ai, and you’ll feel like you’re in Stranger Things —a world of possibilities you didn’t know existed.",
  "Finding a house is easy. Finding a house you can afford? That’s the real adventure.",
  "Real estate agents don’t just sell homes, they sell dreams... and a few nightmares if you’re not careful!",
  "Casa.ai: Because finding a house should be easier than finding your car keys after a night out",
  "Your future is bright. Your new house? Even brighter!!!",
  "Investing in properties is like getting in on the ground floor of the next big tech IPO—smart, strategic, and ahead of the curve.",
  "This property's value is rising faster than the latest cryptocurrency —volatile markets can't compete with solid real estate",
  "Don’t worry, Siri isn’t listening in this house. But your fridge might still judge your midnight snacks",
  "If your iPhone is listening to you, at least let it listen in a house this luxurious. Flex hard!",
  "This house is smarter than your Alexa —plus, it doesn’t listen to your secrets.",
  "Elon Musk might own Twitter, but you’ll own the best address in town.",
  "Welcome to Casa.ai: Dreamed by Americans who dream Big, designed by Poles who dream precise and coded by Indians who dream impossible.",
];

const ProductDetailsLoader = () => {
  const [randomOneLiner, setRandomOneLiner] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * realEstateOneLiners.length);
    setRandomOneLiner(realEstateOneLiners[randomIndex]);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <div className="flex space-x-6 train-animation ">
        {/* House */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
            stroke="#6E6F73"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 22V12H15V22"
            stroke="#6E6F73"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        {/* Dog Park */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.53137 11C3.55828 11.0098 2.61837 10.6466 1.90462 9.98515C1.19088 9.32366 0.757461 8.41402 0.693367 7.44299C0.692318 6.94567 0.796963 6.45381 1.00037 5.99999M7.92637 15.977L7.69337 19.5H8.41337C8.6363 19.5 8.85283 19.5745 9.02857 19.7116C9.20432 19.8488 9.3292 20.0407 9.38337 20.257L9.69337 21.5H5.19337L4.28437 13.267L4.19337 12.5C4.19337 11.5717 4.56212 10.6815 5.21849 10.0251C5.87487 9.36874 6.76511 8.99999 7.69337 8.99999H12.6934C13.3567 8.97817 13.996 8.74644 14.5193 8.33817C15.0426 7.92989 15.4229 7.36612 15.6054 6.72799M18.4494 4.63999L18.6634 5.60199C18.7083 5.75866 18.7179 5.92336 18.6914 6.08419C18.665 6.24502 18.6031 6.39795 18.5102 6.53193C18.4174 6.66591 18.296 6.77758 18.1547 6.85887C18.0134 6.94017 17.8558 6.98905 17.6934 7.00199H16.2544C16.0919 6.98905 15.9343 6.94017 15.793 6.85887C15.6518 6.77758 15.5303 6.66591 15.4375 6.53193C15.3447 6.39795 15.2828 6.24502 15.2563 6.08419C15.2298 5.92336 15.2394 5.75866 15.2844 5.60199L15.7844 3.35199C15.8249 3.12076 15.9431 2.91029 16.1195 2.75537C16.2959 2.60045 16.5198 2.51036 16.7544 2.49999H18.1934C18.8503 2.417 19.5152 2.5735 20.0662 2.94081C20.6171 3.30812 21.0173 3.86165 21.1934 4.49999H22.3064C22.4648 4.49995 22.621 4.53757 22.7621 4.60974C22.9031 4.68191 23.025 4.78656 23.1177 4.91509C23.2104 5.04361 23.2712 5.19231 23.2951 5.34894C23.3191 5.50558 23.3054 5.66566 23.2554 5.81599L22.8674 6.97899C22.8142 7.13858 22.7216 7.28219 22.5982 7.3965C22.4748 7.51082 22.3246 7.59216 22.1614 7.63299L19.6934 8.24999C19.7413 12.0529 19.236 15.8425 18.1934 19.5H18.9134C19.1363 19.5 19.3528 19.5745 19.5286 19.7116C19.7043 19.8488 19.8292 20.0407 19.8834 20.257L20.1934 21.5H16.1934L14.6934 15.5L8.00043 16"
            stroke="#6E6F73"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.2486 23.2C20.158 23.666 19.7673 24.0006 19.3143 24H4.68571C4.23272 24.0006 3.84203 23.666 3.75143 23.2L2 14H22L20.2486 23.2Z"
            stroke="#6E6F73"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1 11C1 10.4477 1.44772 10 2 10H22C22.5523 10 23 10.4477 23 11V13C23 13.5523 22.5523 14 22 14H2C1.44772 14 1 13.5523 1 13V11Z"
            stroke="#6E6F73"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.5 7.5L9.5 1.5"
            stroke="#6E6F73"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.5 7.5L14.5 1.5"
            stroke="#6E6F73"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 19H17"
            stroke="#6E6F73"
            stroke-width="1.3"
            stroke-linecap="round"
          />
        </svg>

        <svg
          width="26"
          height="24"
          viewBox="0 0 26 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.5 22.442C22 22.963 20.44 20.463 20.44 20.463C19.654 21.7119 18.2942 22.4835 16.819 22.518C15.3544 22.448 14.0106 21.6849 13.2 20.463C12.4142 21.7116 11.0549 22.4832 9.58 22.518C8.11469 22.4494 6.76998 21.686 5.96 20.463C5.96 20.463 3.952 23 1.5 22.483"
            stroke="#6E6F73"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 17.727V3.94702C8 2.56631 9.11929 1.44702 10.5 1.44702C11.8807 1.44702 13 2.56631 13 3.94702V4.94702"
            stroke="#6E6F73"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19 17.942V3.94702C19 2.56631 20.1193 1.44702 21.5 1.44702C22.8807 1.44702 24 2.56631 24 3.94702V4.94702"
            stroke="#6E6F73"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 9H19"
            stroke="#6E6F73"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 13H19"
            stroke="#6E6F73"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <svg
          width="26"
          height="25"
          viewBox="0 0 26 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 23.56L4.682 4.98686C4.86198 3.00268 6.59232 1.47994 8.667 1.47998H17C19.0747 1.47994 20.805 3.00268 20.985 4.98686L23 23.56"
            stroke="#6E6F73"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.5 23.56H4.5"
            stroke="#6E6F73"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21.5 23.56H24.5"
            stroke="#6E6F73"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.5 1.47998V16"
            stroke="#6E6F73"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.5 1.47998V16"
            stroke="#6E6F73"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18 17.3333C18 18.8061 17.0051 20 15.7778 20H10.2222C8.99492 20 8 18.8061 8 17.3333C8 16.597 8.49746 16 9.11111 16H16.8889C17.5025 16 18 16.597 18 17.3333Z"
            stroke="#6E6F73"
            stroke-width="1.3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <svg
          width="24"
          height="24"
          viewBox="0 0 26 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.5 22.442C22 22.963 20.44 20.463 20.44 20.463C19.654 21.7119 18.2942 22.4835 16.819 22.518C15.3544 22.448 14.0106 21.6849 13.2 20.463C12.4142 21.7116 11.0549 22.4832 9.58 22.518C8.11469 22.4494 6.76998 21.686 5.96 20.463C5.96 20.463 3.952 23 1.5 22.483"
            stroke="#6E6F73"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 17.727V3.94702C8 2.56631 9.11929 1.44702 10.5 1.44702C11.8807 1.44702 13 2.56631 13 3.94702V4.94702"
            stroke="#6E6F73"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19 17.942V3.94702C19 2.56631 20.1193 1.44702 21.5 1.44702C22.8807 1.44702 24 2.56631 24 3.94702V4.94702"
            stroke="#6E6F73"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 9H19"
            stroke="#6E6F73"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 13H19"
            stroke="#6E6F73"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <p className="text-xl mt-6 text-gray-700 animate-fadeIn">
        {randomOneLiner}
      </p>
    </div>
  );
};

export default ProductDetailsLoader;
