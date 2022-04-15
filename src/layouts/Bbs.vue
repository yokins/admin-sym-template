<template>
        <n-layout>
                    <bbs-header></bbs-header>

            <n-layout-content embedded :content-style="contentStyles">
                平山道
            </n-layout-content>
                    <bbs-footer></bbs-footer>

        </n-layout>
</template>

<script>
import { useGlobalStore } from "@/store/modules/global.js";
import { mapState } from "pinia";
import BbsFooter from "./Bbs/Footer.vue";
import BbsHeader from "./Bbs/Header.vue";

export default {
    name: "BbsLayout",

    components: {
        BbsHeader,
        BbsFooter
    },

    inject: ["setTheme"],

    data() {
        return {
            contentStyles: {
                minHeight: "calc(100vh - 50px - 30px - 20px - 20px)",
                maxWidth: "1280px",
                marginTop: "20px",
                marginBottom: "20px",
                marginLeft: "auto",
                marginRight: "auto"
            }
        };
    },

    computed: {
        ...mapState(useGlobalStore, ["sideWidth"])
    }
};
</script>
