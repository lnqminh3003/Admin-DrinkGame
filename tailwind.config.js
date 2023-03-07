/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '512px',
        '76':'256px'
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
