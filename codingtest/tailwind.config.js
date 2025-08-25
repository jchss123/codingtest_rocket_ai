/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#222222",
          50: "#f6f6f6",
          100: "#e7e7e7",
        },
        accent: {
          DEFAULT: "#c084fc",
        },
      },
    },
  },
  plugins: [],
};

