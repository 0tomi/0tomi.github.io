// @ts-check

import svelte from '@astrojs/svelte';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://0tomi.github.io',
	// Enable Svelte to support Svelte components.
	integrations: [svelte()],
});
