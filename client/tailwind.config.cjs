const path = require("path");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    path.resolve(__dirname, "..", "server", "public", "index.html"),
  ],
  theme: {
    screens: {
      xxs: "350px",
      xs: "500px",
      ...defaultTheme.screens,
    },

    extend: {
      colors: {
        primary: "#1B73E8",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
