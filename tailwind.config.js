const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#FF2D00",
          50: "#FFEAE5",
          100: "#FFD5CC",
          200: "#FFAB99",
          300: "#FF8166",
          400: "#FF5733",
          500: "#FF2D00",
          600: "#CC2400",
          700: "#991B00",
          800: "#661200",
          900: "#330900"
        },
        "brand-content": {
          DEFAULT: "#1D1B84",
          50: "#9C9AEA",
          100: "#8785E6",
          200: "#5D5BDD",
          300: "#3330D5",
          400: "#2624AE",
          500: "#1D1B84",
          600: "#14125A",
          700: "#0A0A2F",
          800: "#010105",
          900: "#000000"
        },
        "light-green": {
          DEFAULT: "#00FF00",
          50: "#E5FFE5",
          100: "#CCFFCC",
          200: "#99FF99",
          300: "#66FF66",
          400: "#33FF33",
          500: "#00FF00",
          600: "#00CC00",
          700: "#009900",
          800: "#006600",
          900: "#003300"
        },
        gray: colors.slate,
        primary: {
          DEFAULT: "#150734",
          50: "#703CE5",
          100: "#6025E2",
          200: "#4B19BB",
          300: "#39138E",
          400: "#270D61",
          500: "#150734",
          600: "#030107"
        },
        info: "#2094f3",
        success: "#009485",
        warning: "#ff9900",
        error: "#ff5724",
        transparent: "transparent",
        current: "currentColor",
        blueGray: colors.slate,
        cyan: colors.cyan,
        blue: colors.blue
      },
      fontFamily: {
        title: ["Anton", "sans-serif"],
        base: ["Rubik", "sans-serif"]
      }
    }
  },
  corePlugins: {},
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class"
    }),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp")
  ]
};
