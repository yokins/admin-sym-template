<template>
    <n-space>
        <n-text depth="3" @click="onClickToLogin"> 登录 </n-text>
    </n-space>
</template>

<script>
export default {
    methods: {
        onClickToLogin() {
            this.$router.push({
                name: "auth.login"
            });
        }
    }
};
</script>
