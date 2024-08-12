const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'media',
    content: ["./src/**/*.{html,js,svelte}"],
    theme: {
      extend: {
        colors: {
          'evyellow': '#F4C032',
          'evorange': '#FF8800',
        },
        transitionProperty: {
          'width': 'width, stroke-width, border'
        }
      },
      colors: {
          'white': colors.white,
          'black': colors.neutral[800],
          'transparent': "transparent",
          'neutral': colors.neutral,


      }
    },
    plugins: [],
  } 