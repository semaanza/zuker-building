/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}"],
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				"hero-pattern": "url('')",
			}),
		},
	},
	plugins: [],
}
