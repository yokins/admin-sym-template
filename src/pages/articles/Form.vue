<template>
    <main-page>
        <n-card :title="$t(`articles.actions.new`)">
            <!-- <template #header-extra>
                <n-button type="primary"> 立即发布 </n-button>
            </template> -->

            <n-space vertical>
                <n-input-group>
                    <n-select
                        :style="{ width: '30%' }"
                        :options="selectOptions"
                        placeholder="请选择文章类型"
                    />
                    <n-input
                        :style="{ width: '70%' }"
                        placeholder="请输入文章标题"
                    />
                </n-input-group>

                <WangEditor></WangEditor>

                <n-button type="primary" block> 立即发布 </n-button>
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
            selectOptions: [
                {
                    label: "option",
                    value: "option"
                }
            ]
        };
    }
};
</script>
