<template>
    <n-input size="small" round placeholder="搜索" style="width: 150px;">
        <template #prefix>
            <n-icon >
                <Search></Search>
            </n-icon>
        </template>
    </n-input>
</template>

<script>
import { Search } from "@vicons/ionicons5";

export default {
    components: {
        Search
    }
};
</script>
