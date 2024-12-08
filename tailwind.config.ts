import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			serif: ['Lora Variable', 'Lora', 'serif']
		}
	},

	plugins: [typography]
} satisfies Config;
