interface Vue3AppType {

    /**
     * 保留当前页面，跳转到应用内的某个页面
     */
    navigateTo({

        /**
         * 路由地址
         */
        url: string

    }): void

}

/**
 * Vue3App 全局Api
 */
declare const vue3app: Vue3AppType