module.exports = function (platform) {
    return {
        input: platform === "web" ? "@virtual:/index.html" : "@virtual:/index.js",
        output: platform === "web" ? {} : {
            entryFileNames: "[name].js",
            chunkFileNames: "[name].js",
            assetFileNames: "[name].[ext]"
        }
    }
}