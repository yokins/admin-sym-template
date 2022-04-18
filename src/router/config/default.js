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
                children: [
                    {
                        route: "articlesList"
                    }
                ]
            },
            "articlesNewForm"
        ]
    },
    {
        route: "notices",
        children: ["noticesList"]
    }
];
