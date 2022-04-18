JavaScript
<template>
    <div class="layouts_bbs_header_notice">
        <n-icon size="20" @click="onClickToNotices">
            <NotificationsOutline></NotificationsOutline>
        </n-icon>
    </div>
</template>

<script>
import { NotificationsOutline } from "@vicons/ionicons5";

export default {
    components: {
        NotificationsOutline
    },

    methods: {
        onClickToNotices() {
            this.$router.push({ name: 'notices.list' })
        }
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
