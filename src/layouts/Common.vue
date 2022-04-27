<template>
    <div class="common_layout">
        <router-view :key="`common.${$route.name}`"></router-view>
    </div>
</template>

<script>
import { useMessage } from "naive-ui";

export default {
    name: "CommonLayout",
    created() {
        window.$message = useMessage();
    },
};
</script>
