/** @type {import('tailwindcss').Config} */
const { default: themes } = require("daisyui/src/colors/themes")


module.exports = {

  content: ["./src/**/*.{html,js,svelte}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
   // daisyUI config (optional)
   daisyui: {
    // styled: true,
    themes: ["garden", "forest"],
    // base: true,
    // utils: true,
    // logs: true,
    // rtl: false,
    // prefix: "",
    darkTheme: "forest",
  },
  
}