<template>
    <n-layout>
        <slot name="header"></slot>

        <n-layout-content
            embedded
            :content-style="`max-width: ${maxWidth};margin: 20px auto;`"
        >
            <slot></slot>
        </n-layout-content>
    </n-layout>
</template>

<script>
export default {
    props: {
        maxWidth: {
            type: String,
            default: "1280px"
        }
    }
};
</script>
