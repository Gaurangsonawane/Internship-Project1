/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // Ensure this path covers your files
  theme: {
    extend: {
      colors: {
        background: "#fff8e1",
        primary: "#ff6b6b",
        "primary-dark": "#e63946",
        secondary: "#4ecdc4",
        "secondary-dark": "#3baea0",
        accent: "#45b7d1",
        text: "#2c3e50",
      },
    },
  },
  plugins: [],
};
