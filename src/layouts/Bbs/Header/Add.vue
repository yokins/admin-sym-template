<template>
    <div class="layouts_bbs_header_add">
        <n-icon size="20" @click="onClickAdd">
            <AddOutline></AddOutline>
        </n-icon>
    </div>
</template>

<script>
import { AddOutline } from "@vicons/ionicons5";
export default {
    components: {
        AddOutline
    },

    methods: {
        onClickAdd() {
            this.$router.push({ name: "articles.new" });
        }
    }
};
</script>
<style lang="scss" scoped>
.layouts_bbs_header_add {
    display: flex;
    align-content: center;
    cursor: pointer;
}
</style>
