/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Outfit"', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        snack: {
          amber: '#E8A838',
          brown: '#5C4033',
          cream: '#F5F0E6',
          olive: '#4A5D23',
        },
      },
    },
  },
  plugins: [],
};
