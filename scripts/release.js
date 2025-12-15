const { join } = require("path")
const { readdirSync, copyFileSync } = require("fs")
const { exec } = require("child_process")
const { readJson, writeJson } = require("./tool")

function main() {

    const Vue3AppInfo = readJson(join(__dirname, "../package.json"))
    const packageNames = readdirSync(join(__dirname, "../packages/"))

    // 求解发布命令
    let publishCommand = "npm publish --access public"
    const versionExec = /\d+\.\d+\.\d+-([^.]+)(\.\d+)?/.exec(Vue3AppInfo.version)
    if (versionExec) {
        if (["alpha", "beta"].includes(versionExec[1])) {
            publishCommand += " --tag=" + versionExec[1]
        } else {
            throw new Error("invalid tag：" + versionExec[1])
        }
    }

    // 一个个打包发布
    (function publishPackage(index) {
        if (index >= packageNames.length) return

        const packageName = packageNames[index]
        const packagePath = join(__dirname, "../packages/", packageName, "/")

        // 修改版本号
        const packageInfo = readJson(join(packagePath, "package.json"))
        packageInfo.version = Vue3AppInfo.version
        writeJson(join(packagePath, "package.json"), packageInfo)

        // 复制文件
        const items = ["CHANGELOG", "AUTHORS.txt", ".mailmap", "LICENSE", "README.md"]
        items.forEach(item => {
            copyFileSync(join(__dirname, "../", item), join(packagePath, item))
        })

        // 发布
        console.log(publishCommand + " \x1b[34m\x1b[43m " + packageInfo.name + "@" + packageInfo.version + " \x1b[0m")
        const child = exec(publishCommand, {
            cwd: packagePath
        })

        child.stderr.on('data', (error) => {
            console.log("\x1b[31m" + error + "\x1b[0m")
        })

        child.stdout.on('data', (data) => {
            console.log(data)

            // 如果前一个成功，继续发布下一个
            publishPackage(index + 1)
        })

    })(0)
}

main()