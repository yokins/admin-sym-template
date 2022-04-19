import { createRouter, createWebHistory } from "vue-router";
import { beforeGuards, afterGuards } from "./guards.js";
import routerMap from "@/router/map/index.js";

/**
 * @description: 默认的路由元数据
 * @param {*}
 * @return {*}
 */
export const defaultMeta = {
    needLogin: false
};

/**
 * @description: 创建单个页面路由的数据结构
 * @param {*}
 * @return {*}
 */
export const generateRoute = item => {
    let route = {};
    switch (typeof item) {
        case "string":
            route = routerMap[item];
            break;
        case "object":
            route = routerMap[item.route];
            break;
        default:
            return false;
    }
    route.meta = { ...defaultMeta, name: route.name, ...route.meta };
    return route;
};

/**
 * @description: 生成页面数组
 * @param {*}
 * @return {*}
 */
export const generateRoutes = list => {
    const routes = list.map(item => {
        const route = generateRoute(item);
        if (item.children) {
            const children = generateRoutes(item.children);
            route.children = children;
        }
        return route;
    });
    return routes;
};

/**
 * @description: 生成路由
 * @param {*} routes
 * @return {*}
 */
export const generateRouter = routes => {
    return createRouter({
        history: createWebHistory(),
        routes: routes
    });
};

/**
 * @description: 挂载全局前置守卫
 * @param {*} router
 * @return {*}
 */
export const mountBeforeGuards = (router, guards) => {
    guards.forEach(item => {
        router.beforeEach(item);
    });
};

/**
 * @description: 挂载全局后置守卫
 * @param {*} router
 * @return {*}
 */
export const mountAfterGuards = (router, guards) => {
    guards.forEach(item => {
        router.afterEach(item);
    });
};

/**
 * @description: 初始化路由
 * @param {*}
 * @return {*}
 */
export const initRouter = (params = { routes: [] }) => {
    const routes = generateRoutes(params.routes);
    const router = generateRouter(routes);
    mountBeforeGuards(router, beforeGuards);
    mountAfterGuards(router, afterGuards);
    return router;
};
