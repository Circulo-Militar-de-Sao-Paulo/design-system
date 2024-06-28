import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/design-system/",
	plugins: [react(), tsconfigPaths(), dts({ include: ["src"] })],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			fileName: "index",
			formats: ["es"],
		},
		rollupOptions: {
			external: ["react", "react-dom"],
		},
	},
});
