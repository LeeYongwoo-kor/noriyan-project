/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      mobile: "480px",
      sm: "640px",
      md: "769px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        highlight: "rgb(254, 107, 37)",
        lightmain: "rgb(254, 152, 103)",
        main: "rgb(254, 125, 60)",
        darkmain: "rgb(233, 77, 1)",
        shallowBlack: "rgba(0,0,0,0.05)",
      },
      inset: {
        photo: "calc(25% - 1.5rem)",
        photoMobile: "calc(16% - 1.5rem)",
      },
      animation: {
        change: "change 9s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        fadein: "fadein 0.5s backwards",
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
            transform: "translate3d(0, 20px, 0)",
          },
          to: {
            opacity: 1,
            transform: "translateZ(0)",
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
        kosugi: ["Kosugi Maru", "sans-serif"],
        murecho: ["Murecho", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      spacing: {
        112: "28rem",
        120: "30rem",
        128: "32rem",
        136: "34rem",
        144: "36rem",
        160: "40rem",
        172: "44rem",
      },
      fontSize: {
        smclamp: ["clamp(0.675rem, 2.5vw, 0.875rem)"],
        clamp: ["clamp(0.75rem, 2.5vw, 1rem)"],
        lgclamp: ["clamp(0.875rem, 2.5vw, 1.125rem)"],
        xlclamp: ["clamp(1rem, 2.5vw, 1.25rem)"],
        xl2clamp: ["clamp(1.25rem, 2.5vw, 1.5rem)"],
        xl3clamp: ["clamp(1.5rem, 2.5vw, 1.875rem)"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      flex: {
        2: "2 2 0%",
        3: "3 3 0%",
      },
      backgroundSize: {
        mobile: "768px",
      },
    },
  },
  plugins: [require("tailwindcss"), require("tailwindcss-animation-delay")],
};
