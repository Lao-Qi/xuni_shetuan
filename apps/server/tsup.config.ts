import { defineConfig } from "tsup"
// import { copyFiles } from "./scripts/copy"

export default defineConfig({
    entry: ["./src/index.ts"],
    format: ["cjs"],
    platform: "node",
    minify: true,
    dts: false,
    splitting: true,
    sourcemap: false,
    clean: true,
    outDir: "./dist",
    publicDir: "../web/build",
    treeshake: true,
    bundle: true,
})