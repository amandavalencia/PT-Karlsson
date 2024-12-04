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
      greyBakground: '#282727',
      grey: '#302E2E',
      primaryButton: '#9C2D2D',
      secondaryButton: '#AE9696',
    },
  },
},

  plugins: [
    forms,
  ],
}

