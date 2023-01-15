/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        highlight: "rgb(254, 107, 37)",
        lightmain: "rgb(254, 152, 103)",
        main: "rgb(254, 125, 60)",
        darkmain: "rgb(233, 77, 1)",
      },
      animation: {
        change: "change 16s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        fadein: "fadein 0.5s linear",
        fadeout: "fadeout 0.5s linear",
      },
      keyframes: {
        change: {
          "0%, 100%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0,
          },
        },
        fadein: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        fadeout: {
          from: {
            opacity: 1,
          },
          to: {
            opacity: 0,
          },
        },
      },
      fontFamily: {
        mincho: ["Shippori Mincho", "serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [require("tailwindcss"), require("tailwindcss-animation-delay")],
};
