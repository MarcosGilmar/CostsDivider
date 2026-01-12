/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        "heading-lg": ["20px", "1.3"],
        "heading-sm": ["14px", "1.3"],

        "label-lg": ["20px", "1.5"],
        "label-md": ["16px", "1.5"],
        "label-sm": ["14px", "1.5"],

        "text-md": ["16px", "1.5"],
        "text-xs": ["12px", "1.5"],
      },
    },
  },
  plugins: [],
}