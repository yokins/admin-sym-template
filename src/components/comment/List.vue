<template>
    <n-card>
        <n-list>
            <template #header> 评论列表： </template>
            <Item v-for="item in 10" :key="item"></Item>
        </n-list>
    </n-card>
</template>

<script>
import Item from './Item.vue';

export default {
    components: {
        Item
    }
}
</script>