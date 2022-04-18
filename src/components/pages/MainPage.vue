<template>
    <n-layout>
        <slot name="header"></slot>

        <n-layout-content
            embedded
            content-style="max-width: 1280px;margin: 20px auto;"
        >
            <slot></slot>
        </n-layout-content>
    </n-layout>
</template>
