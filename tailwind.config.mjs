/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			height: {
        screen: ['100vh /* fallback for Opera, IE and etc. */', '100dvh'],
      },
			width: {
        screen: ['100vw /* fallback for Opera, IE and etc. */', '100dvw'],
      }
		},
	},
	plugins: [],
}
