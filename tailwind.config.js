/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black':'#000000',
      'white': '#ffffff',
      'blue': '#4176FF',
      'dark-blue': '#0039a6',
      'light-blue': '#B3C8FF',
      'lighter-blue': '#D8E2FD',
      'primitive-blue':'#C6D6FF',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'gray':'#6E6F73',
      'set':'#E2E3E9',
      'footer':'#2E2F31',
      'yellow':'#FFFF00',
      'red':'#FF0000',
      'must-hover':'#FB6464',
      'Should-hover':'#FEA31B',
      'Good-hover':'#4176FF',
      'must-active':'#FFD9D9',
      'Should-active':'#FFE5BD',
      'Good-active':'#E7EDFF',
      'must-text':'#CE0202',
      'Should-text':'#BB7917',
      'Good-text':'#274AA3',
      'property-text': '#6e6f73',
      'property-compare': '#bcbcc2',
      'property-Ctext': '#b6b7b9',
      'property-BMtxt':'#E7EDFF',
      'property-TMtext':'#6c27a3',
      'property-TMbg':'#8c34d1',
      'lightpurple':'#EED9FF',
      'darkpurple':'#6C27A3',
      'light-green':'#90EE90',
      'ProductPageBorder':'#E2E3E9'
    },
    extend: {
      spacing:{
        'c19.5':'19.5rem',
        'c22.5':'22.5rem',
        'c24.5': '24.5rem',
        'c27.5':'27.5rem',
        'c30.5':'30.5rem',
        'c32.5':'32.5rem',
        'c36':'36rem',
        'c40':'40rem',
        'c46':'46rem',
        'c53':'53rem',
        'c58':'58rem',
        'c63':'63rem',
        'c69':'69rem',
        'c73':'73rem',
        'c78':'78rem',
        'c80':'80rem',
        'c86':'86rem',
        'c90':'90rem',
      },
      textSize:{
        "t1":'0.1rem'
      },
      screens: {
        '3xl': '3000px', // Custom breakpoint
        '1xl':'1000px'
      },
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

