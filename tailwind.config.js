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
      'light-green':'#90EE90'
    },
    extend: {
      spacing:{
        'c45':'45rem',
        'c40':'40rem',
        'c35': '35rem',
        'c30':'30rem',
        'c25':'25rem',
        'c20':'20rem',
        'c13':'13rem',
        'c10':'10rem',
        'c15':'15rem',
        'c8':'8rem',
        'c5':'5rem',
        'c17':'17rem',
        'c22':'22rem',
        'c27':'27rem',
        'c32':'32rem',
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

