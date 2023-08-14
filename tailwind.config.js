/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#292524",
        secondary: "#9ca3af",
      }
    },
    backgroundImage: {
      Hero: "url('assets/Hero.png')",
    },
  },
  plugins: [],
}
