import { sveltekit } from 'npm:@sveltejs/kit/vite';
import { defineConfig } from 'npm:vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
