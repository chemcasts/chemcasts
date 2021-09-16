const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
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
          900: "#330900",
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
          900: "#000000",
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
          900: "#003300",
        },
        black: {
          DEFAULT: "#111111",
          50: "#848484",
          100: "#777777",
          200: "#5E5E5E",
          300: "#444444",
          400: "#2B2B2B",
          500: "#111111",
          600: "#000000",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        info: "#2094f3",
        success: "#009485",
        warning: "#ff9900",
        error: "#ff5724",
        transparent: "transparent",
        current: "currentColor",
        gray: colors.gray,
        blueGray: colors.blueGray,
        cyan: colors.cyan,
        blue: colors.blue,
      },
      fontFamily: {
        title: ["Anton", "sans-serif"],
        base: ["Rubik", "sans-serif"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            blockquote: {
              fontWeight: "500",
              fontStyle: "italic",
              color: colors.gray[900],
              borderLeftWidth: "0.25rem",
              borderLeftColor: theme("colors.brand.DEFAULT"),
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
            },
            "ol > li::before": {
              content:
                'counter(list-item, var(--list-counter-style, decimal)) "."',
              position: "absolute",
              fontWeight: "400",
              color: theme("colors.brand.DEFAULT"),
            },
            "ul > li::before": {
              content: '""',
              position: "absolute",
              backgroundColor: theme("colors.brand.DEFAULT"),
              borderRadius: "50%",
            },
          },
        },
      }),
    },
  },
  corePlugins: {},
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
