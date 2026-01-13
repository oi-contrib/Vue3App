import { defineConfig } from "vite"
import Vue3AppPlugin from "@vue3app/plugin"
import { resolve } from "path"

export default defineConfig({
    base: "./",
    plugins: [Vue3AppPlugin()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        },
    },
    server: {
        host: "0.0.0.0",
        port: 8080,
    },
});