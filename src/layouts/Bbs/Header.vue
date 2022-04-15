<template>
    <n-layout-header>
        <div class="layouts_bbs_header">
            <div class="layouts_bbs_header_left">
                <b>Senkoo </b>
                wiki
            </div>

            <div class="layouts_bbs_header_right"></div>
        </div>
    </n-layout-header>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.layouts_bbs_header {
    max-width: 1280px;
    height: 50px;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    .layouts_bbs_header_left {
        font-size: 18px;
        font-weight: 600;

        b {
            color: #eb5424;
        }
    }
}
</style>
