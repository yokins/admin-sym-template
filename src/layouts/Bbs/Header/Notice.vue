JavaScript
<template>
    <n-popover :overlap="false" placement="bottom-end" trigger="click">
        <template #trigger>
            <div class="layouts_bbs_header_notice">
                <n-icon size="20">
                    <NotificationsOutline></NotificationsOutline>
                </n-icon>
            </div>
        </template>
        <div class="large-text">啊！</div>
    </n-popover>
</template>

<script>
import { NotificationsOutline } from "@vicons/ionicons5";

export default {
    components: {
        NotificationsOutline
    }
};
</script>

<style lang="scss" scoped>
.layouts_bbs_header_notice {
    display: flex;
    align-content: center;
    cursor: pointer;
}
</style>
