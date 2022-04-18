<template>
    <main-page>
        <n-card :title="$t(`router.${$route.name}`)">
            <template #header-extra>
                <n-button type="error">
                    <n-icon>
                        <TrashOutline></TrashOutline>
                    </n-icon>
                    清空
                </n-button>
            </template>
            卡片内容
        </n-card>
    </main-page>
</template>

<script>
import MainPage from "@/components/pages/MainPage.vue";
import { TrashOutline } from '@vicons/ionicons5'
export default {
    components: {
        MainPage,
        TrashOutline
    }
};
</script>
