import { defineConfig } from "tsup"
import { join } from "path"
import { copyFile } from "fs/promises"

export default defineConfig({
    entry: ["./src/index.ts"],
    format: ["cjs"],
    platform: "node",
    minify: true,
    dts: false,
    splitting: true,
    sourcemap: false,
    clean: true,
    outDir: "../../output/apps/server",
    treeshake: true,
    async onSuccess() {
        await copyFile(join(__dirname, "./package.json"), "../../output/apps/server/package.json")

        /** copy project config files */
        await copyFile(join(__dirname, "../../package.json"), "../../output/package.json")
        await copyFile(join(__dirname, "../../pnpm-lock.yaml"), "../../output/pnpm-lock.yaml")
        await copyFile(join(__dirname, "../../pnpm-workspace.yaml"), "../../output/pnpm-workspace.yaml")
    },
})