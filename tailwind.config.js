/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				scp: ['Source Code Pro', ...defaultTheme.fontFamily.sans]
			},
			colors: {
				primary: '#2c3e50',
				secondary: '#e74c3c'
			}
		}
	},
	plugins: []
};
