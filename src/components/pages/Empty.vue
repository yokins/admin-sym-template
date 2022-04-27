<template>
    <n-card>
        <n-empty description="暂时没有文章哦">
            <template #icon>
                <n-icon>
                    <AlbumsOutline></AlbumsOutline>
                </n-icon>
            </template>
        </n-empty>
    </n-card>
</template>

<script>
import { AlbumsOutline } from "@vicons/ionicons5";

export default {
    components: {
        AlbumsOutline
    }
};
</script>