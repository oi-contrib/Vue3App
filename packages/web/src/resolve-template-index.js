const { join } = require("path")
const { readFileSync } = require("fs")

let normalizeStyle = readFileSync(join(__dirname, "./styles/normalize.css"), {
    encoding: "utf8"
})

let commonStyle = readFileSync(join(__dirname, "./styles/common.css"), {
    encoding: "utf8"
})

const pages = require(join(process.env.VUE3APP_ROOT, "./src/pages.json"))
module.exports = function () {

    return `<!DOCTYPE html>
    <html lang="zh-cn">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${pages.globalStyle.navigationBarTitleText}</title>
        <link rel="shortcut icon" href="/src/static/logo.png" type="image/x-icon">
        <style>${normalizeStyle}</style>
        <style>${commonStyle}</style>
    </head>

    <body>
        <div id="root"></div>
        <script type="module" src="/src/main.ts"></script>
    </body>

    </html>`

}