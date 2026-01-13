exports.PluginIndex = function () {

    return {
        name: "PluginIndex",
        resolveId(id) {
            if (id === "@virtual:/index.js") {
                return process.env.VUE3APP_ROOT + "/common/app.ts"
            }
        },
        load(id) {
            if (id === process.env.VUE3APP_ROOT + "/common/app.ts") return ""
        }
    }
}