<template>
    <div class="admin_layout">
        <router-view :key="`admin.${$route.name}`"></router-view>
    </div>
</template>

<script>
export default {
    name: "AdminLayout"
};
</script>
