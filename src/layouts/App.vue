<template>
    <n-config-provider
        :locale="naiveData.default"
        :date-locale="naiveData.date"
        :theme="naiveTheme"
    >
        <n-message-provider>
            <router-view></router-view>
        </n-message-provider>
    </n-config-provider>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useGlobalStore } from "@/store/modules/global.js";
import { returnNaiveUiI18n } from "@/i18n/index.js";
import { afterChangeTheme } from "@/utils/theme.js";
import { darkTheme } from "naive-ui";

export default {
    beforeCreate() {
        const globalStore = useGlobalStore();
        afterChangeTheme(globalStore.$state.theme);
    },

    provide() {
        return {
            setTheme: this.setTheme
        };
    },

    computed: {
        ...mapState(useGlobalStore, ["locale", "system", "theme"]),
        /**
         * @description: 获取ui框架的国际化
         * @param {*}
         * @return {*}
         */
        naiveData() {
            return returnNaiveUiI18n(this.locale);
        },
        /**
         * @description: naive主题
         * @param {*}
         * @return {*}
         */
        naiveTheme() {
            return this.theme == "light" ? null : darkTheme;
        }
    },

    watch: {
        $route: function () {
            this.setTitle();
        }
    },

    methods: {
        ...mapActions(useGlobalStore, ["changeTheme"]),
        /**
         * @description: 设置网页名称
         * @param {*}
         * @return {*}
         */
        setTitle() {
            this.$nextTick(() => {
                document.title =
                    this.$t(`router.${this.$route.name}`) +
                    " | " +
                    this.system[`${this.locale}_name`];
            });
        },
        /**
         * @description: 设置主题
         * @param {*}
         * @return {*}
         */
        setTheme(theme) {
            this.changeTheme(theme);
            afterChangeTheme(theme);
        }
    }
};
</script>
