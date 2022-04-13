<template>
    <div class="admin_layout">
        <router-view :key="`admin.${$route.name}`"></router-view>

        <n-button @click="setTheme('dark')">黑色</n-button>
        <n-button @click="setTheme('light')">亮色</n-button>
    </div>

    <n-layout>
        <n-layout-header>颐和园路</n-layout-header>
        <n-layout-content content-style="padding: 24px;">
            平山道
        </n-layout-content>
        <n-layout-footer>成府路</n-layout-footer>
    </n-layout>
    <n-layout>
        <n-layout-header>颐和园路</n-layout-header>
        <n-layout has-sider>
            <n-layout-sider content-style="padding: 24px;">
                海淀桥
            </n-layout-sider>
            <n-layout-content content-style="padding: 24px;">
                平山道
            </n-layout-content>
        </n-layout>
        <n-layout-footer>成府路</n-layout-footer>
    </n-layout>
    <n-layout has-sider>
        <n-layout-sider content-style="padding: 24px;"> 海淀桥 </n-layout-sider>
        <n-layout>
            <n-layout-header>颐和园路</n-layout-header>
            <n-layout-content content-style="padding: 24px;">
                平山道
            </n-layout-content>
            <n-layout-footer>成府路</n-layout-footer>
        </n-layout>
    </n-layout>
</template>

<script>
export default {
    name: "AdminLayout",

    inject: ["setTheme"]
};
</script>
