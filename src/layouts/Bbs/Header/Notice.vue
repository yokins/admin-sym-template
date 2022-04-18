JavaScript
<template>
    <div class="layouts_bbs_header_notice">
        <n-icon size="20">
            <NotificationsOutline></NotificationsOutline>
        </n-icon>
    </div>
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
