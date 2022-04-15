const bbs = () => import("@/layouts/Bbs.vue");
const home = () => import("@/pages/home.vue");

export default {
    root: {
        path: "/",
        name: "root.self",
        component: bbs
    },
    rootHome: {
        path: "",
        name: "root.home",
        component: home
    }
};
