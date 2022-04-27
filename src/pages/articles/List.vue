<template>
    <n-card
        v-if="list.length > 0"
        content-style="padding-top: 0;padding-bottom: 0px;"
    >
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
                    <template #header>
                        <n-text
                            style="cursor: pointer"
                            @click="onClickToDetail(1)"
                        >
                            Rails 7 正式发布（译文）
                        </n-text>
                    </template>

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
            style="margin-bottom: 20px"
            v-model:page="page"
            v-model:page-size="pageSize"
            :page-count="100"
            show-size-picker
            :page-sizes="[10, 20, 30, 40]"
        />
    </n-card>

    <empty v-else></empty>
</template>

<script>
import Empty from '@/components/pages/Empty.vue';

export default {
    components: {
        Empty
    },

    inject: ["setTitle"],

    data() {
        return {
            list: 10,
            page: 1,
            pageSize: 20
        };
    },

    async created() {
        this.setTitle(this.$t(`articles.kind.${this.$route.params.kind}`));
        await this.loadData();
    },

    methods: {
        async loadData() {
            const res = await this.$api.articles.list().catch(() => {});
            if (!res) return false;
            this.list = res.data.articles;
        },

        onClickToDetail(id) {
            this.$router.push({
                name: "articles.detail",
                params: { id: 1 }
            });
        }
    }
};
</script>
