const bbs = () => import("@/layouts/Bbs.vue");
const index = () => import("@/pages/articles/Index.vue");
const list = () => import("@/pages/articles/List.vue");
const listSider = () => import("@/pages/articles/siders/List.vue");
const newForm = () => import("@/pages/articles/Form.vue");
const detail = () => import("@/pages/articles/Detail.vue");

export default {
    articles: {
        path: "/articles",
        name: "articles.self",
        component: bbs
    },
    articlesIndex: {
        path: "",
        name: "articles.index",
        redirect: "/articles/list/default",
        component: index
    },
    articlesList: {
        path: "list/:kind",
        name: "articles.list",
        components: {
            default: list,
            sider: listSider
        }
    },
    articlesNewForm: {
        path: "new",
        name: "articles.new",
        meta: {
            needLogin: true
        },
        component: newForm
    },
    articleDetail: {
        path: "detail/:id",
        name: "articles.detail",
        component: detail
    }
};
