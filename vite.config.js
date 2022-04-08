import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import content from "@originjs/vite-plugin-content";
import vueI18n from "@intlify/vite-plugin-vue-i18n";


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
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
    ]
});