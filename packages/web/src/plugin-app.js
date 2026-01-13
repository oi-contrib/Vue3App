exports.PluginApp = function () {
    return {
        name: "PluginApp",
        transform(code, id, opt) {
            if(/App\.vue$/.test(id)){
                return `
                <template>
                    <router-view></router-view>
                </template>
                ${code}`
            }else{
                return code
            }
        }
    }
}