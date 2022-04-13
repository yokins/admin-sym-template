<template>
    <n-date-picker v-model:value="timestamp" type="date" clearable />
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useGlobalStore } from "@/store/modules/global.js";

export default {
    data() {
        return {};
    },
    computed: {
        ...mapState(useGlobalStore, ["locale"]),
    }
};
</script>
