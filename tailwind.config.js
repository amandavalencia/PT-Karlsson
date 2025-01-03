/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: { 
      colors: {
      brand: {
        light: '#B4C6CC',
        DEFAULT: '#F0FFFF',
        dark: '#161616',
      },
      greyBakground: '#1C1C1C',
      grey: '#6F6F6F',
      lightGrey: '#7B7B7B',
      primaryButton: '#9D1616',
      secondaryButton: '#AE9696',
      glowing_shade: '#00FFF2',
      glowing_shade_light: '#BDF1FF'
    },
  },
},

  plugins: [
    forms,
  ],
}

