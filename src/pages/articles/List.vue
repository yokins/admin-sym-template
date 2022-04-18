<template>
    <n-card :bordered="false"> 卡片内容 </n-card>
</template>

<script>
export default {
    inject: ["setTitle"],
    created() {
        this.setTitle(this.$t(`articles.kind.${this.$route.params.kind}`))
    }
};
</script>
