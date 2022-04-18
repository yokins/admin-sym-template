<template>
    <main-page>
        <n-card title="卡片插槽示例">
            <template #header-extra> #header-extra </template>
            卡片内容
            <template #footer> #footer </template>
            <template #action> #action </template>
        </n-card>
    </main-page>
</template>

<script>
import MainPage from "@/components/pages/MainPage.vue";

export default {
    components: {
        MainPage
    }
};
</script>
