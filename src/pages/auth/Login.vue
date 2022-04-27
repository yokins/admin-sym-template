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
                        :loading="loading"
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
import { useGlobalStore } from "@/store/modules/global.js";
import { mapActions } from "pinia";

export default {
    components: {
        MainPage
    },

    data() {
        return {
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
            },
            loading: false
        };
    },

    methods: {
        ...mapActions(useGlobalStore, ["setUser"]),
        onClickSubmit(e) {
            e.preventDefault();
            this.$refs.form.validate(async errors => {
                if (!errors) {
                    this.loading = true;
                    const res = await this.$api.auth
                        .login(this.form)
                        .catch(() => {});
                    if (!res) return false;
                    this.setUser(res.data.user, res.data.token);
                    this.$router.replace({ name: "root.self" });
                    this.loading = false;
                    window.$message.success("登录成功")
                }
            });
        }
    }
};
</script>
