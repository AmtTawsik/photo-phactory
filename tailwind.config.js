/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#b9e57b",

          secondary: "#45a5a4",

          accent: "#52c938",

          neutral: "#14181F",

          "base-100": "#4E2E5C",

          info: "#99D5F5",

          success: "#41DC99",

          warning: "#DA8207",

          error: "#EE7274",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
