/** @type {import("tailwindcss").Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        basic: "4.375rem" //70px
      },
      minWidth: {
        basic: "4.375rem" //70px
      },
      height: {
        basic: "4.375rem" //70px
      },
      minHeight: {
        basic: "4.375rem" //70px
      },
      colors: {
        webschool: {//darkmode
          first: "#0044FF",
          100: "#7B7A7A",
          200: "#252525",
          300: "#181818",
          400: "#131313",
        }
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("tailwindcss"),
    // eslint-disable-next-line no-undef
    require("autoprefixer"),
    // eslint-disable-next-line no-undef
    require("tailwind-scrollbar")
  ],
}

