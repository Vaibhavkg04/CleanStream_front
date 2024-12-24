import { defineConfig } from "vite";

export default defineConfig({
	plugins: [],
	resolve: {
		alias: {
			"@": "/src", // Example alias, adjust it to your project structure
		},
	},
	build: {
		json: {
			stringify: true, // Make sure Vite can handle JSON correctly
		},
	},
});
