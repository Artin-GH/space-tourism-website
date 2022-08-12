/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
const postcssFunctions =
  require("./postcss.config").plugins["postcss-functions"].functions;

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1025px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      barlow: ["'Barlow'", "sans-serif"],
      barlowCondensed: ["'Barlow Condensed'", "sans-serif"],
      bellefair: ["'Bellefair'", "serif"],
    },
    colors: {
      dark: "#0B0D17",
      blue: "#D0D6F9",
      white: "#FFFFFF",
    },
    fontSize: {
      14: "0.875rem",
      15: "0.9375rem",
      16: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      24: "1.5rem",
      28: "1.75rem",
      32: "2rem",
      40: "2.5rem",
      56: "3.5rem",
      64: "4rem",
      80: "5rem",
      100: "6.25rem",
      150: "9.375rem",
    },
    letterSpacing: {
      1.25: "0.078125rem",
      2: "0.125rem",
      2.35: "0.146875rem",
      2.7: "0.16875rem",
      3.4: "0.2125rem",
      4.75: "0.296875rem",
    },
    extend: {
      spacing: {
        px: "0.0625rem",
        15: "3.75rem",
      },
      backdropBlur: {
        "4xl": "85px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        html: {
          scrollBehavior: "smooth",
          fontFamily: "unset",
          height: "100vh",
        },
        body: {
          overflowX: "hidden",
          fontFamily: theme("fontFamily.barlow"),
          fontSize: theme("fontSize.15"),
          lineHeight: "167%",
          [`@media (min-width: ${theme("screens.sm")})`]: {
            fontSize: theme("fontSize.16"),
            lineHeight: "175%",
          },
          [`@media (min-width: ${theme("screens.lg")})`]: {
            fontSize: theme("fontSize.18"),
            lineHeight: "178%",
          },
          backgroundColor: theme("colors.dark"),
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "scroll",
        },
        "#__next": {
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        },
        main: {
          flexGrow: '1',
        }
      });
    }),
    plugin(function ({ addComponents, matchComponents, theme }) {
      matchComponents(
        {
          heading: (data) => ({
            fontFamily: data.fontFamily,
            lineHeight: "100%",
            fontSize: data.fontSize.DEFAULT,
            letterSpacing: data.letterSpacing.DEFAULT,
            [`@media (min-width: ${theme("screens.sm")})`]: {
              fontSize: data.fontSize.sm,
              letterSpacing: data.letterSpacing.sm,
            },
            [`@media (min-width: ${theme("screens.lg")})`]: {
              fontSize: data.fontSize.lg,
              letterSpacing: data.letterSpacing.lg,
            },
          }),
        },
        {
          values: {
            1: {
              fontSize: {
                DEFAULT: theme("fontSize.100"),
                sm: theme("fontSize.150"),
              },
              fontFamily: theme("fontFamily.bellefair"),
              letterSpacing: {},
            },
            2: {
              fontSize: {
                DEFAULT: theme("fontSize.64"),
                sm: theme("fontSize.80"),
                lg: theme("fontSize.100"),
              },
              fontFamily: theme("fontFamily.bellefair"),
              letterSpacing: {},
            },
            3: {
              fontSize: {
                DEFAULT: theme("fontSize.24"),
                sm: theme("fontSize.40"),
                lg: theme("fontSize.56"),
              },
              fontFamily: theme("fontFamily.bellefair"),
              letterSpacing: {},
            },
            4: {
              fontSize: {
                DEFAULT: theme("fontSize.16"),
                sm: theme("fontSize.24"),
                lg: theme("fontSize.32"),
              },
              fontFamily: theme("fontFamily.bellefair"),
              letterSpacing: {},
            },
            5: {
              fontSize: {
                DEFAULT: theme("fontSize.16"),
                sm: theme("fontSize.20"),
                lg: theme("fontSize.28"),
              },
              letterSpacing: {
                DEFAULT: theme("letterSpacing[2.7]"),
                sm: theme("letterSpacing[3.4]"),
                lg: theme("letterSpacing[4.75]"),
              },
              fontFamily: theme("fontFamily.barlowCondensed"),
            },
          },
        }
      );

      matchComponents(
        {
          subheading: (data) => ({
            fontFamily: data.fontFamily,
            fontSize: data.fontSize,
            letterSpacing: data.letterSpacing,
            lineHeight: "100%",
            textTransform: "uppercase",
          }),
        },
        {
          values: {
            1: {
              fontFamily: theme("fontFamily.bellefair"),
              fontSize: theme("fontSize.28"),
            },
            2: {
              fontFamily: theme("fontFamily.barlowCondensed"),
              fontSize: theme("fontSize.14"),
              letterSpacing: theme("letterSpacing[2.35]"),
            },
          },
        }
      );

      addComponents({
        ".nav-font": {
          fontFamily: theme("fontFamily.barlowCondensed"),
          lineHeight: "100%",
          fontSize: theme("fontSize.16"),
          letterSpacing: theme("letterSpacing[2.7]"),
          textTransform: "uppercase",
          [`@media (min-width: ${theme(
            "screens.sm"
          )}) and (max-width: calc(${theme("screens.lg")} - 2px))`]: {
            fontSize: theme("fontSize.14"),
            letterSpacing: theme("letterSpacing[2.35]"),
          },
        },
        ".number": {
          fontFamily: theme("fontFamily.barlowCondensed"),
          fontWeight: "bold",
          "&::before": { content: "'0'" },
        },
      });
    }),
  ],
};
