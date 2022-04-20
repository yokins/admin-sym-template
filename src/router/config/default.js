export default [
    {
        route: "root"
    },
    {
        route: "auth",
        children: ["authLogin"]
    },
    {
        route: "articles",
        children: [
            {
                route: "articlesIndex",
                children: ["articlesList", "articleDetail"]
            },
            "articlesNewForm"
        ]
    },
    {
        route: "notices",
        children: ["noticesList"]
    }
];
