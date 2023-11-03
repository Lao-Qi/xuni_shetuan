import { defineConfig } from "tsup"
import { join } from "path"
import { copyFile } from "fs/promises"

export default defineConfig({
    entry: ["./index.ts"],
    format: ["cjs"],
    platform: "node",
    minify: true,
    dts: false,
    splitting: true,
    sourcemap: false,
    clean: true,
    outDir: "../../output/packages/database",
    async onSuccess() {
        await copyFile(join(__dirname, "./package.json"), "../../output/packages/database/package.json")
    },
})