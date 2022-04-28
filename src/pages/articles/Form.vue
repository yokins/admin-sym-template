<template>
    <main-page>
        <n-card :title="$t(`articles.actions.new`)">
            <n-space vertical>
                <n-input-group>
                    <n-select
                        v-model:value="form.topic_id"
                        :style="{ width: '20%' }"
                        :options="topics"
                        placeholder="请选择文章类型"
                    />
                    <n-input
                        v-model:value="form.title"
                        :style="{ width: '80%' }"
                        placeholder="请输入文章标题"
                    />
                </n-input-group>

                <WangEditor v-model="form.content"></WangEditor>

                <n-button
                    type="primary"
                    block
                    :loading="loading"
                    @click="submit"
                >
                    立即发布
                </n-button>
            </n-space>
        </n-card>
    </main-page>
</template>

<script>
import MainPage from "@/components/pages/MainPage.vue";
import WangEditor from "@/components/editor/Index.vue";

export default {
    components: {
        MainPage,
        WangEditor
    },

    data() {
        return {
            topics: [],
            loading: false,
            form: {
                topic_id: undefined,
                title: "",
                content: ""
            }
        };
    },

    async created() {
        await this.loadTopics();
    },

    methods: {
        /**
         * @description: 获取文章
         * @param {*}
         * @return {*}
         */
        async loadTopics() {
            const res = await this.$api.topics.list().catch(() => {});
            this.topics = res?.data?.topics || [];
            this.topics = this.topics.map(item => ({
                label: item.title,
                value: item.id
            }));
        },
        /**
         * @description:
         * @param {*}
         * @return {*}
         */
        async submit() {
            this.loading = true;
            const isPass = this.check_params();
            if (!isPass) {
                window.$message.error("提交失败，请重试");
                this.loading = false;
                return false;
            }
            const res = await this.$api.articles.save(this.form).catch(() => {
                this.loading = false;
            });
            if (!res) return false;
            window.$message.success("提交成功");
            this.loading = false;
        },
        /**
         * @description:
         * @param {*}
         * @return {*}
         */
        check_params() {
            const keys = Object.keys(this.form);
            const isPass = keys.reduce((result, item) => {
                if (result && !this.form[item]) return false;
                return result;
            }, true);
            return isPass;
        }
    }
};
</script>
