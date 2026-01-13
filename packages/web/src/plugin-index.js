const resolveTemplateIndex = require("./resolve-template-index.js")

// 参考： https://github.com/LL-Store/h5office/blob/master/build/vite-modules-plugin.ts

exports.PluginIndex = function () {
    return {
        name: "PluginIndex",
        resolveId(id) {
            if (id === "@virtual:/index.html") {
                return process.env.VUE3APP_ROOT + "/index.html"
            }
        },
        load(id) {
            if (id === process.env.VUE3APP_ROOT + "/index.html") return resolveTemplateIndex()
        },
        configureServer(server) {
            return () => {
                server.middlewares.use((req, res, next) => {

                    if (req.url === "/index.html") {
                        res.end(resolveTemplateIndex())
                    } else {
                        next()
                    }
                })
            }
        }
    }
}