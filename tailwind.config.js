/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          10:'#FFF5E4',
          20:'#FFC4C4',
          30:'#EE6983',
          40:'#850E35'
        }
      }
    },
  },
  plugins: [],
}
