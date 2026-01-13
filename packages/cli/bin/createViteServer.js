const { createServer } = require("vite")
const { performance } = require('perf_hooks')

module.exports = function (option) {

    // https://cn.vitejs.dev/guide/api-javascript
    createServer({
        root: option.root
    }).then(server => {
        server.listen().then(() => {
            const logger = server.config.logger
            logger.info(`\nvite v${require('vite/package.json').version}\ndev server running at:\n`, {
                clear: !server.config.logger.hasWarned,
            })

            server.printUrls()

            const startupDuration = performance.now() - global.__vite_start_time
            console.log('\nVue3App compiled \x1b[1m\x1b[32msuccessfully\x1b[0m in ' + Math.ceil(startupDuration) + ' ms\n')
        })
    })
}