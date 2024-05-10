/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        inter: ['Inter']
      },
      colors: {
        firstColor: '#fee6da',
        secondColor: '#ec9c7b',
        thirdColor: '#f7c8b4',
        lineColor: '#dcc5bb',
        white2Color: '#9c9fa8',
        white3Color: '#fbd4be',
        black: '#575a59'
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
}

