/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile-one': '360px',
        'mobile-two': '375px',
        'mobile-three': '390px',
        'mobile-four': '412px',
        'mobile-five': '428px',
      },
    }
  },
  plugins: [
  ],
}