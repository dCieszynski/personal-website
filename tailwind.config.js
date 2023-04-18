/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        imb: ["IBM Plex Mono", "monospace"],
      },
      boxShadow: {
        brutal: "4px 4px 0px #000",
        "brutal-white": "4px 4px 0px #fff",
      },
      colors: {
        "personal-orange-2": "#ffce2f",
        "personal-orange-1": "#ffdc69",
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        "move-from-right": {
          "0%": {
            transform: "translateX(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: 1,
          },
        },
        "move-from-left": {
          "0%": {
            transform: "translateX(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: 1,
          },
        },
        apear: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        typing: "typing 2s steps(40, end) alternate, .7s",
        "move-from-right": "move-from-right 1s ease-out",
        "move-from-left": "move-from-left 1s ease-out",
        apear: "apear 1s ease-out",
      },
    },
    plugins: [],
  },
};
