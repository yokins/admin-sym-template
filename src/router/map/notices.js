const bbs = () => import("@/layouts/Bbs.vue");
const list = () => import("@/pages/notices/Index.vue");

export default {
    notices: {
        path: "/notices",
        name: "notices.self",
        component: bbs
    },
    noticesList: {
        path: "",
        name: "notices.list",
        component: list
    }
};
