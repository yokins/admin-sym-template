const bbs = () => import("@/layouts/Bbs.vue");
const list = () => import("@/pages/notices/Index.vue");

export default {
    notices: {
        path: "/notices",
        name: "notices.self",
        meta: {
            needLogin: true
        },
        component: bbs
    },
    noticesList: {
        path: "",
        name: "notices.list",
        meta: {
            needLogin: true
        },
        component: list
    }
};
