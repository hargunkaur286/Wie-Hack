/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",

  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        lightcyan: "#2FC4B1",
        // bghero: "#B4F0E94D",
        bghero : "rgba(180, 240, 233, 0.3)",
        banner: "rgba(40, 156, 144, 0.17)",
        footcol: "#A1FFF5",
        btn: "#289C90",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      "xs": "480px",
      "sm": "	640px",
      "md": "768px",
      "ms":"860px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1536px"
    },
  },
  plugins: [],
};
