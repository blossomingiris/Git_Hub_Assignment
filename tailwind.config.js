/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'greyLight-1': '#eaeff5',
        'greyLight-2': '#c8d0e7',
        'greyLight-3': '#bec8e4',
        'greyDark-1': '#4a5568',
        'greyDark-2': '#9baacf',
        'accent-color': '	#9457EB',
        'gradient-pink': '#d53f8c',
        'gradient-orange': '#FFAD00',
        'greyDark-3': '#2d2b33',
        'greyDark-4': 'rgba(77, 71, 100, 0.4)',
        'greyDark-5': 'rgba(0, 0, 0, 0.2)',
      },
      boxShadow: {
        'outer-shadow':
          '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #fff',
        'inner-shadow':
          'inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #fff',
        'outer-shadow-dark':
          '10px 10px 20px 5px rgba(0, 0, 0, 0.2),-10px -10px 20px 5px rgba(77, 71, 100, 0.4), -1px -1px 4px 2px rgba(77, 71, 100, 0.4)',
        'inner-shadow-dark':
          'inset 5px 5px 8px 1px rgba(0, 0, 0, 0.2), inset -5px -5px 8px 0px rgba(77, 71, 100, 0.4), inset -1px -2px 2px 0px rgba(77, 71, 100, 0.4)',
      },
    },
  },
  plugins: [],
}
