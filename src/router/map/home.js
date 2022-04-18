const bbs = () => import("@/layouts/Bbs.vue");
const home = () => import("@/pages/home.vue");

export default {
    root: {
        path: "/",
        name: "root.self",
        redirect: '/articles',
        component: bbs
    }
};
