/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'billions': ['Billion Dreams', 'Heveltica', 'sans-serif'],
        'lining': ['Bold Lining', 'Heveltica', 'sans-serif'],
        'crafter': ['Crafter', 'Heveltica', 'sans-serif'],
        'sophia': ['Sophia', 'Heveltica', 'sans-serif'],
        'hazelnut': ['Wild Hazelnut', 'Heveltica', 'sans-serif']
      }
    },
  },
  plugins: [],
};
