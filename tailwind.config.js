/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        imb: ["IBM Plex Mono", "sans-serif"],
      },
      colors: {
        "personal-orange-2": "#ffce2f",
        "personal-orange-1": "#ffdc69",
      },
    },
  },
  plugins: [],
};
