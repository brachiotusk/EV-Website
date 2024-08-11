/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'media',
    content: ["./src/**/*.{html,js,svelte}"],
    theme: {
      extend: {
        colors: {
          'evyellow': '#F4C032',
          'evorange': '#FF8800',
        }
      },
    },
    plugins: [],
  }