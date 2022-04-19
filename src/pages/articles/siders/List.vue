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

        <n-card title="活跃人员"> </n-card>

        <n-card title="统计信息">
            会员数：1000 个
            <n-divider />
            文章数：1234 篇
            <n-divider />
            评论数：3429 条
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
        return {};
    },

    methods: {
        onClickAdd() {
            this.$router.push({ name: "articles.new" });
        }
    }
};
</script>
