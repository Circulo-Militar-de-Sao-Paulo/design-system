import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { resolve } from "path";
import glob from "glob";
import dtsPlugin from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), dtsPlugin({ include: ["src"] })],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			formats: ["es"],
		},
		rollupOptions: {
			external: ["react", "react/jsx-runtime"],
			input: glob.sync("src/**/*.{ts,tsx}", {
				ignore: "lib/**/*.stories.tsx",
			}),
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
});
