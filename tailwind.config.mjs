/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	safelist: [
		"list-outside",
		"list-disc",
		"text-tulip-tree",
		"h-6",
		"w-6"
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
				ocean: "#077da0",
				mirage: "#111827",
				"tulip-tree": "#e3b440",
				"iron": "#d1d5db",
				"santa-grey": "#9CA3AF",
				"mercury": "#E5E7EB",
				"pale-sky": "#6B7280",
				"davy-grey": "#4B5563"
			},
			spacing: {
				"96": "24rem",
				"128": "32rem",
			},
			width: (theme) => ({
				"100pixel": "100px"
			}),
			height: (theme) => ({
				"screen/2": "50vh",
				"screen/3": "calc(100vh / 3)",
				"screen/4": "calc(100vh / 4)",
				"screen/5": "calc(100vh / 5)",
				"screen/75": "75vh",
				"screen/55": "55vh",
				"144": "40rem",
				"100pixel": "100px"
			}),
			boxShadow: {
				"xl-black": '0 10px 10px -12px rgba(0, 0, 0, 5)',
				"2xl-black": '0 25px 50px -12px rgba(0, 0, 0, 5)',
				"2xl-tulip-tree": '10px 10px 50px -20px rgba(231, 166, 26, 1)',
				"2xl-ocean": '10px 10px 50px -20px rgba(7, 125, 160, 1)',
			}
		}
	},
	plugins: [],
	darkMode: "class"
}
