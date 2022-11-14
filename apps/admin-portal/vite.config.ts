import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		minify: false,
		sourcemap: true,
		emptyOutDir: true,
	},
  server: {
    host: true,
    port:3000
  },
	optimizeDeps: {},

	plugins: [react()],
});
