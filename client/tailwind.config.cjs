const path = require("path");

module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    path.resolve(__dirname, "..", "server", "public", "index.html"),
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B73E8",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
