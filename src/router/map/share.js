const common = () => import("@/layouts/Common.vue");
const file = () => import("@/pages/share/File.vue");

export default {
    share: {
        path: "/share",
        name: "share.self",
        component: common
    },
    shareFile: {
        path: "file",
        name: "share.file",
        component: file
    }
};
