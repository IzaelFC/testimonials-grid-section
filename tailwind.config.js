/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens : {
      'md' : '1044px',
      'sm' : '375px'
    }
  },
  plugins: [],
}