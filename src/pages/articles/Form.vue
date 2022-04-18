<template>
    <main-page>
        <n-card :title="$t(`articles.actions.new`)">
        </n-card>
    </main-page>
</template>

<script>
import MainPage from "@/components/pages/MainPage.vue";
import { TrashOutline } from "@vicons/ionicons5";

export default {
    components: {
        MainPage,
        TrashOutline
    }
};
</script>
