<template>
    <n-layout-header bordered>
        <div class="layouts_bbs_header">
            <div class="layouts_bbs_header_left" @click="onClickRoot">
                <b :style="{ color: themeVars.primaryColor }">Senkoo </b>
                wiki
            </div>

            <div class="layouts_bbs_header_right">
                <n-space align="center">
                    <header-search></header-search>
                    <header-notice></header-notice>
                    <header-add></header-add>
                    <header-avatar></header-avatar>
                </n-space>
            </div>
        </div>
    </n-layout-header>
</template>

<script>
import HeaderAvatar from "./Header/Avatar.vue";
import HeaderSearch from "./Header/Search.vue";
import HeaderNotice from "./Header/Notice.vue";
import HeaderAdd from "./Header/Add.vue";
import { useThemeVars } from "naive-ui";

export default {
    components: {
        HeaderAvatar,
        HeaderSearch,
        HeaderNotice,
        HeaderAdd
    },

    data() {
        return {
            themeVars: useThemeVars()
        };
    },

    methods: {
        onClickRoot() {
            this.$router.push({ name: 'root.self' })
        }
    }
};
</script>

<style lang="scss" scoped>
.layouts_bbs_header {
    max-width: 1280px;
    height: 50px;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    .layouts_bbs_header_left {
        font-size: 18px;
        font-weight: 600;
        cursor: pointer;
    }
}
</style>
