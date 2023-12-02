/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#2c3e50',
				secondary: '#e74c3c'
			}
		}
	},
	plugins: []
};
