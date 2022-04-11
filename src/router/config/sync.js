import routerConfigDefault from './default';

export default [
    ...routerConfigDefault,
    {
        route: "share",
        children: ["shareFile"]
    }
];
