<template>
    <n-card content-style="padding-top: 0;padding-bottom: 0px;">
        <n-list>
            <n-list-item v-for="item in list" :key="item">
                <template #prefix>
                    <n-avatar
                        round
                        size="large"
                        src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                    />
                </template>
                <n-thing>
                    <template #header> Rails 7 正式发布（译文） </template>

                    <template #header-extra>
                        <n-tag type="success" round> 6 </n-tag>
                    </template>

                    <template #footer>
                        <n-text depth="3"> Tertiary Depth </n-text>
                        <n-text depth="1"> 最后由 </n-text>
                        <n-text depth="3"> Tertiary Depth </n-text>
                        <n-text depth="1"> 回复于 </n-text>
                        <n-text depth="3"> Tertiary Depth </n-text>
                    </template>
                </n-thing>
            </n-list-item>
        </n-list>
        <n-pagination
            v-model:page="page"
            v-model:page-size="pageSize"
            :page-count="100"
            show-size-picker
            :page-sizes="[10, 20, 30, 40]"
        />
    </n-card>
</template>

<script>
export default {
    inject: ["setTitle"],

    data() {
        return {
            list: 10,
            page: 1,
            pageSize: 20
        };
    },

    created() {
        this.setTitle(this.$t(`articles.kind.${this.$route.params.kind}`));
    }
};
</script>
