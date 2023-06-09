/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
