<template>
    <n-space vertical>
        <n-card>
            <n-button type="primary" block @click="onClickAdd">
                <template #icon>
                    <n-icon>
                        <TextEditStyle20Filled />
                    </n-icon>
                </template>
                {{ $t("articles.actions.new") }}
            </n-button>
        </n-card>

        <!-- <n-card title="活跃人员">
            <n-avatar-group :options="userOptions" :size="40" :max="3" />
        </n-card> -->

        <n-card title="统计信息">
            会员数：{{ counts.user_count }} 个
            <n-divider />
            文章数：{{ counts.article_count }} 篇
            <n-divider />
            评论数：{{ counts.comment_count }} 条
        </n-card>
    </n-space>
</template>

<script>
import { TextEditStyle20Filled } from "@vicons/fluent";
export default {
    components: {
        TextEditStyle20Filled
    },

    data() {
        return {
            // userOptions: [
            //     {
            //         name: "张三",
            //         src: "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
            //     },
            //     {
            //         name: "李四",
            //         src: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
            //     },
            //     {
            //         name: "王五",
            //         src: "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
            //     },
            //     {
            //         name: "赵六",
            //         src: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
            //     },
            //     {
            //         name: "七仔",
            //         src: "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
            //     }
            // ]
            counts: {
                user_count: 0,
                article_count: 0,
                comment_count: 0
            }
        };
    },

    async created() {
        await this.getCounts();
    },

    methods: {
        onClickAdd() {
            this.$router.push({ name: "articles.new" });
        },
        async getCounts() {
            const res = await this.$api.statistics.home().catch(() => {});
            if (!res) return false;
            this.counts = res.data;
        }
    }
};
</script>
