const { join } = require("path")

exports.PluginMain = function () {
    return {
        name: "PluginMain",
        transform(code, id, opt) {
            if (/main\.ts$/.test(id)) {

                const pages = require(join(process.env.VUE3APP_ROOT, "./src/pages.json"))
                let routes = []

                if (pages.pages.length > 0) {
                    routes.push(`{
                        path:"/",
                        redirect:"/${pages.pages[0].path}"
                    }`)
                }

                for (let item of pages.pages) {
                    routes.push(`{
                        path:"/${item.path}",
                        component: () => import("./${item.path}.vue")
                    }`)
                }

                return `
                    import { createRouter, createWebHashHistory } from 'vue-router'
                    import apiFactory from '@vue3app/web/src/api.js'

                    ${code}
                    let app = createApp().app

                    let router=createRouter({
                        history: createWebHashHistory(),
                        routes:[${routes.join(",")}]
                    })
                    app.use(router)
                    window.vue3app = apiFactory(router)

                    app.mount('#root')
                `
            } else {
                return code
            }
        }
    }
}