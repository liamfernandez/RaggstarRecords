import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'Futura': ['FuturaLTW01-Medium', 'sans-serif'],
      'Druk': ['Druk', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: false
  }
}

