<template>
    <n-list-item>
        <template #prefix>
            <n-avatar
                round
                size="large"
                src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
            />
        </template>
        <n-thing>
            <template #header> 我是一条数据 </template>

            <template #header-extra>
                <n-space>
                    <n-button>回复</n-button>
                    <n-button>点赞</n-button>
                </n-space>
            </template>

            <template #description>
                <n-space vertical>
                    <n-alert :show-icon="false">
                        Yeah I'm back in the U.S.S.R
                    </n-alert>
                    我吐出来了一跳评论
                </n-space>
            </template>
        </n-thing>
    </n-list-item>
</template>
