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
				text: '#042A29',
				textDark: '#C5DDDA',
				bg: '#C5DDDA',
				bgDark: '#024539',
				scYellow: '#F1FF46'
			}
		}
	},
	plugins: []
};
