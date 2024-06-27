await Bun.build({
	entrypoints: ["src/index.tsx"],
	outdir: "dist",
	external: ["react", "react-dom", "mantine"],
});
