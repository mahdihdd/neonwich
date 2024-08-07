/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        colors:
          "color, background-color, border-color, text-decoration-color, fill, stroke",
      },
      screens: {
       " xxl": "1650px",
        "s": "450px",
        "2s": "300px",
        "x" : "0px"
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(25%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
      },
      animation: {
        slideUp: "slideUp 0.3s ease-in-out forwards",
        slideDown: "slideDown 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
