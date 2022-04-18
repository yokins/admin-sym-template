<template>
    <n-layout position="absolute">
        <n-layout-header bordered>
            <bbs-header></bbs-header>
        </n-layout-header>
        <n-layout
            embedded
            position="absolute"
            style="top: 51px"
            :native-scrollbar="false"
        >
            <n-layout-content embedded>
                <router-view :key="`bbs.${$route.name}`"></router-view>
            </n-layout-content>
            <bbs-footer></bbs-footer>
        </n-layout>
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

    computed: {
        ...mapState(useGlobalStore, ["sideWidth"])
    }
};
</script>
