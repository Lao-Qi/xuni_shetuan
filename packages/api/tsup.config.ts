import { defineConfig } from "tsup"

export default defineConfig({
    entry: ["./index.ts"],
    format: ["cjs"],
    platform: "node",
    minify: true,
    dts: false,
    splitting: true,
    sourcemap: false,
    clean: true,
    outDir: "./dist",
})