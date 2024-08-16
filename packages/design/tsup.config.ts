import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["index.ts"],
	dts: true,
	sourcemap: true,
	clean: false,
	format: ["esm"],
	watch: true,
});
