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
        children: ["articlesIndex"]
    }
];
