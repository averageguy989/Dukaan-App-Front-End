
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#0e4f82",
          300: "#353c53",
          500: "#1e2640",
          700: "#2596be",
          900: "#146eb4"
        },
        gray: {
          900: "#fafafa"
        },
        black: {
          500: "#999999"
        }
      }
      
    },
  },
  plugins: [],
}
