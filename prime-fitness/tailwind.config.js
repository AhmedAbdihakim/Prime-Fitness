/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        urbanNight: "#222831",
        steelGray: "#393E46",
        oceanBlue: "#00ADB5",
        neonAqua: "#00FFF5",
      },
    },
  },
  plugins: [],
};
