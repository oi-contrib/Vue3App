"use strict";

Object.defineProperty(exports, "__esModule", { value: true })

const VitePlugin = require("@vue3app/" + process.env.VUE3APP_PLATFORM)

function Vue3AppPlugin() {
    let plugins = []

    for (let pluginName in VitePlugin) {
        plugins.push(VitePlugin[pluginName]())
    }

    // 解析Vue文件
    const plugin_vue = require("@vitejs/plugin-vue").default
    plugins.push(plugin_vue())

    return plugins
}

exports.default = Vue3AppPlugin