<template>
    <n-layout has-sider>
        <n-layout-sider bordered content-style="padding: 24px;" :width="sideWidth">
            海淀桥
        </n-layout-sider>
        <n-layout>
            <n-layout-header bordered>颐和园路</n-layout-header>
            <n-layout-content embedded content-style="padding: 24px;">
                平山道
                <router-view :key="`admin.${$route.name}`"></router-view>
                <n-button @click="setTheme('dark')">黑色</n-button>
                <n-button @click="setTheme('light')">亮色</n-button>
            </n-layout-content>
            <admin-footer></admin-footer>
        </n-layout>
    </n-layout>
</template>

<script>
import { useGlobalStore } from "@/store/modules/global.js";
import { mapState } from "pinia";
import AdminFooter from './Admin/Footer.vue';

export default {
    name: "AdminLayout",

    components: {
        AdminFooter
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
