import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import legacy from "@vitejs/plugin-legacy";
import compress from "vite-plugin-compress";
import viteImagemin from "vite-plugin-imagemin";
import content from "@originjs/vite-plugin-content";
import vueI18n from "@intlify/vite-plugin-vue-i18n";
import Components from "unplugin-vue-components/vite";
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

const timestamp = new Date().getTime();

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
        Components({
            resolvers: [NaiveUiResolver()]
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
    ],
    build: {
        rollupOptions: {
            output: {
                entryFileNames: `assets/[name].${timestamp}.js`,
                chunkFileNames: `assets/[name].${timestamp}.js`,
                assetFileNames: `assets/[name].${timestamp}.[ext]`
            }
        }
    }
});
