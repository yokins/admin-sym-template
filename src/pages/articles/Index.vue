<template>
    <n-card :bordered="false" :header-style="{ padding: 0 }">
        <template #header>
            <n-menu
                v-model:value="activeKey"
                mode="horizontal"
                :options="menuOptions"
            />
        </template>
    </n-card>
</template>

<script>
import { renderIcon } from '@/utils/vue.render.js'
import { Flame, RibbonOutline } from '@vicons/ionicons5'

export default {
    data() {
        return {
            activeKey: "default"
        };
    },

    computed: {
        menuOptions() {
            const options = [
                {
                    label: this.$t("articles.kind.default"),
                    key: "default",
                },
                {
                    label: this.$t("articles.kind.new"),
                    key: "new",
                },
                {
                    label: this.$t("articles.kind.cream"),
                    key: "cream",
                    icon: renderIcon(RibbonOutline)
                },
                {
                    label: this.$t("articles.kind.viewed"),
                    key: "viewed",
                    icon: renderIcon(Flame)
                }
            ];
            return options;
        }
    }
};
</script>
