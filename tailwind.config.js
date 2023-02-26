/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'greyLight-1': '#eaeff5',
        'greyLight-2': '#c8d0e7',
        'greyLight-3': '#bec8e4',
        'greyDark-1': '#4a5568',
        'greyDark-2': '#9baacf',
        'accent-color': '	#9370DB',
        'gradient-pink': '#d53f8c',
        'gradient-orange': '#ff7b72',
      },
      boxShadow: {
        'outer-shadow':
          '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #fff',
        'inner-shadow':
          'inset 0.2rem 0.2rem 0.5rem #c8d0e7, inset -0.2rem -0.2rem 0.5rem #fff',
      },
    },
  },
  plugins: [],
}
