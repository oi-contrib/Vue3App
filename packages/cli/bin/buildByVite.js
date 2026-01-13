const { build } = require("vite")

module.exports = function (option) {
    return new Promise(resolve => {

        // https://cn.vitejs.dev/guide/api-javascript#build
        build(option).then(watcher => {
            resolve(watcher)
        })

    })
}