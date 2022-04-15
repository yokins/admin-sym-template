<template>
    <n-layout>
        <n-layout-header bordered>
        </n-layout-header>

        <n-layout-content embedded content-style="padding: 24px;">
            平山道
        </n-layout-content>

        <bbs-footer></bbs-footer>
    </n-layout>
</template>

<script>
import { useGlobalStore } from "@/store/modules/global.js";
import { mapState } from "pinia";
import BbsFooter from "./Bbs/Footer.vue";

export default {
    name: "BbsLayout",

    components: {
        BbsFooter
    },

    data() {
        return {};
    },

    computed: {
        ...mapState(useGlobalStore, ["sideWidth"])
    },

    inject: ["setTheme"]
};
</script>
