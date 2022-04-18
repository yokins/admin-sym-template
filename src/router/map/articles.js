const bbs = () => import("@/layouts/Bbs.vue");
const index = () => import("@/pages/articles/Index.vue");
const list = () => import('@/pages/articles/List.vue');
const listSider = () => import("@/pages/articles/siders/List.vue");

export default {
    articles: {
        path: "/articles",
        name: "articles.self",
        component: bbs
    },
    articlesIndex: {
        path: "",
        name: "articles.index",
        redirect: "/articles/kinds/default",
        component: index
    },
    articlesList: {
        path: "kinds/:kind",
        name: "articles.list",
        components: {
            default: list,
            sider: listSider
        }
    }
};
