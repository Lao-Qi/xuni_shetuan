import { mkdirSync, readFileSync, readdirSync, existsSync, statSync } from "fs"
import copy from "copy"
import { join } from "path"

const dir = join(__dirname, "../")
const targetDir = join(__dirname, "../dist")

export async function copyFiles() {
    const packageJson = JSON.parse(readFileSync(join(dir, "./package.json"), "utf-8"))
    cp([join(dir, "./package.json"), join(dir, "./Dockerfile")], targetDir)

    // copy dependencies package
    Object.keys(packageJson.dependencies).map(pakName => {
        copyDir(join(dir, "node_modules", pakName), join(targetDir, "node_modules"))
    })
}

function cp(src: string | string[], target: string, dir: boolean = false) {
    return new Promise((res, rej) => {
        copy(src, target, (err) => {
            err ? rej(err) : res(null)
        })
    })
}

function copyDir(src: string, target: string) {
    if (!statSync(src).isDirectory()) {
        throw new Error(`${src} is not dir`)
    }

    if (!statSync(target).isDirectory()) {
        throw new Error(`${src} is not dir`)
    }

    if (!existsSync(target)) {
        mkdirSync(target)
    }

    for (const [_, file] of Object.entries(readdirSync(src))) {
        const filepath = join(src, file)
        const filestate = statSync(filepath)

        if (filestate.isDirectory()) {
            copyDir(filepath, join(target, file))
        } else if (filestate.isFile()) {
            cp(filepath, target)
        }
    }
}