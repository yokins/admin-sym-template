import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import compress from "vite-plugin-compress";
import content from "@originjs/vite-plugin-content";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
// import ViteRestart from "vite-plugin-restart"; 暂未使用

export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js"
        }
    },
    plugins: [
        content(),
        vue(),
        vueI18n({
            compositionOnly: false,
            runtimeOnly: false,
            include: path.resolve(__dirname, "src/i18n/locales/**")
        }),
        legacy({
            targets: ["ie >= 11"],
            additionalLegacyPolyfills: ["regenerator-runtime/runtime"]
        }),
        compress(),
        viteImagemin({
            gifsicle: {
                optimizationLevel: 7,
                interlaced: false
            },
            optipng: {
                optimizationLevel: 7
            },
            mozjpeg: {
                quality: 20
            },
            pngquant: {
                quality: [0.8, 0.9],
                speed: 4
            },
            svgo: {
                plugins: [
                    {
                        name: "removeViewBox"
                    },
                    {
                        name: "removeEmptyAttrs",
                        active: false
                    }
                ]
            }
        })
        // ViteRestart({
        //     restart: ["vite.config.[jt]s"]
        // })
    ]
});
