/** @type {import('tailwindcss').Config} */
import fluid, { extract } from 'fluid-tailwind'
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extract,
    extend: {
      fontFamily : {
        
      }
    },
  },
  plugins: [fluid],
}

