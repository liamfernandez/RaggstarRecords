/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "primary": "#6B0080", // purple
        "secondary": "#8dcaec", // light blue
        "tertiary": "#008080", // teal
        "accent": "#f6ae2d", // yellow
        "darkGrey": "#3E3E3E", // dark grey
        "midGrey": "#545454", // medium grey
        "lightGrey": "#6A6A6A", // light grey
      },
      fontFamily: {
        "lato": ["Lato", "sans-serif"],
        "openSans": ["Open Sans", "sans-serif"],
        "lucida-regular": ["Lucida-Regular", "sans-serif"],
        "lucida-bold": ["Lucida-Bold", "sans-serif"],
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: false
  }
}

