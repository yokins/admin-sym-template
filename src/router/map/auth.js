const bbs = () => import("@/layouts/Bbs.vue");
const login = () => import("@/pages/auth/Login.vue");

export default {
    auth: {
        path: "/auth",
        name: "auth.self",
        component: bbs
    },
    authLogin: {
        path: "login",
        name: "auth.login",
        component: login
    }
};
