/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  theme: {
    extend: {
      letterSpacing: {
        sempit:'-0.5em',
        lebarbet: '.7em',
      },
      width: {
        128: '32rem',
      },
    },
  },
  plugins: [],
}

