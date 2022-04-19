<template>
    <main-page max-width="640px">
        <n-card :title="$t(`router.auth.login`)">
            <n-form ref="form" :model="form" :rules="rules">
                <n-form-item label="账号" path="account">
                    <n-input
                        v-model:value="form.account"
                        placeholder="输入账号"
                    />
                </n-form-item>
                <n-form-item label="密码" path="password">
                    <n-input
                        type="password"
                        v-model:value="form.password"
                        placeholder="输入密码"
                    />
                </n-form-item>

                <n-form-item>
                    <n-button
                        block
                        attr-type="button"
                        type="primary"
                        @click="onClickSubmit"
                    >
                        登录
                    </n-button>
                </n-form-item>
            </n-form>
        </n-card>
    </main-page>
</template>

<script>
import MainPage from "@/components/pages/MainPage.vue";
import { useMessage } from "naive-ui";

export default {
    components: {
        MainPage
    },

    data() {
        return {
            message: useMessage(),
            rules: {
                account: [
                    {
                        required: true,
                        message: "请输入账号",
                        trigger: ["input", "blur"]
                    }
                ],
                password: [
                    {
                        required: true,
                        message: "请输入密码",
                        trigger: ["input", "blur"]
                    }
                ]
            },
            form: {
                account: "",
                password: ""
            }
        };
    },

    methods: {
        onClickSubmit(e) {
            e.preventDefault();
            this.$refs.form.validate(errors => {
                if (!errors) {
                }
            });
        }
    }
};
</script>
