/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%,100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease infinite",
      },
      colors: {
        primary: "hsl(0, 0%, 98%)",
        primaryDark: "hsl(209, 23%, 22%)",
        darkBg: "hsl(207, 26%, 17%)",
      },
    },
  },
  plugins: [],
};
