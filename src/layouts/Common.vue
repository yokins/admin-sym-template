<template>
    <div class="common_layout">
        <router-view :key="`common.${$route.name}`"></router-view>
    </div>
</template>

<script>
export default {
    name: "CommonLayout"
};
</script>
