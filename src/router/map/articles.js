const bbs = () => import("@/layouts/Bbs.vue");
const index = () => import("@/pages/articles/Index.vue");

export default {
    articles: {
        path: "/articles",
        name: "articles.self",
        component: bbs
    },
    articlesIndex: {
        path: "",
        name: "articles.index",
        component: index
    }
};
