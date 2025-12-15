const { readFileSync, writeFileSync } = require("fs")

exports.readJson = function (filepath) {
    try {
        return JSON.parse(readFileSync(filepath, { encoding: "utf-8" }))
    } catch (e) {
        return {}
    }
}

exports.writeJson = function (filepath, content) {
    writeFileSync(filepath, JSON.stringify(content, null, 2), {
        encoding: "utf-8"
    })
}