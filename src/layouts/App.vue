<template>
    <n-config-provider
        :locale="naiveData.default"
        :date-locale="naiveData.date"
    >
        <router-view></router-view>
    </n-config-provider>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useGlobalStore } from "@/store/modules/global.js";
import { returnNaiveUiI18n } from "@/i18n";

export default {
    computed: {
        ...mapState(useGlobalStore, ["locale"]),
        naiveData() {
            return returnNaiveUiI18n(this.locale);
        }
    }
};
</script>
