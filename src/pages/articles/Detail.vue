<template>
    <n-space vertical>
        <n-card>
            <template #header>
                <n-h2>Ruby 求助使用 pg 包连接 postgres 的问题</n-h2>
                <div style="font-size: 14px">
                    <n-text depth="3"> Tertiary Depth </n-text>
                    <n-text depth="1"> 最后由 </n-text>
                    <n-text depth="3"> Tertiary Depth </n-text>
                    <n-text depth="1"> 回复于 </n-text>
                    <n-text depth="3"> Tertiary Depth </n-text>
                </div>
            </template>

            <div class="article_content" v-html="html"></div>
        </n-card>

        <n-card>
            <n-list>
                <template #header> 评论列表： </template>
                <n-list-item>
                    <template #prefix>
                        <n-avatar
                            round
                            size="large"
                            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
                        />
                    </template>
                    <n-thing title="Thing">
                        <template #header-extra>
                            <n-space>
                                <n-button>回复</n-button>
                                <n-button>点赞</n-button>
                            </n-space>
                        </template>
                    </n-thing>
                </n-list-item>
            </n-list>
        </n-card>
    </n-space>
</template>

<script>
export default {
    components: {},

    data() {
        return {
            html: `
                    <p>
                        我一开始是只能本地使用 pg 包使用 localhost 访问本地的 postgres，
                        服务器上的 ruby 使用 pg 包使用 localhost 访问服务器的 postgres，
                        但是使用 ip 地址既访问不了本地数据库，也访问不了云服务器上的数据库
                        我去查了资料，按照指导进行修改了
                        <img src="https://l.ruby-china.com/photo/2072190662/8f9eb7a5-3562-47ae-899d-05bd31bbdac9.png!large" title="" alt="">
                        这时本地可以使用 ip 地址访问本地数据库了，但是还是访问不了服务器的数据库
                        于是我把服务器的数据库也修改了配置，发现服务器使用 ruby 使用 ip 还是访问不了 postgres
                        <img src="https://l.ruby-china.com/photo/2072190662/d28f66aa-0263-4fc0-8621-8df7cb3d3096.png!large" title="" alt="">
                        想问一下该怎么解决
                    </p>

                    <p>
                        目标是本地使用 pg 远程连接服务器上的 postgres
                    </p>
            `
        };
    }
};
</script>

<style lang="scss">
.article_content {
    img {
        max-width: 100%;
    }
}
</style>
