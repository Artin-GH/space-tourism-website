const { fromString, fromRgba } = require("css-color-converter");

module.exports = {
  plugins: {
    "postcss-mixins": {
      mixins: {
        'breakpoint-up': (mixin, min) => ({
          [`@media (min-width: ${min})`]: {
            "@mixin-content": {},
          },
        }),
        'breakpoint-down': (mixin, max) => ({
          [`@media (max-width: calc(${max} - 2px))`]: {
            "@mixin-content": {},
          },
        }),
        'breakpoint-between': (mixin, min, max) => ({
          [`@media (min-width: ${min}) and (max-width: calc(${max} - 1px))`]: {
            "@mixin-content": {},
          },
        }),
      },
    },
    "postcss-import": {},
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
    "postcss-functions": {
      functions: {
        'to-rgba': (value, frac) => {
          const rgba = fromString(value).toRgbaArray();
          rgba[3] = parseFloat(frac);
          return fromRgba(rgba).toHexString();
        },
      },
    },
  },
};
