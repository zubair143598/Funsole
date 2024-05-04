/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        "orange":"#FADA4F",
        "red":"#AF0205",
        "light_red":"#AF020",
        "slate":"#334155",
      },
     screens :{
      sm:"640px",
      md:"768px",
      lg:"1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4xl": "2560px",
      "5xl": "3000px",
     }
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}
