/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('./config/colors.json');

const colorClasses = [];
for (let colorKey in colors) {
	colorClasses.push('bg-' + colorKey);
	colorClasses.push('text-' + colorKey);
	colorClasses.push('fill-' + colorKey);
}

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: [
		...colorClasses
	],
	theme: {		
		screens: {
			sm: "375px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		fontFamily: {
			sans: [
				'Poppins',
				...defaultTheme.fontFamily.sans
			],
		},
		borderWidth: {
			default: "1px",
			"0": "0",
			"2": "2px",
			"4": "4px",
		},
		minHeight: {
			'0': '0',
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
			'full': '100%',
			'56': "56px"
		},
		extend: {
			colors: { 
				...colors
			},
			spacing: {
				"96": "24rem",
				"128": "32rem",
			},
			width: (theme) => ({
				"100pixel": "100px"
			}),
			height: (theme) => ({			
				"144": "40rem",
				"100pixel": "100px"
			}),
			boxShadow: {
				"xl-black": '0 10px 10px -12px rgba(0, 0, 0, 5)',
				"2xl-black": '0 25px 50px -12px rgba(0, 0, 0, 5)',
				"3xl-tulip": '37px 27px 50px -20px rgba(231,166,26,0.61);',
				"3xl-ocean": '37px 27px 50px -20px rgba(7, 125, 160, 1)',
			}
		}  
	},
	plugins: [],
	darkMode: "class"
}
