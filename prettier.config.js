// prettier.config.js

/**
 * @type {import("prettier").Config}
 */
const config = {
  trailingComma: "es5",
  tabWidth: 4,
  semi: false,
  singleQuote: true,

  // ADD THIS ↓↓↓
  plugins: ["prettier-plugin-tailwindcss"],

  // Optional: organize imports automatically
  importOrder: ["^react", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}

export default config















// // prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

// /**
//  * @see https://prettier.io/docs/configuration
//  * @type {import("prettier").Config}
//  */
// const config = {
//   trailingComma: "es5",
//   tabWidth: 4,
//   semi: false,
//   singleQuote: true,
// };

// export default config;


