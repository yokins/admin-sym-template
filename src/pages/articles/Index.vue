<template>
    <n-layout>
        <n-layout-header>
            <div class="articles_kinds">
                <n-menu
                    v-model:value="activeKey"
                    mode="horizontal"
                    :options="menuOptions"
                />
            </div>
        </n-layout-header>
        <n-layout-content embedded content-style="max-width: 1280px;margin: 20px auto;">
            <n-grid cols="24" item-responsive responsive="screen">
                <n-grid-item span="24 m:19">
                    <router-view :key="$route.params.kind"></router-view>
                </n-grid-item>
                <n-grid-item span="24 m:5">
                    <router-view name="sider"></router-view>
                </n-grid-item>
            </n-grid>
        </n-layout-content>
    </n-layout>
</template>

<script>
import { renderIcon } from "@/utils/vue.render.js";
import { Flame, RibbonOutline } from "@vicons/ionicons5";

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
                    key: "default"
                },
                {
                    label: this.$t("articles.kind.new"),
                    key: "new"
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

<style lang="scss" scoped>
.articles_kinds {
    max-width: 1280px;
    margin: 0 auto;
}
</style>
