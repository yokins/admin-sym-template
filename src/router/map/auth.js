const common = () => import("@/layouts/Common.vue");
const login = () => import("@/pages/auth/Login.vue");

export default {
    auth: {
        path: "/auth",
        name: "auth",
        component: common
    },
    authLogin: {
        path: "login",
        name: "auth.login",
        component: login
    }
};
