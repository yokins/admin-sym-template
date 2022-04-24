<template>
    <main-page>
        <template #header v-if="$route.name == 'articlesList'">
            <n-layout-header>
                <div class="articles_kinds">
                    <n-menu
                        :value="$route.params.kind"
                        mode="horizontal"
                        :options="menuOptions"
                    />
                </div>
            </n-layout-header>
        </template>

        <n-grid x-gap="20" cols="24" item-responsive responsive="screen">
            <n-grid-item span="24 m:18">
                <router-view :key="$route.params.kind"></router-view>
            </n-grid-item>
            <n-grid-item span="24 m:6">
                <router-view name="sider"></router-view>
            </n-grid-item>
        </n-grid>
    </main-page>
</template>

<script>
import { renderIcon, renderRouterLink } from "@/utils/vue.render.js";
import { Flame, RibbonOutline } from "@vicons/ionicons5";
import MainPage from "@/components/pages/MainPage.vue";

export default {
    components: {
        MainPage
    },

    data() {
        return {
            activeKey: "default"
        };
    },

    computed: {
        menuOptions() {
            const options = [
                {
                    label: renderRouterLink(
                        "articles.list",
                        { kind: "default" },
                        this.$t("articles.kind.default")
                    ),
                    key: "default"
                },
                {
                    label: renderRouterLink(
                        "articles.list",
                        { kind: "new" },
                        this.$t("articles.kind.new")
                    ),
                    key: "new"
                },
                {
                    label: renderRouterLink(
                        "articles.list",
                        { kind: "cream" },
                        this.$t("articles.kind.cream")
                    ),
                    key: "cream",
                    icon: renderIcon(RibbonOutline)
                },
                {
                    label: renderRouterLink(
                        "articles.list",
                        { kind: "viewed" },
                        this.$t("articles.kind.viewed")
                    ),
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
