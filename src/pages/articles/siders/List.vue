<template>
    <n-card :bordered="false">
        <n-button type="primary" block>
            <template #icon>
                <n-icon>
                    <TextEditStyle20Filled />
                </n-icon>
            </template>
            {{ $t('articles.actions.new') }}
        </n-button>
    </n-card>
</template>

<script>
import { TextEditStyle20Filled } from '@vicons/fluent'
export default {
    components: {
        TextEditStyle20Filled
    },

    data() {
        return {

        }
    }
}
</script>