/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Asegúrate de incluir todos los archivos HTML y TypeScript
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui:{
    themes: [
    "light",
    "dark",
    "cupcake",
    ]
    },
}
