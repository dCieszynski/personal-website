/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        imb: ["IBM Plex Mono", "sans-serif"],
      },
      dropShadow: {
        brutal: "4px 4px 0px #000",
      },
      colors: {
        "personal-orange-2": "#ffce2f",
        "personal-orange-1": "#ffdc69",
      },
    },
  },
  plugins: [],
};
