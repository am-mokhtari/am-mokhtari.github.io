/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "nescafe": "#c89d68",
      },
      backgroundImage: {
        'coffee': "url('./images/coffee_bg_200.jpg')",
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '200': '200px',
      }
    },
  },
  plugins: [],
}

