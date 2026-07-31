/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/*.html",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          black:       '#14212c',   /* navy muy oscuro: top-bar / hero / secciones oscuras */
          dark:        '#1f3648',   /* navy panel: áreas y responsabilidades */
          steel:       '#355874',   /* azul acero real del logo Liver Tech */
          steelLight:  '#4a7297',
          orange:      '#e8811f',   /* naranja real del logo Liver Tech */
          orangeLight: '#c96a13',   /* hover naranja oscuro */
          gold:        '#e8811f',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
        display: ['Oswald', 'Arial', 'sans-serif'],
      },
      clipPath: {
        angle: 'polygon(0 0, 100% 0, 94% 100%, 0% 100%)',
      },
    },
  },
  plugins: [],
};
